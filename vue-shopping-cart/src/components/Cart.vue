<template>
  <div class="cart-overlay" :class="[drawer ? 'show-cart-overlay' : 'hide-cart-overlay']">
    <div class="cart" :class="[drawer ? 'showCart' : 'hideCart']">
      <span class="close-cart" @click="closeCart">
        <i class="fa fa-window-close"></i>
      </span>
      <h2>your cart</h2>
      <div class="cart-content">
        <CartItem v-for="item in cartList" :key="item.id" :details="item"/>
      </div>
      <CartFooter />
    </div>
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";
import CartFooter from "./CartFooter.vue";
import { mapMutations, mapState } from "vuex";

export default {
  name: "Cart",
  components: {
    CartItem,
    CartFooter,
  },
  computed: {
    ...mapState("app", ["drawer"]),
    ...mapState("cart", ["cartList"]),
  },
  methods: {
    ...mapMutations("app", ["setDrawer"]),
    closeCart() {
      this.setDrawer(false);
    },
  },
};
</script>

<style>
.cart-overlay {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  transition: var(--mainTransition);
  background: rgb(240, 157, 81, 0.5);
  z-index: 2;
}

.hide-cart-overlay {
  visibility: hidden;
}

.show-cart-overlay {
  visibility: visible;
}

.cart {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: scroll;
  z-index: 3;
  background: rgb(231, 226, 221);
  padding: 1.5rem;
  transition: var(--mainTransition);
}

.hideCart{
  transform: translateX(100%);
}

.showCart {
  transform: translateX(0);
}

@media screen and (min-width: 768px) {
  .cart {
    width: 30vw;
    min-width: 450px;
  }
}

.close-cart {
  font-size: 1.7rem;
  cursor: pointer;
  display: flex;
  align-items: flex-start;
}

.cart h2 {
  text-transform: capitalize;
  text-align: center;
  letter-spacing: var(--mainSpacing);
  margin-bottom: 2rem;
}
</style>