<template>
  <div
    class="w-[85rem] flex-col lg:flex-row flex items-center justify-between mx-auto mt-5 overflow-hidden rounded-2xl h-[51.5rem] bg-base-200"
  >
    <div class="w-[50rem] ml-5 h-[30rem]">
      <div class="-translate-y-32">
        <h1 class="text-6xl font-bold text-center leading-[5rem]">
          The Best <br />
          Clothing Shop
        </h1>
        <p class="py-6 text-xl leading-7 text-center">
          Elevate Your Style: Step into the world of colors and designs with our
          clothing store. Discover a collection of the latest trends and diverse
          styles waiting for you. Choose your favorite outfits and embrace your
          inner beauty. Experience being trendy and fashionable with us today.
          Welcome to a realm of exceptional choices!
        </p>
        <div class="w-full flex items-center justify-center mt-10">
          <router-link to="/products" class="btn btn-primary text-xl mx-auto"
            >Products</router-link
          >
        </div>
      </div>
      <div class="-translate-y-[4rem]">
        <swiper
          :slidesPerView="1"
          :spaceBetween="30"
          :loop="true"
          :pagination="{
            clickable: true,
          }"
          :autoplay="{
            delay: 2000,
            disableOnInteraction: false,
          }"
          :navigation="true"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide>
            <div class="card w-96 bg-base-100 h-56 shadow-xl image-full">
              <figure>
                <img class="w-full" src="../assets/img/1.png" alt="Shoes" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="card w-96 bg-base-100 h-56 shadow-xl image-full">
              <figure>
                <img class="w-full" src="../assets/img/2.png" alt="Shoes" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="card w-96 bg-base-100 h-56 shadow-xl image-full">
              <figure>
                <img class="w-full" src="../assets/img/3.png" alt="Shoes" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="card w-96 bg-base-100 shadow-xl h-56 image-full">
              <figure>
                <img class="w-full" src="../assets/img/4.png" alt="Shoes" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="card w-96 bg-base-100 h-56 shadow-xl image-full">
              <figure>
                <img class="w-full" src="../assets/img/3.png" alt="Shoes" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="flex">
      <div
        class="h-[40rem] w-52 -translate-y-[15rem] translate-x-[1rem] space-y-6"
      >
        <div class="sec-box bg-neutral-focus"></div>
        <div class="sec-box bg-[#ECEDEF] overflow-hidden">
          <img src="../assets/img/1.png" class="mt-5" alt="img-1" />
        </div>
        <div class="sec-box bg-[#ECEDEF] overflow-hidden">
          <img src="../assets/img/2.png" class="mt-5" alt="img-2" />
        </div>
        <div class="sec-box bg-neutral-focus"></div>
        <div class="sec-box bg-neutral-focus"></div>
      </div>
      <div
        class="h-[40rem] w-52 -translate-y-[10rem] translate-x-[3rem] space-y-6"
      >
        <div class="sec-box bg-neutral-focus"></div>
        <div class="sec-box bg-[#ECEDEF] overflow-hidden">
          <img src="../assets/img/3.png" class="mt-5" alt="img-3" />
        </div>
        <div class="sec-box bg-neutral-focus"></div>
        <div class="sec-box bg-[#ECEDEF] overflow-hidden">
          <img src="../assets/img/4.png" class="mt-5" alt="img-4" />
        </div>
        <div class="sec-box bg-[#ECEDEF] overflow-hidden">
          <img src="../assets/img/1.png" class="mt-5" alt="img-5" />
        </div>
      </div>
    </div>
  </div>
  <div class="w-[85rem] mt-5 flex flex-col items-center">
    <p class="text-5xl font-bold bbb">New Post</p>
    <div
      class="grid lg:grid-cols-2 gap-y-7 mt-5 grid-rows-2 justify-items-center gap-x-7"
    >
      <div
        class="lg:w-[40rem] bg-base-200 pb-5 rounded-2xl flex flex-col items-center"
      >
        <div
          class="w-[35rem] flex items-center justify-center h-16 bg-base-300 rounded-full mt-5"
        >
          <p class="text-3xl">Example Post</p>
        </div>
        <p class="text-xl text-center mx-5 mt-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum quam
          possimus, cupiditate rerum fugiat, neque delectus corporis quibusdam
          facere soluta, porro nisi quis dolorem. Similique reprehenderit nam
          praesentium quasi? Esse Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Magnam ullam dignissimos dolorum vitae, quos sint...
        </p>
        <router-link to="/posts/1" class="btn btn-accent mt-7">Watch Post</router-link>
      </div>
      <div
        class="lg:w-[40rem] bg-base-200 rounded-2xl flex flex-col items-center"
      >
        <div
          class="w-[35rem] flex items-center justify-center h-16 bg-base-300 rounded-full mt-5"
        >
          <p class="text-3xl">Example Post</p>
        </div>
        <p class="text-xl text-center mx-5 mt-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum quam
          possimus, cupiditate rerum fugiat, neque delectus corporis quibusdam
          facere soluta, porro nisi quis dolorem. Similique reprehenderit nam
          praesentium quasi? Esse Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Magnam ullam dignissimos dolorum vitae, quos sint...
        </p>
        <router-link to="/posts/2" class="btn btn-accent mt-7">Watch Post</router-link>
      </div>
      <div
        class="lg:w-[40rem] bg-base-200 rounded-2xl flex flex-col items-center"
      >
        <div
          class="w-[35rem] flex items-center justify-center h-16 bg-base-300 rounded-full mt-5"
        >
          <p class="text-3xl">Example Post</p>
        </div>
        <p class="text-xl text-center mx-5 mt-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum quam
          possimus, cupiditate rerum fugiat, neque delectus corporis quibusdam
          facere soluta, porro nisi quis dolorem. Similique reprehenderit nam
          praesentium quasi? Esse Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Magnam ullam dignissimos dolorum vitae, quos sint...
        </p>
        <router-link to="/posts/3" class="btn btn-accent mt-7">Watch Post</router-link>
      </div>
      <div
        class="lg:w-[40rem] bg-base-200 rounded-2xl flex flex-col items-center"
      >
        <div
          class="w-[35rem] flex items-center justify-center h-16 bg-base-300 rounded-full mt-5"
        >
          <p class="text-3xl">Example Post</p>
        </div>
        <p class="text-xl text-center mx-5 mt-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum quam
          possimus, cupiditate rerum fugiat, neque delectus corporis quibusdam
          facere soluta, porro nisi quis dolorem. Similique reprehenderit nam
          praesentium quasi? Esse Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Magnam ullam dignissimos dolorum vitae, quos sint...
        </p>
        <router-link to="/posts/4" class="btn btn-accent mt-7">Watch Post</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

import "../swiper.css";

// import required modules
import {Autoplay, Pagination, Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay,Pagination, Navigation],
    };
  },
};
</script>
