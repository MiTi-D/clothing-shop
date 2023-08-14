<template>
  <div class="overflow-x-hidden">
    <div class="navbar bg-base-300">
  <div class="flex-1">
<div class="dropdown">
  <label class="btn btn-circle lg:hidden swap swap-rotate">
  
  <!-- this hidden checkbox controls the state -->
  <input type="checkbox" />
  
  <!-- hamburger icon -->
  <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
  
  
</label>
  <ul tabindex="0" class="dropdown-content w z-[1] menu p-2 shadow bg-base-100 rounded-box">
      <li><router-link to="/" class="text-3xl">Home</router-link></li>
      <li><router-link to="/posts" class="text-3xl">Posts</router-link></li>
      <li><router-link to="/products" class="text-3xl">Products</router-link></li>
  </ul>
</div>
    <router-link to="/" class="btn btn-ghost mx-auto lg:mx-0 lg:mb-0 w-26 normal-case text-xl border-none">
      <img class="w-12 h-12" src="./assets/img/logo.png" alt="">
      <p class="-translate-x-3 text-5xl lg:text-base">Shop</p>
    </router-link>
  </div>
  <ul class="menu menu-horizontal space-x-5 px-1 flex-1 mr-56 hidden lg:flex">
      <li><router-link to="/" class="text-xl">Home</router-link></li>
      <li><router-link to="/posts" class="text-xl">Posts</router-link></li>
      <li><router-link to="/products" class="text-xl">Products</router-link></li>
    </ul>
  <div class="flex-none">
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-circle bg-base-300 border-none">
        <div class="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" class=" mt-2  lg:mr-4 w-8 h-8 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span class="badge badge-md indicator-item lg:mr-4 mt-2">{{ store.carts.length }}</span>
        </div>
      </label>
      <div tabindex="0" class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div class="card-body">
          <span class="font-bold text-lg">{{ store.carts.length }} Items</span>
          <span class="text-info">Subtotal: ${{ store.price.toFixed(2) }}</span>
          <div class="card-actions">
            <router-link to="/cart" class="btn btn-primary btn-block">View cart</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="w-[85rem] mx-auto  mt-5 rounded-2xl">
  <router-view></router-view>
</div>
<footer
    class="footer mt-8 mb-7 flex justify-between items-center p-4 bg-base-300 w-[75rem] lg:w-[85rem] mx-auto text-neutral-content rounded-2xl"
  >
    <div class="items-center grid-flow-col">
      <img
        class="w-12 h-12"
        src="./assets/img/logo.png"
        alt=""
      />
      <p>Copyright © 2023 - All right reserved</p>
    </div>
    <p class="text-xl mr-20">Made With ❤️ By MiTi</p>
    <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <a
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="fill-current cursor-pointer"
        >
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
          ></path>
          </svg
      >
    </a>
      <a
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="fill-current cursor-pointer"
        >
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
          ></path></svg
      ></a>
      <a
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="fill-current cursor-pointer"
        >
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
          ></path></svg
      ></a>
      <a
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="fill-current cursor-pointer"
        >
          <path
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
          /></svg
      ></a>
    </div>
  </footer>  
  </div>

</template>

<script setup>
import {useCartStore} from './stores/cart'
const store = useCartStore()
</script>
