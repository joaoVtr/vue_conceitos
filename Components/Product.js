app.component('product-display',{
    setup () {
        const inStock = ref (13);
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
            changeImage,
            titleWithBrand,
            inStockComputed
        }
    },
    template:
    `<div class="product-display">
     <div class="product-container">
        <div class="product-image">
            <img :src="image"  :alt="img_product">
        </div>
        <div class="product-info">
            <h1>{{titleWithBrand}}</h1>
            <h2> {{inStockComputed}}</h2>
            <ul>
                <li v-for="detail in details">
                    {{detail}}
                </li>
            </ul>
            <div v-for="variant in variants" :key="variant.id"
            @mouseover="changeImage(variant.image)"
            class="color-circle"
            :style="{backgroundColor: variant.color}"
            >
        </div>
        <button
        class="button"
        :class = "{disabledButton: inStock < 1}"
        @click="$emit('add-to-cart')"
        :disabled = "inStock < 1"
        >Add to Cart
    </button>
    </div>
    </div>
</div>`

});