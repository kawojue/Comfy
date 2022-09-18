const openBtn = document.querySelector('.open-btn')
const closeBtn = document.querySelector('.close-btn')
const cartOpen = document.querySelector('.cart-open')
const cartClose = document.querySelector('.cart-close')
const sideBar = document.querySelector('#sidebar')
const sidebarCart = document.querySelector('#sidebar-cart')
const sidebarCartCenter = document.querySelector('#sidebar-cart-center')

cartOpen.addEventListener('click', () => {
    sidebarCartCenter.classList.add('show')
    sidebarCart.classList.add('show')
})

cartClose.addEventListener('click', () => {
    sidebarCartCenter.classList.remove('show')
    sidebarCart.classList.remove('show')
})

openBtn.addEventListener('click', () => {
    sideBar.classList.remove('hidden')
})

closeBtn.addEventListener('click', () => {
    sideBar.classList.add('hidden')
})