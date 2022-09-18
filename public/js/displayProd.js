function displayProd(container, List) {
    container.innerHTML = List.map(product => {
        const {
            id,
            fields
        } = product;
        const {
            name,
            price,
            image,
        } = fields;
        const {
            url
        } = image[0];
        const formatPrice = price / 100
        return `
                <div class="product">
                    <div class="image-container">
                        <img src="${url}" alt="${name}">
                        <div class="product-icon">
                            <a href="./product.html?id=${id}" target="_blank">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </a>
                            <button data-id="${id}">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </button>
                        </div>
                    </div>
                    <footer>
                        <p>${name}</p>
                        <span>$${formatPrice}</span>
                    </footer>
                </div>
                `
    }).join("")
}

export default displayProd;