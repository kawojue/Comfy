import {
    fetchAllProducts
} from "./fetchData.js"
import displayProd from "./displayProd.js"

const productsContainer = document.querySelector('#products-container')
const searchInput = document.querySelector('#search-input')
const priceRange = document.querySelector('.price-range')
const rangeValue = document.querySelector('.range-value')
const btns = document.querySelectorAll('.btn-container button')

window.addEventListener('DOMContentLoaded', () => {
    displayProducts("all")
})

btns.forEach(btn => {
    btn.addEventListener('click', e => {
        displayProducts(e.target.dataset.id)
        rangeValue.innerHTML = `${e.target.dataset.id}`
    })
})

priceRange.addEventListener('input', e => {
    displayProducts(e.target.value, "price")
    rangeValue.innerHTML = `< $${e.target.value}`
})

searchInput.addEventListener('keyup', e => {
    displayProducts(e.target.value.toLowerCase(), "search")
    e.target.value === "" ? rangeValue.innerHTML = "all" : rangeValue.innerHTML = "searching..."
})

function displayProducts(value, filterBy = "company") {
    fetchAllProducts()
        .then(products => {
            const newProducts = products.filter(product => {
                const {
                    name,
                    price,
                    company
                } = product.fields;
                const formatPrice = price / 100
                if (filterBy === "company") {
                    if (value === "all") {
                        return product
                    }
                    return company === value
                } else if (filterBy === "price") {
                    return formatPrice < value
                } else if (filterBy === "search") {
                    return name.toLowerCase().includes(value) || company.includes(value);
                } else {
                    return null
                }
            })
            displayProd(productsContainer, newProducts, "./product.html?id=${id}")
        })
        .catch(err => container.innerHTML = `Error - ${err.message}`)
}