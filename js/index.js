import Alpine from 'alpinejs';
import LazyLoad from 'vanilla-lazyload';
import fetchCollectionProducts from './graphql/services/collectionService';
import { handleGraphQLError } from './utils/errorHandler';

// Initialize LazyLoad
const lazyLoad = new LazyLoad({
  elements_selector: '.lazy',
});

window.nooxtheme = window.nooxtheme || {};
window.nooxtheme.lazyLoad = lazyLoad;
window.nooxtheme.Alpine = Alpine;

Alpine.start();

(async function () {
  try {
    window.nooxtheme.lazyLoad.update();

    fetchCollectionProducts('clothing', STOREFRONT_ACCESS_TOKEN)
      .then((data) => {
        console.log('Collection Data:', {
          products: data.products,
        });
      })
      .catch((error) => handleGraphQLError(error, 'initializing app'));
  } catch (error) {
    handleGraphQLError(error, 'initializing app');
  }
})();
