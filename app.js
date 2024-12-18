const getItems = async () => {
    const res = await fetch('data.json')
    const data = await res.json()
    console.log(data)
    item(data)

}
getItems()

function item(data) {
    const menu = document.querySelector('.menu')
    data.forEach((item) => {
        const items = document.createElement('div')
        items.classList.add('.items')
        items.innerHTML = `
            <img id='item-img' src=${item.image.desktop} alt=${item.name}>
          <div class="cart-container" onclick="addToCart('${item.name}',${item.price})">
            <img class="cart-img" src="./assets/images/icon-add-to-cart.svg" alt="cart"><span>Add to Cart</span>
          </div>
          <div class="item-name">
            <p class="type">${item.category}</p>
            <p class="dessert-name">${item.name}</p>
            <p class="price">$ ${item.price.toFixed(2)}</p>
          </div>
          `
        menu.append(items)
        // const cartContainer = document.querySelector('.cart-container')
        // cartContainer.addEventListener('click', () => {
        //     console.log('gfds')
        // })

    })
}

function addToCart(name, price) {
    console.log(name, price);
    const cartItem = document.createElement('div')
    cartItem.classList.add('cart-item')
    cartItem.innerHTML=`
    <div class="info">
            <p>${name}</p>
            <div>
              <span>1x</span><span>$ ${price.toFixed(2)}</span><span>total</span>
            </div>
          </div>
          <img class='remove' onclick="this.parentNode.remove()" src="./assets/images/icon-remove-item.svg" alt="">
        </div>
    `
    document.querySelector('.order-list').prepend(cartItem)
    
}

// const cartContainer = document.querySelectorAll('.cart-container');

// cartContainer.forEach((cart)=>{
//     cart.addEventListener('click',(e)=>{
//         console.log(cart);
//         // console.log  ('click')
//         // count ++;
//         // e.innerHTML=`
//         // <span>-</span><p>${count}</p><span>+</span>
//         // `
//     })
// })
