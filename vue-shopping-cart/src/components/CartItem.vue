<template>
  <div class="cart-item">
    <img :src="details.image" alt="Product" />
    <div>
      <h4>{{details.title}}</h4>
      <h5>${{details.price}}</h5>
      <span class="remove-item" @click="remove()">remove</span>
    </div>
    <div>
      <i class="fa fa-chevron-up" @click="incrementAmount()"></i>
      <p class="item-amount">{{details.amount}}</p>
      <i class="fa fa-chevron-down" @click="decrementAmount()"></i>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
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
          amount: 0,
        };
      },
    },
  },
  methods: {
    ...mapMutations("cart", [
      "REMOVE_PRODUCT",
      "INC_PRODUCT_AMOUNT",
      "DEC_PRODUCT_AMOUNT",
    ]),
    remove() {
      this.REMOVE_PRODUCT(this.details.id);
    },
    decrementAmount() {
      console.log("decrementAmount");
      this.DEC_PRODUCT_AMOUNT(this.details.id);
    },
    incrementAmount() {
      console.log("incrementAmount");
      this.INC_PRODUCT_AMOUNT(this.details.id);
    },
  },
};
</script>

<style>
.cart-item {
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  grid-column-gap: 1.5rem;
  margin: 1.5rem 0;
}
.cart-item img {
  width: 75px;
  height: 75px;
}
.cart-item h4 {
  font-size: 0.85rem;
  text-transform: capitalize;
  letter-spacing: var(--mainSpacing);
  display: flex;
  align-items: flex-start;
}
.cart-item h5 {
  margin: 0.5rem 0;
  letter-spacing: var(--mainSpacing);
  display: flex;
  align-items: flex-start;
}
.item-amount {
  text-align: center;
}
.remove-item {
  color: grey;
  cursor: pointer;
  display: flex;
  align-items: flex-start;
}
.fa-chevron-up,
.fa-chevron-down {
  color: var(--primaryColor);
  cursor: pointer;
}
</style>