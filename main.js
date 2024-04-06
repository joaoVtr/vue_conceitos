const { createApp, ref, computed } = Vue
  
const app = createApp({
  setup() {
    const cart = ref(0);
    const addToCart = () => { 
        // if(cart.value < inStock.value){
            cart.value ++
        // }
    }
    return {
        cart,
        addToCart,
    }
  }
})
