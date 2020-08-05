<template>
    <section class="products">
        <div class="section-title">
            <h2>our products</h2>
        </div>
        <div class="products-center">
            <Product v-for="product in products" :details="product" :key="product.id" />
        </div>
    </section>
</template>


<script>
import Product from './Product.vue'
import { mapActions, mapGetters } from "vuex";

export default {
    components:{
        Product
    },
    created(){
     this.getProducts()
    },
    computed:{
      ...mapGetters("product", ["products"])
    },
    methods:{
      ...mapActions("product", ["getProducts"])
    }
}
</script>

<style>
.products {
  padding: 4rem 0;
}
.section-title h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 5rem;
  text-transform: capitalize;
  letter-spacing: var(--mainSpacing);
}
.products-center {
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-column-gap: 1.5rem;
  grid-row-gap: 2rem;
}
</style>