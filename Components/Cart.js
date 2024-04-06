app.component('cart-display',{ 
    props:['carteiro'],
    setup(){

    }, 
    template: 
    `<div class="cart">
        Cart: {{carteiro}}
    </div>`

})