import {
    fetchAllProducts
} from "./fetchData.js"

import displayProd from "./displayProd.js"

const loadingSpin = document.querySelector('#loading-spin')
const productsContainer = document.querySelector('#products-container')

fetchAllProducts()
    .then(products => {
        loadingSpin.classList.add('hidden')
        const newProducts = []
        products.forEach(product => {
            const {
                featured
            } = product.fields;
            if (featured) {
                newProducts.push(product)
            }
        })
        displayProd(productsContainer, newProducts)
    })
    .catch(err => {
        setTimeout(() => {
            loadingSpin.classList.add('hidden')
            productsContainer.innerHTML = `Error - ${err.message}`
        }, 2500);
    })