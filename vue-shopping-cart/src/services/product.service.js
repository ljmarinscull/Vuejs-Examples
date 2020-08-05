import { LocalApi } from '../api/LocalApi';

export const productService = {
    getProducts
};

async function getProducts() {
    const products = await new LocalApi().getProducts()
    return products
}
