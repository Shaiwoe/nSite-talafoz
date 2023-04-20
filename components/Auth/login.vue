<template>
  <div class="w-full">
    <div v-if="errors.length > 0">
      <ul class="mb-0">
        <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
      </ul>
    </div>

    <form @submit.prevent="login" class="flex flex-col space-y-8 w-full">
      
      <input
        v-model="cellphone"
        class="bg-transparent p-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-green-500 block w-full rounded-md focus:ring-1"
        type="text"
        placeholder="شماره همراه"
        name=""
        id=""
      />
      <button class="bg-yellow1 text-gray-800 p-2 rounded-xl">ورود</button>
    </form>
  </div>
</template>

<script setup>
import { useToast } from "vue-toastification";

const emit = defineEmits(['showCheckOtpForm'])

const cellphone = ref(null)
const toast = useToast()
const errors = ref([]);
const loading = ref(false);

async function login() {
    if (cellphone.value == null) {
        toast.error("شماره موبایل الزامی است")
        return
    }

    const pattern = /^(\+98|0)?9\d{9}$/;
    if (!pattern.test(cellphone.value)) {
        toast.error("فرمت شماره موبایل معتبر نیست")
        return;
    }

    try {
        loading.value = true;
        errors.value = [];

        const data = await $fetch('/api/auth/login', {
            method: 'POST',
            body: { cellphone: cellphone.value }
        })

        toast.success("کد ورود برای شما ارسال شد");
        emit('showCheckOtpForm')
        
    } catch (error) {
        errors.value = Object.values(error.data.data.message).flat();
    } finally {
        loading.value = false;
    }

}
</script>