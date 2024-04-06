const { createApp, ref, computed } = Vue
  
const app = createApp({
  setup() {
    const inStock = ref (13);
    const cart = ref(0);
    const addToCart = () => { 
        if(cart.value < inStock.value){
            cart.value ++
        }
    }
    const image =  ref ("./assets/images/t-shirt-blue.png"); 
    const changeImage = (varImage) => {
        image.value = varImage
    }
    const product_title =  "T-Shirt";
    const brand = 'La Concha'; 
    const titleWithBrand = computed( ()=>{
        return product_title + " - by "  +  brand;
    });

    const inStockComputed = computed( () => {
          if (inStock.value > 10) {
            return "In Stock";  
          }else if(inStock.value <=0){
            return "Out of Stock";
          }else{
            return "Low Stock"
          }
    })
    return {
        product_title: ref("T-Shirt"),
        brand,
        image,
        img_product: "Camisa",
        inStock,
        details:  ['50% cotton', '30% polyester', '20% wool'],
        variants: [
            {id:1,color:'blue', image: "./assets/images/t-shirt-blue.png" }, 
            {id:2,color:'green', image: "./assets/images/t-shirt-green.png"  }
        ],
        cart,
        addToCart,
        changeImage,
        titleWithBrand,
        inStockComputed
    }
  }
})
