<template>
  <nav class="navbar">
    <div class="navbar-center">
      <span class="nav-icon">
        <i class="fa fa-bars"></i>
      </span>
      <img src="/images/logo.svg" alt="Store logo" />
      <div class="cart-btn" @click="openCart">
        <span class="nav-icon">
          <i class="fa fa-cart-plus"/>
        </span>
        <div class="cart-items">{{ cartItems }}</div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'NavBar',
  computed:{
    ...mapState('cart',['cartItems'])
  },
  methods:{
    ...mapMutations("app", ["setDrawer"]),
    openCart(){
      this.setDrawer(true)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.navbar {
  position: sticky;
  top: 0;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  background: rgb(231, 226, 221);
  z-index: 1;
}
.navbar-center {
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
}
.nav-icon {
  font-size: 1.5rem;
}
.cart-btn {
  position: relative;
  cursor: pointer;
}
.cart-items {
  position: absolute;
  top: -8px;
  right: -8px;
  background: var(--primaryColor);
  padding: 0 5px;
  border-radius: 30%;
  color: var(--mainWhite);
}
</style>
