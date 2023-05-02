<template>
    <div>
        <LayoutHeader />
        <div class="container mx-auto min-h-screen p-4 lg:p-8 flex justify-between mt-24 gap-20">

            <div class="w-full flex flex-col space-y-6 h-full">
                <h1 class="text-4xl">ارتباط با ما</h1>
                <p class="text-gray-400">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                    گرافیک است. چاپگرها و
                    متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
                    کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده
                    شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
                    الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و
                    دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
                    اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>


                <div class="flex gap-4">
                    <p>ایدی پشتیبانی تلگرام: </p>
                    <p>Talafoz_Admin@</p>
                </div>

                <div class="flex gap-4">
                    <p> کانال تلگرام تلفظ :</p>
                    <p>Talafoz_channel@</p>
                </div>


            </div>

            <div class="w-full flex flex-col bg-black1 h-full rounded-lg p-2">

                <div v-if="errors.length > 0" class="text-red1">
                    <ul class="mb-0">
                        <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                    </ul>
                </div>

                <form @submit.prevent="send" class="w-full p-4 space-y-4" action="">
                    <div class="flex flex-col gap-4">
                        <label for="">نام</label>
                        <input v-model="formData.name"
                            class="w-full rounded-md bg-green1 focus:outline-none focus:border-green-600 focus:ring-green-600"
                            placeholder="نام و نام خانوادگی" type="text" name="" id="">
                    </div>
                    <div class="flex flex-col gap-4">
                        <label for="">ایمیل</label>
                        <input v-model="formData.email"
                            class="w-full rounded-md bg-green1 focus:outline-none focus:border-green-600 focus:ring-green-600"
                            placeholder="ایمیل خود را وارد کنید" type="text" name="" id="">
                    </div>
                    <div class="flex flex-col gap-4">
                        <label for="">موضوع</label>
                        <input v-model="formData.subject"
                            class="w-full rounded-md bg-green1 focus:outline-none focus:border-green-600 focus:ring-green-600"
                            placeholder="موضوع را وارد کنید" type="text" name="" id="">
                    </div>
                    <div class="flex flex-col gap-4">
                        <label for="">متن</label>
                        <textarea v-model="formData.text"
                            class="w-full rounded-md bg-green1 focus:outline-none focus:border-green-600 focus:ring-green-600"
                            placeholder="متن خود را برای ما ارسال کنید" name="" id="" cols="30" rows="6"></textarea>
                    </div>

                    <div class="flex justify-end">
                        <button type="submit"
                            class="bg-red1 rounded-lg p-2  text-gray-100 w-3/12 justify-center text-center flex gap-2">
                            ارسال
                            پیام
                            <div role="status" v-if="loading">
                                <svg aria-hidden="true"
                                    class="w-5 h-5  text-gray-200 animate-spin dark:text-gray-600 fill-white"
                                    viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="currentColor" />
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentFill" />
                                </svg>
                                <span class="sr-only">Loading...</span>
                            </div>

                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>


<script setup>

import { useToast } from "vue-toastification";

const errors = ref([]);
const loading = ref(false);
const toast = useToast();

// const { $leaflet } = useNuxtApp();

const { public: { apiBase } } = useRuntimeConfig();
const formData = reactive({
    name: "",
    email: "",
    subject: "",
    text: "",
});

async function send() {



    if (formData.name === '' || formData.email === '' || formData.subject === '' || formData.text === '') {
        toast.error("تمام موارد فرم تماس با ما الزامی است.")
        return;
    }



    try {
        loading.value = true;
        errors.value = [];

        const data = await $fetch(`${apiBase}/contact`, {
            method: 'POST',
            body: formData
        })
        toast.success("پیام شما با موفقیت ثبت شد");

    } catch (error) {
        errors.value = Object.values(error.data.message).flat();
    } finally {
        loading.value = false;
    }
}

// onMounted(() => {
//     let map = $leaflet.map('map').setView([35.700105, 51.400394], 14);
//     let tiles = $leaflet.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
//         maxZoom: 18,
//         attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
//             'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//         id: 'mapbox/streets-v11',
//         tileSize: 512,
//         zoomOffset: -1
//     }).addTo(map);
//     let marker = $leaflet.marker([35.700105, 51.400394], {
//         icon: $leaflet.icon({
//             popupAnchor: [12, 6],
//             iconUrl: 'images/map/marker-icon.png',
//             shadowUrl: 'images/map/marker-shadow.png'
//         })
//     }).addTo(map)
//         .bindPopup('<b>Hello world!</b><br />I am a popup').openPopup();
// })


</script>