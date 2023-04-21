<template>
  <div>
    <div class="relative w-full">
      <img
        class="w-full absolute top-0 left-0"
        src="/img/upper-gradient.svg"
        alt=""
      />
    </div>
    <div class="w-full flex min-h-screen overflow-hidden">
      <div class="w-4/12 bg-green2 flex flex-col justify-center items-center">
        <div
          class="bg-green1 w-10/12 p-8 rounded-md flex flex-col justify-center items-center space-y-8 z-50"
        >
          <p class="text-2xl">سلام دوست من !</p>
          <p>جهت ورود و یا عضویت شماره همراه خود را وارد کنید</p>

          <AuthCheckOtp v-if="showOtpForm" />
          <AuthLogin v-else @show-check-otp-form="() => (showOtpForm = true)" />

          <p>یا ورود با</p>

          <div class="flex gap-8">
            <img
              class="bg-black1 rounded-md p-1.5"
              src="/img/svg/googleplus.svg"
              alt=""
            />
            <img
              class="bg-black1 rounded-md p-1.5"
              src="/img/svg/github.svg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div class="w-8/12 bg-green1 flex justify-center items-center">
        <div class="w-full flex flex-col justify-center items-center z-10 space-y-12">
          <img class="w-4/12" src="/img/user-login.svg" alt="" />
         
            <p class="bg-black1 rounded-md p-2 w-5/12 text-center text-green-400 ">Dear user, your identity has been confirmed</p>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
    middleware: 'guest'
})

const showOtpForm = ref(false);
</script>
