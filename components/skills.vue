<template>
    <div class="container mx-auto p-4 lg:p-8">
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
</template>