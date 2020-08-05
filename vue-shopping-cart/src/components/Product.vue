<template>
  <article class="product">
    <div class="img-container">
      <img :src="details.image" alt="Product" class="product-img" />
      <button
        class="bag-btn"
        data-id="1"
        v-text="isInCart ? 'In cart' : 'Add to bag'"
        :disabled="isInCart"
        @click="addToCart()"
      >
        <i class="fa fa-shopping-cart"></i>
      </button>
    </div>
    <h3>{{details.title}}</h3>
    <h4>{{details.price}}</h4>
  </article>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  props: {
    details: {
      required: true,
      type: Object,
      default: function () {
        return {
          id: 0,
          title: "Unknow",
          price: 0,
          image: "Unknow",
        };
      },
    },
  },
  computed: {
    ...mapState('cart',['cartList']),
    isInCart() {
      const value = this.cartList.find(item => item.id === this.details.id);
      return value === undefined ? false : true
    },
  },
  methods: {
    ...mapMutations('cart',{ addProduct:'ADD_PRODUCT'}),
    addToCart() {
      this.addProduct(this.details)
    },
  },
};
</script>

<style>
.img-container {
  position: relative;
  overflow: hidden;
}
.bag-btn {
  position: absolute;
  top: 70%;
  right: 0;
  background: var(--primaryColor);
  border: none;
  text-transform: uppercase;
  padding: 0.5rem 0.75rem;
  letter-spacing: var(--mainSpacing);
  font-weight: bold;
  transition: var(--mainTransition);
  transform: translateX(101%);
  cursor: pointer;
}
.bag-btn:hover {
  color: var(--mainWhite);
}
.fa-shopping-cart {
  margin-right: 0.5rem;
}
.img-container:hover .bag-btn {
  transform: translateX(0);
}
.product-img {
  display: block;
  width: 100%;
  min-height: 12rem;
  transition: var(--mainTransition);
}
.img-container:hover .product-img {
  opacity: 0.5;
}

.product h3 {
  text-transform: capitalize;
  font-size: 1.1rem;
  margin-top: 1rem;
  letter-spacing: var(--mainSpacing);
  text-align: center;
}

.product h4 {
  margin-top: 0.7rem;
  letter-spacing: var(--mainSpacing);
  color: var(--primaryColor);
  text-align: center;
}
</style>