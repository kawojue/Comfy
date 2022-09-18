const allProductsUrl = 'https://course-api.com/javascript-store-products'
const singleProductUrl = 'https://course-api.com/javascript-store-single-product'

const fetchSingleProduct = async () => {
    const params = new URLSearchParams(window.location.search);
    console.log(params)
    const searchID = params.get('id');
    const response = await fetch(`${singleProductUrl}?id=${searchID}`);
    const data = await response.json();
    return data;
}

export async function fetchAllProducts() {
    const response = await fetch(`${allProductsUrl}`);
    const data = await response.json();
    return data;
}

export default fetchSingleProduct;