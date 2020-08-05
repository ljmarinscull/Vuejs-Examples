<template>
    <div class="cart-footer">
        <h3>your total : $ <span class="cart-total">{{ cartTotal }}</span></h3>
        <button class="clear-cart banner-btn" @click="removeAllItems">clear cart</button>
    </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";

export default {
  
  computed:{
   ...mapState("cart", ["cartTotal"]),
  },
  methods:{
    ...mapMutations("cart", { clearCart: "CLEAR_CART" }),
    ...mapMutations("app", ["setDrawer"]),
    removeAllItems(){
      this.clearCart()
      this.setDrawer(false)
    }
  }
}
</script>
<style>
.cart-footer {
  margin-top: 2rem;
  letter-spacing: var(--mainSpacing);
  text-align: center;
}
.cart-footer h3 {
  text-transform: capitalize;
  margin-bottom: 1rem;
}
</style>