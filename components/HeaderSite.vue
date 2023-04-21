<template>
  <div>
    <div class="relative w-full">
      <img class="w-full absolute top-0 left-0 -z-50" src="/img/upper-gradient.svg" alt="" />
    </div>
    <div class="container mx-auto flex justify-between text-gray-100 p-4 sm:px-8 sm:py-12 items-center">
      <!-- Logo  -->
      <div id="nova" class="flex text-transparent text-3xl lg:text-4xl bg-clip-text bg-gradient-to-r from-white to-red1 z-50">
        <NuxtLink to="/">Talafoz.com</NuxtLink>
      </div>

      <!-- Menu site  -->
      <div id="bg-menu" class="hidden lg:flex gap-20 text-sm bg-black1 rounded-full py-4 px-8">
        <NuxtLink class="text-center" to="/">تلفظ</NuxtLink>
        <NuxtLink class="text-center" to="/">دوره های آموزشی</NuxtLink>
        <NuxtLink class="text-center" to="/">مقالات</NuxtLink>
        <NuxtLink class="text-center" to="/">پادکست</NuxtLink>
        <NuxtLink class="text-center" to="/">پرسش و پاسخ ها</NuxtLink>
        <NuxtLink class="text-center" to="/">تماس با ما</NuxtLink>
      </div>

      <!-- Sign in / SignUp  -->
      <div class="flex justify-end gap-2 lg:gap-4 text-sm z-50 items-center">
        <button type="button" class="bg-black1 rounded-md p-1.5">
          <img class="w-7" src="/img/svg/zoom.svg" alt="" />
        </button>

        <button type="button" 
          class="bg-black1 rounded-md p-1.5">
          <svg width="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.4"
              d="M16.6203 22H7.3797C4.68923 22 2.5 19.8311 2.5 17.1646V11.8354C2.5 9.16894 4.68923 7 7.3797 7H16.6203C19.3108 7 21.5 9.16894 21.5 11.8354V17.1646C21.5 19.8311 19.3108 22 16.6203 22Z"
              fill="currentColor"></path>
            <path
              d="M15.7551 10C15.344 10 15.0103 9.67634 15.0103 9.27754V6.35689C15.0103 4.75111 13.6635 3.44491 12.0089 3.44491C11.2472 3.44491 10.4477 3.7416 9.87861 4.28778C9.30854 4.83588 8.99272 5.56508 8.98974 6.34341V9.27754C8.98974 9.67634 8.65604 10 8.24487 10C7.8337 10 7.5 9.67634 7.5 9.27754V6.35689C7.50497 5.17303 7.97771 4.08067 8.82984 3.26285C9.68098 2.44311 10.7814 2.03179 12.0119 2C14.4849 2 16.5 3.95449 16.5 6.35689V9.27754C16.5 9.67634 16.1663 10 15.7551 10Z"
              fill="currentColor"></path>
          </svg>
        </button>

        <NuxtLink v-if="authUser" to="/auth" class="">
          <img class="w-10" src="/img/profile.png" alt="">
        </NuxtLink>

        <NuxtLink v-else to="/auth/login" class="bg-black1 rounded-md p-1.5">
          <svg width="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.997 15.1746C7.684 15.1746 4 15.8546 4 18.5746C4 21.2956 7.661 21.9996 11.997 21.9996C16.31 21.9996 19.994 21.3206 19.994 18.5996C19.994 15.8786 16.334 15.1746 11.997 15.1746Z"
              fill="currentColor"></path>
            <path opacity="0.4"
              d="M11.9971 12.5838C14.9351 12.5838 17.2891 10.2288 17.2891 7.29176C17.2891 4.35476 14.9351 1.99976 11.9971 1.99976C9.06008 1.99976 6.70508 4.35476 6.70508 7.29176C6.70508 10.2288 9.06008 12.5838 11.9971 12.5838Z"
              fill="currentColor"></path>
          </svg>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const { authUser } = useAuth();
</script>
