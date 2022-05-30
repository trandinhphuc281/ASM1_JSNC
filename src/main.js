import Navigo from 'navigo'; // When using ES modules.
import ProductPage from './pages/homePage';
import HomePage from './pages/homePage';
import ProductDetail from './pages/productDetail';

const router = new Navigo('/', { linksSelector: "a" });

const print = function (content, id) {
    const page = document.querySelector('#app');
    if (page) {
        page.innerHTML = content.render(id)
    }


}

router.on({
    '/': () => print(HomePage),
    '/products': () => print(ProductPage),
    '/products/:id': ({ data: { id } }) => print(ProductDetail, id)
});

router.resolve();