import { collectionProductsQuery } from '../queries/getCollection';
import fetchGraphQL from '../client/graphqlClient';
import { handleGraphQLError } from '../../utils/errorHandler';

const transformProduct = (node) => ({
  id: node.id,
  title: node.title,
  handle: node.handle,
  available: node.availableForSale,
  created_at: node.createdAt,
  vendor: node.vendor,
  type: node.productType,
  tags: node.tags,
  price: node.priceRange?.minVariantPrice?.amount,
  price_currency: node.priceRange?.minVariantPrice?.currencyCode,
  compare_at_price: node.compareAtPriceRange?.minVariantPrice?.amount,
  compare_at_price_currency: node.compareAtPriceRange?.minVariantPrice?.currencyCode,
  images:
    node.images?.edges?.map((edge) => ({
      id: edge.node.id,
      src: edge.node.originalSrc,
      alt: edge.node.altText,
      width: edge.node.width,
      height: edge.node.height,
    })) || [],
  first_variant: node.variants?.edges?.[0]?.node
    ? {
        id: node.variants.edges[0].node.id,
        title: node.variants.edges[0].node.title,
        available: node.variants.edges[0].node.availableForSale,
        price: node.variants.edges[0].node.price?.amount,
        price_currency: node.variants.edges[0].node.price?.currencyCode,
        compare_at_price: node.variants.edges[0].node.compareAtPrice?.amount,
        compare_at_price_currency: node.variants.edges[0].node.compareAtPrice?.currencyCode,
        selected_options: node.variants.edges[0].node.selectedOptions,
      }
    : null,
});

const transformFilters = (filters) =>
  filters.map((filter) => ({
    active_values: [], // This would need to be populated based on current filter state
    label: filter.label,
    param_name: filter.id,
    type: filter.type,
    url_to_remove: '', // This would need to be constructed based on current URL
    values: filter.values.map((value) => ({
      active: false, // This would need to be determined based on current filter state
      count: value.count,
      label: value.label,
      param_name: filter.id,
      url_to_add: '', // This would need to be constructed based on current URL
      url_to_remove: '', // This would need to be constructed based on current URL
      value: value.input,
    })),
  }));

const fetchCollectionProducts = (handle, storefront_access_token) => {
  const query = collectionProductsQuery(handle);

  return fetchGraphQL(query, storefront_access_token)
    .then((result) => {
      if (!result) {
        throw new Error('No response received from GraphQL API');
      }

      if (!result.data) {
        console.error('GraphQL Response:', result);
        throw new Error('No data received in GraphQL response');
      }

      if (!result.data.collection) {
        console.error('GraphQL Data:', result.data);
        throw new Error(`Collection '${handle}' not found`);
      }

      const collection = result.data.collection;

      if (!collection.products?.edges) {
        console.error('Collection Data:', collection);
        throw new Error('Invalid collection data structure');
      }

      const products = collection.products.edges.map((edge) => transformProduct(edge.node));

      return {
        collection_id: collection.id,
        collection_title: collection.title,
        collection_handle: collection.handle,
        products,
        pagination: {
          has_next_page: collection.products.pageInfo.hasNextPage,
          end_cursor: collection.products.pageInfo.endCursor,
        },
      };
    })
    .catch((error) => {
      console.error('Original error:', error);
      return handleGraphQLError(error, 'fetching collection products');
    });
};

export default fetchCollectionProducts;
