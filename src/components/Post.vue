<template lang="">
  <div
    class="lg:w-[40rem] lg:ml-5 bg-base-200 rounded-2xl  pb-5 flex flex-col items-center"
  >
    <div
      class="w-[35rem] flex items-center justify-center h-16 bg-base-300 rounded-full mt-5"
    >
      <p class="text-2xl truncate px-3">{{title}}</p>
    </div>
    <p class="text-xl text-center mx-5 mt-2 h-[6rem]">
        {{body}}
    </p>
    <router-link  :to="{ name: 'Singlepost', params: { id: id }}" class="btn btn-accent mt-7">Watch Post</router-link>
  </div>
</template>
<script setup>
import {defineProps} from 'vue'
let props = defineProps(['title','body','id'])
</script>
