<template lang="">
  <div>
    <div class="overflow-x-auto h-[40rem] overflow-y-scroll .bbbbb">
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>title</th>
            <th>price</th>
            <th>Product quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(cart, index) in store.carts" :key="index">
            <th>{{ index }}</th>
            <th>
              <img class="w-16 h-16" :src="cart.image" alt="cart image" />
            </th>
            <td>{{ cart.title }}</td>
            <td>${{ cart.price }}</td>
            <td>
              <div class="flex items-center">
                <button
                  @click="reduceCart(cart.id)"
                  class="btn btn-primary text-xl  w-10 h-10"
                >
                -
                </button>
                <h1 class="text-xl mx-3">{{ cart.quantity }}</h1>
                <button
                  @click="addCart(cart.id)"
                  class="btn btn-primary text-xl w-10 h-10"
                >
                  +
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div
      class="w-96 h-28 bg-base-200 flex items-center justify-center rounded-2xl mx-auto"
    >
      <p v-if="isCart" class="text-3xl">No Cart</p>
      <p v-else="isCart" class="text-3xl">
        Total Price : ${{ store.price.toFixed(2) }} <br />
        Total quantity : {{ store.carts.length }}
      </p>
    </div>
  </div>
</template>
<script setup>
import { useCartStore } from "../stores/cart";
import { ref } from "vue";
const store = useCartStore();
const isCart = ref(false);
const deleteText = ref(false);
if (store.carts.length < 1) {
  isCart.value = true;
} else {
  isCart.value = false;
}
function reduceCart(id) {
  const cartItem = store.carts.find((cart) => cart.id === id);
  if (cartItem) {
    cartItem.quantity--;
    store.price -= cartItem.price;
    localStorage.setItem('carts',JSON.stringify(store.carts))
  }
  if (cartItem.quantity == 0) {
    store.carts.splice(cartItem,1)
    localStorage.setItem('carts',JSON.stringify(store.carts))
  }
}
function addCart(id) {
  const cartItem = store.carts.find((cart) => cart.id === id);
  if (cartItem) {
    cartItem.quantity++;
    store.price += cartItem.price;
    localStorage.setItem('carts',JSON.stringify(store.carts))
  }
}
</script>
