<template>
    <div>
        <HeaderSite />
        <div class="container mx-auto p-4 lg:p-8 text-gray-100 space-y-24">
            <!-- Slider top  -->
            <div class="flex flex-col-reverse lg:flex-row w-full items-center lg:mt-12">
                <div class="flex flex-col w-full gap-4 mt-16">
                    <p class="lg:text-2xl lg:mt-8">
                        زمان و دانش بزرگ ترین سرمایه زندگی یک انسان است
                    </p>
                    <ul class="flex flex-col space-y-6 mt-6">
                        <li class="flex items-center gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5 bg-yellow1 text-black rounded-full p-0.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            <p class="text-gray-400 text-sm lg:text-lg">
                                جامع ترین دوره های آموزشی به صورت پروژه محور
                            </p>
                        </li>
                        <li class="flex items-center gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5 bg-yellow1 text-black rounded-full p-0.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            <p class="text-gray-400 text-sm lg:text-lg">
                                یادگیری سریع و آسان با تمرین و حل آزمون
                            </p>
                        </li>
                        <li class="flex items-center gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5 bg-yellow1 text-black rounded-full p-0.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            <p class="text-gray-400 text-sm lg:text-lg">
                                ضمانت بازگشت وجه در صورت نارضایتی
                            </p>
                        </li>
                        <li class="flex items-center gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5 bg-yellow1 text-black rounded-full p-0.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            
                            <p class="text-gray-400 text-sm lg:text-lg">
                                پشتیبانی سریع و رفع مشکلات
                            </p>
                        </li>
                    </ul>
                </div>
                <div class="flex w-full lg:w-6/12">
                    <img class="w-full" src="/img/soon.svg" alt="" />
                </div>
            </div>
            <!-- main Site  -->
            <div class="flex flex-col w-full space-y-12">
                <div class="mt-12 text-lg lg:text-xl flex gap-2 items-center">
                    <img class="w-10" src="/img/svg/add.svg" alt="" />
                    <p class="mt-2">جدید ترین دوره های سایت ها</p>
                </div>

                <!-- new post box -->
                <div class="grid lg:grid-cols-3 gap-12">
                    <!-- last post 1 -->
                    <div v-for="courses in data?.data?.last" :key="courses.id"
                        class="flex flex-col w-full shadow-lg bg-gradient-to-tr from-black1 from-10% via-black1 via-30% to-red1 to-90% rounded-lg">
                        <img class="rounded-2xl p-4" src="/img/laravel-developer-1604669669.webp"
                            alt="" />

                        <div class="flex justify-between">
                            <h2 class="p-2 mt-2 text-xl">
                                {{ courses.title }}
                            </h2>

                            <div class="flex py-2 cursor-default">
                                <div class="flex text-xs gap-x-3 bg-green1 rounded-r-xl items-center p-2">
                                    <img class="w-6" src="/img/svg/video.svg" alt="" />
                                    <p class="text-gray-200 mt-1">در حال برگزاری</p>
                                </div>
                            </div>
                        </div>

                        <p class="p-2 mt-2 text-sm text-gray-400">
                            {{ courses.description }}
                        </p>

                        <div class="flex justify-between items-center mt-4">
                            <div class="flex py-2 cursor-default">
                                <div class="flex text-base gap-x-1 text-gray-300 bg-green1 rounded-l-xl items-center p-2">
                                    {{ courses.timeCourse }}
                                    <img class="w-6" src="/img/svg/timer.svg" alt="" />
                                </div>
                            </div>

                            <div class="flex py-2 cursor-default">
                                <div class="flex text-base gap-x-2 text-gray-200 bg-green1 rounded-r-xl items-center p-2">
                                    {{ courses.price }}
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

                <!-- Target learn  -->
                <div class="flex flex-col space-y-4">
                    <!-- title  -->
                    <div class="flex justify-start mt-24">
                        <h3 class="text-2xl">مسیرهای یادگیری از دانشی بی پایان</h3>
                    </div>
                    <!-- all box  -->
                    <div class="grid lg:grid-cols-6 gap-6">
                        <NuxtLink to="/" class="flex bg-black1 rounded-2xl items-center py-2 px-3 justify-between">
                            <div class="flex flex-col gap-4">
                                <p class="text-base">آموزش HTML</p>
                                <p class="text-xs text-text1">شامل 5 دوره</p>
                            </div>
                            <img class="w-12" src="/img/html-5.png" alt="" />
                        </NuxtLink>
                        <div class="flex bg-black1 rounded-2xl items-center py-2 px-3 justify-between">
                            <div class="flex flex-col gap-4">
                                <p class="text-base">آموزش CSS</p>
                                <p class="text-xs text-text1">شامل 5 دوره</p>
                            </div>
                            <img src="/img/css-logo.svg" alt="" />
                        </div>
                        <div class="flex bg-black1 rounded-2xl items-center py-2 px-3 justify-between">
                            <div class="flex flex-col gap-4">
                                <p class="text-base">آموزش JavaScript</p>
                                <p class="text-xs text-text1">شامل 5 دوره</p>
                            </div>
                            <img src="/img/js-logo.svg" alt="" />
                        </div>
                        <div class="flex bg-black1 rounded-2xl items-center py-2 px-3 justify-between">
                            <div class="flex flex-col gap-4">
                                <p class="text-base">آموزش Git</p>
                                <p class="text-xs text-text1">شامل 5 دوره</p>
                            </div>
                            <img id="git" src="/img/git-logo.svg" alt="" />
                        </div>
                        <div class="flex bg-black1 rounded-2xl items-center py-2 px-3 justify-between">
                            <div class="flex flex-col gap-4">
                                <p class="text-sm">آموزش Visual Studio Code</p>
                                <p class="text-xs text-text1">شامل 5 دوره</p>
                            </div>
                            <img src="/img/visualstudio-logo.svg" alt="" />
                        </div>
                        <div class="flex bg-black1 rounded-2xl items-center py-2 px-3 justify-between">
                            <div class="flex flex-col gap-4">
                                <p class="text-sm">آموزش PHPStorm</p>
                                <p class="text-xs text-text1">شامل 5 دوره</p>
                            </div>
                            <img src="/img/phpstorm-logo.svg" alt="" />
                        </div>
                        <div class="flex bg-black1 rounded-2xl items-center py-2 px-3 justify-between">
                            <div class="flex flex-col gap-4">
                                <p class="text-base">آموزش PHP</p>
                                <p class="text-xs text-text1">شامل 5 دوره</p>
                            </div>
                            <img src="/img/js-logo.svg" alt="" />
                        </div>
                        <div class="flex bg-black1 rounded-2xl items-center py-2 px-3 justify-between">
                            <div class="flex flex-col gap-4">
                                <p class="text-base">آموزش CSS</p>
                                <p class="text-xs text-text1">شامل 5 دوره</p>
                            </div>
                            <img src="/img/css-logo.svg" alt="" />
                        </div>
                        <div class="flex bg-black1 rounded-2xl items-center py-2 px-3 justify-between">
                            <div class="flex flex-col gap-4">
                                <p class="text-base">آموزش JavaScript</p>
                                <p class="text-xs text-text1">شامل 5 دوره</p>
                            </div>
                            <img src="/img/js-logo.svg" alt="" />
                        </div>
                        <div class="flex bg-black1 rounded-2xl items-center py-2 px-3 justify-between">
                            <div class="flex flex-col gap-4">
                                <p class="text-base">آموزش Git</p>
                                <p class="text-xs text-text1">شامل 5 دوره</p>
                            </div>
                            <img id="git" src="/img/git-logo.svg" alt="" />
                        </div>
                        <div class="flex bg-black1 rounded-2xl items-center py-2 px-3 justify-between">
                            <div class="flex flex-col gap-4">
                                <p class="text-sm">آموزش Visual Studio Code</p>
                                <p class="text-xs text-text1">شامل 5 دوره</p>
                            </div>
                            <img src="/img/visualstudio-logo.svg" alt="" />
                        </div>
                        <div class="flex bg-black1 rounded-2xl items-center py-2 px-3 justify-between">
                            <div class="flex flex-col gap-4">
                                <p class="text-sm">آموزش PHPStorm</p>
                                <p class="text-xs text-text1">شامل 5 دوره</p>
                            </div>
                            <img src="/img/phpstorm-logo.svg" alt="" />
                        </div>
                        <div class="flex bg-black1 rounded-2xl items-center py-2 px-3 justify-between">
                            <div class="flex flex-col gap-4">
                                <p class="text-base">آموزش HTML</p>
                                <p class="text-xs text-text1">شامل 5 دوره</p>
                            </div>
                            <img class="w-12" src="/img/html-5.png" alt="" />
                        </div>
                        <div class="flex bg-black1 rounded-2xl items-center py-2 px-3 justify-between">
                            <div class="flex flex-col gap-4">
                                <p class="text-base">آموزش CSS</p>
                                <p class="text-xs text-text1">شامل 5 دوره</p>
                            </div>
                            <img src="/img/css-logo.svg" alt="" />
                        </div>
                        <div class="flex bg-black1 rounded-2xl items-center py-2 px-3 justify-between">
                            <div class="flex flex-col gap-4">
                                <p class="text-base">آموزش JavaScript</p>
                                <p class="text-xs text-text1">شامل 5 دوره</p>
                            </div>
                            <img src="/img/js-logo.svg" alt="" />
                        </div>
                        <div class="flex bg-black1 rounded-2xl items-center py-2 px-3 justify-between">
                            <div class="flex flex-col gap-4">
                                <p class="text-base">آموزش Git</p>
                                <p class="text-xs text-text1">شامل 5 دوره</p>
                            </div>
                            <img id="git" src="/img/git-logo.svg" alt="" />
                        </div>
                        <div class="flex bg-black1 rounded-2xl items-center py-2 px-3 justify-between">
                            <div class="flex flex-col gap-4">
                                <p class="text-sm">آموزش Visual Studio Code</p>
                                <p class="text-xs text-text1">شامل 5 دوره</p>
                            </div>
                            <img src="/img/visualstudio-logo.svg" alt="" />
                        </div>
                        <div class="flex bg-black1 rounded-2xl items-center py-2 px-3 justify-between">
                            <div class="flex flex-col gap-4">
                                <p class="text-sm">آموزش PHPStorm</p>
                                <p class="text-xs text-text1">شامل 5 دوره</p>
                            </div>
                            <img src="/img/phpstorm-logo.svg" alt="" />
                        </div>
                        <div class="flex bg-black1 rounded-2xl items-center py-2 px-3 justify-between">
                            <div class="flex flex-col gap-4">
                                <p class="text-base">آموزش HTML</p>
                                <p class="text-xs text-text1">شامل 5 دوره</p>
                            </div>
                            <img class="w-12" src="/img/html-5.png" alt="" />
                        </div>
                        <div class="flex bg-black1 rounded-2xl items-center py-2 px-3 justify-between">
                            <div class="flex flex-col gap-4">
                                <p class="text-base">آموزش CSS</p>
                                <p class="text-xs text-text1">شامل 5 دوره</p>
                            </div>
                            <img src="/img/css-logo.svg" alt="" />
                        </div>
                        <div class="flex bg-black1 rounded-2xl items-center py-2 px-3 justify-between">
                            <div class="flex flex-col gap-4">
                                <p class="text-base">آموزش JavaScript</p>
                                <p class="text-xs text-text1">شامل 5 دوره</p>
                            </div>
                            <img src="/img/js-logo.svg" alt="" />
                        </div>
                        <div class="flex bg-black1 rounded-2xl items-center py-2 px-3 justify-between">
                            <div class="flex flex-col gap-4">
                                <p class="text-base">آموزش Git</p>
                                <p class="text-xs text-text1">شامل 5 دوره</p>
                            </div>
                            <img id="git" src="/img/git-logo.svg" alt="" />
                        </div>
                        <div class="flex bg-black1 rounded-2xl items-center py-2 px-3 justify-between">
                            <div class="flex flex-col gap-4">
                                <p class="text-sm">آموزش Visual Studio Code</p>
                                <p class="text-xs text-text1">شامل 5 دوره</p>
                            </div>
                            <img src="/img/visualstudio-logo.svg" alt="" />
                        </div>
                        <div class="flex bg-black1 rounded-2xl items-center py-2 px-3 justify-between">
                            <div class="flex flex-col gap-4">
                                <p class="text-sm">آموزش PHPStorm</p>
                                <p class="text-xs text-text1">شامل 5 دوره</p>
                            </div>
                            <img src="/img/phpstorm-logo.svg" alt="" />
                        </div>
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
    data,
    error
} = await useFetch(`${apiBase}/index`);

</script>

<style></style>
