<template>
  <div id="app">
    <NavBar/>
    <Hero/>
    <ProductList/>
    <Cart/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import ProductList from './components/ProductList.vue'
import Cart from './components/Cart.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Hero,
    ProductList,
    Cart
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
