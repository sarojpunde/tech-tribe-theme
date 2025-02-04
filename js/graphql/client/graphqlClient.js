const fetchGraphQL = async (query) => {
  try {
    const response = await fetch(`/api/2025-01/graphql.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_API_KEY,
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      console.error('GraphQL Response not OK:', response.status, response.statusText);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    if (result.errors) {
      console.error('GraphQL Errors:', result.errors);
      throw new Error(result.errors[0].message);
    }

    return result;
  } catch (error) {
    console.error('GraphQL Request Failed:', error);
    throw error;
  }
};

export default fetchGraphQL;
