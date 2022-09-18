import fetchSingleProduct from './fetchData.js'

const container = document.querySelector('#container')
const navigate = document.querySelector('.navigate')

fetchSingleProduct()
    .then(product => {
        displayProduct(product);
    })
    .catch(err => {
        container.parentElement.innerHTML = `There was an error.. - ${err.message}`;
    });

function displayProduct(product) {
    const {
        id,
        fields
    } = product;
    const {
        name,
        company,
        description,
        colors,
        price,
        image
    } = fields;
    const {
        url
    } = image[0];
    const formatPrice = price / 100;

    document.title = name.toUpperCase();
    navigate.innerHTML = name;

    container.innerHTML = `
        <img src="${url}" alt="${name}">
        <div class="sub-container">
            <h3 class="title">${name}</h3>
            <p class="subtitle">${company}</p>
            <span class="price">${formatPrice}</span>
            <div class="round-shape">
                ${colors.map(color => `<span style="background: ${color}"></span>`).join('')}
            </div>
            <p class="texts">${description}</p>
            <button type="button" class="product-cart" data-id="${id}">
                add to cart
            </button>
        </div>
    `
}