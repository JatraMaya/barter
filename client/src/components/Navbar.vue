<template>
    <nav class="h-14">
        <div class="flex items-center justify-between w-screen h-full bg-white">
            <p class="ml-2 md:ml-16 lg:ml-16">Barter</p>
            <div @click.prevent="[isClicked ? (isClicked = false) : (isClicked = true)]" class="burger">
                <span :class="[isClicked ? 'transform rotate-25' : '']" class="burger-span"></span>
                <span :class="[isClicked ? 'bg-transparent' : 'bg-black']" class="block w-6 h-px my-1"></span>
                <span :class="[isClicked ? 'transform -rotate-25' : '']" class="burger-span"></span>
            </div>
            <ul class="items-center hidden mr-16 md:flex lg:flex">
                <li v-for="(item, index) in menuItems" :key="index" :href="'#' + item" class="pl-8 text-center cursor-pointer">{{ item.toUpperCase() }}</li>
            </ul>
        </div>
        <div :class="[isClicked ? '' : 'transform scale-y-0']" class="mobile-menu">
            <ul class="ml-2">
                <li v-for="(item, index) in menuItems" :key="index" :href="'#' + item" @click.prevent="[isClicked ? (isClicked = false) : (isClicked = true)]" class="cursor-pointer hover:text-gray-500">{{ item.toUpperCase() }}</li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            isClicked: false,
            menuItems: ["home", "about", "portfolio"],
        };
    },
};
</script>
