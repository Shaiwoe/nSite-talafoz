<template>
  <div class="w-full">
    <div class="flex flex-col space-y-8 w-full">
      <input
        v-model="otp"
        class="bg-transparent p-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-green-500 block w-full rounded-md focus:ring-1"
        type="text"
        placeholder="کد ورود"
        name=""
        id=""
      />
      <div v-if="errors.length > 0" class="text-red-600 text-center rounded-xl">
        <ul>
          <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
        </ul>
      </div>

      <div class="flex flex-col gap-4">
        <button @click="checkOtp" class="bg-yellow1 text-white p-2 rounded-xl">تایید</button>
        <AuthResendOtp @resend-otp-errors="(err) => errors = err" />
      </div>

    </div>
  </div>
</template>

<script setup>
import { useToast } from "vue-toastification";

const { authUser } = useAuth();
const otp = ref(null)
const toast = useToast()
const errors = ref([]);
const loading = ref(false);

async function checkOtp() {
    if (otp.value == null) {
        toast.error("کد تایید الزامی است")
        return
    }

    const pattern = /^[0-9]{6}$/;
    if (!pattern.test(otp.value)) {
        toast.error("فرمت کد ورود معتبر نیست")
        return;
    }

    try {
        loading.value = true;
        errors.value = [];

        const data = await $fetch('/api/auth/checkOtp', {
            method: 'POST',
            body: { otp: otp.value }
        })

        authUser.value = data
        toast.success("باموفقیت وارد شدید");
        return navigateTo('/')

    } catch (error) {
      toast.error("کد ورود صحیح نیست")
    } finally {
        loading.value = false;
    }

}
</script>