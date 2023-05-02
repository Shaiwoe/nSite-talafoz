<template>
    <div class="container mx-auto p-4 lg:p-8">
        <div class="flex flex-col w-full space-y-12">
            <div class="mt-12 text-lg lg:text-xl flex gap-2 items-center justify-between">
                <div class="flex gap-4">
                    <img class="w-10" src="/img/svg/video.svg" alt="" />
                    <p class="mt-3">جدید ترین دوره های سایت ها</p>
                </div>

                <NuxtLink to="#" class="flex gap-4 items-center">
                    <p class="mt-1 text-sm">مشاهده همه</p>
                    <img class="w-7" src="/img/svg/left.svg" alt="" />
                </NuxtLink>
            </div>

            <!-- new post box -->
            <div class="grid lg:grid-cols-3 gap-12">

                <div v-for="course in courses.data.last" :key="course.id" class="relative">
                    <!-- last post 1 -->
                    <div
                        class="flex flex-col w-full shadow-lg bg-gradient-to-tr from-black1 from-10% via-black1 via-30% to-light to-90% transition duration-300 ease-in-out  rounded-lg">
                        <img class="rounded-2xl p-4" :src="course.image" alt="" />

                        <div class="flex justify-between">
                            <h2 class="p-2 mt-2 text-xl">
                                {{ course.title }}
                            </h2>

                            <div class="flex py-2 cursor-default">
                                <div class="flex text-xs gap-x-3 bg-green1 rounded-r-xl items-center p-2">
                                    <img class="w-6" src="/img/svg/video.svg" alt="" />
                                    <p class="text-gray-200 mt-1">{{ course.condition }}</p>
                                </div>
                            </div>
                        </div>

                        <p class="p-2 mt-2 text-sm text-gray-400">
                            {{ course.description }}
                        </p>

                        <div class="flex justify-between items-center mt-4">
                            <div class="flex py-2 cursor-default">
                                <div class="flex text-base gap-x-1 text-gray-300 bg-green1 rounded-l-xl items-center p-2">
                                    {{ course.timeCourse }}
                                    <img class="w-6" src="/img/svg/timer.svg" alt="" />
                                </div>
                            </div>

                            <div class="flex py-2 cursor-default">
                                <div class="flex text-base gap-x-2 text-gray-200 bg-green1 rounded-r-xl items-center p-2">
                                    <div v-if="course.is_sale" class="flex gap-4 ">
                                        <p class="line-through decoration-pink-500 ">{{ numberFormat(course.price) }}</p>
                                        <p>{{ numberFormat(course.sale_price) }}</p>

                                        <div class="absolute top-4 left-4 bg-red1 py-1 px-2 rounded-br-lg text-sm">
                                            تخفیف ویژه
                                        </div>
                                    </div>
                                    <div v-else>
                                        <p>{{ numberFormat(course.price) }}</p>
                                    </div>
                                    <img class="w-6" src="/img/svg/card.svg" alt="" />
                                </div>
                            </div>
                        </div>

                        <NuxtLink to="#" class="flex py-4 mt-2 border-t border-gray-700 justify-center items-center">
                            <span class="flex items-center gap-x-2 text-white text-base">
                                مشاهده اطلاعات دوره
                                <img class="w-6" src="/img/svg/left.svg" alt="" />
                            </span>
                        </NuxtLink>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>


<script setup>
const {
    public: {
        apiBase
    },
} = useRuntimeConfig();

const {
    data: courses,
    error
} = await useFetch(`${apiBase}/index`);

// console.log(courses);



</script>