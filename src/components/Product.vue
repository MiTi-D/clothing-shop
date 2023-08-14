<template lang="">
  <div class="card card-compact w-80 lg:w-96 bg-base-100 shadow-xl">
    <figure>
      <img
      class="w-96 h-96"
        :src="image"
        alt="Shoes"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title truncate">{{title}}</h2>
      <p class="truncate">{{description}}</p>
      <div class="card-actions items-center justify-between">
        <p class="text-2xl">Price : ${{price}}</p>
        <button @click="addcart" class="btn btn-primary">Add Cart</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import {defineProps} from 'vue'
import {useCartStore} from '../stores/cart'
const props = defineProps(['title','image','price','description','id'])
const store = useCartStore()
function addcart() {
    store.addCart(props.id,props.title,props.image,props.price)
}
</script>
