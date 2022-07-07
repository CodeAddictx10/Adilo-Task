<template>
    <nav class="bg-white-900 py-2.5 border-b border-slate-300">
        <div
            class="2xl:container flex flex-wrap justify-between items-center h-12 px-2 sm:px-4 md:px-14"
        >
            <a href="/" class="flex items-center">
                <img
                    src="https://adilo.bigcommand.com/assets/logov2.b4ac263b.svg"
                    class="mr-3 h-6 sm:h-9"
                    alt="Adilo Logo"
                />
            </a>

            <div class="flex items-center md:order-2">
                <div class="flex items-center space-x-4">
                    <span
                        class="hidden md:block border-r py-2 cursor-pointer hover:text-primary font-medium border-slate-500 pr-3"
                        >Help</span
                    >
                    <div class="block md:flex md:space-x-3">
                        <button
                            type="button"
                            class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300"
                            id="user-menu-button"
                            aria-expanded="false"
                            data-dropdown-toggle="dropdown"
                        >
                            <span class="sr-only">Open user menu</span>
                            <img
                                class="w-10 h-9 rounded-sm"
                                src="https://www.gravatar.com/avatar/ebae219c10f15c5833230d0f0ad72f2e?s=200&d=mp"
                                alt="user photo"
                            />
                        </button>
                        <div class="hidden md:flex justify-center flex-col">
                            <h5 class="text-sm">Code Addict</h5>
                            <span class="block text-xs"
                                >onadeji.sam@gmail.com</span
                            >
                        </div>
                    </div>
                </div>
                <!-- Dropdown menu -->
                <div
                    class="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow"
                    id="dropdown"
                >
                    <div class="py-3 px-4">
                        <span class="block text-sm text-gray-900"
                            >Olufemi Samuel</span
                        >
                        <span
                            class="block text-sm font-medium text-gray-500 truncate"
                            >CodeAddict</span
                        >
                    </div>
                    <ul class="py-1" aria-labelledby="dropdown">
                        <li>
                            <a
                                href="#"
                                class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                                >Dashboard</a
                            >
                        </li>
                    </ul>
                </div>
                <button
                    data-collapse-toggle="mobile-menu-2"
                    type="button"
                    class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="mobileMenu"
                    aria-expanded="false"
                >
                    <span class="sr-only">Open main menu</span>
                    <svg
                        class="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </button>
            </div>

            <div
                class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1 max-h-max min-h-max"
            >
                <ul
                    class="flex flex-col md:flex-row md:space-x-10 md:mt-0 md:text-sm md:font-medium max-h-12 min-h-max"
                >
                    <li
                        class="group py-4 hover:border-t-4 hover:border-primary max-h-max min-h-max flex items-center space-x-1 text-slate-500"
                        v-for="item in menu"
                    >
                        <a
                            href="/"
                            class="block group-hover:text-[#21455E] text-base"
                            aria-current="page"
                            v-if="!item.hasDropDown"
                            >{{ item.item }}</a
                        >

                        <Menu as="li" class="relative inline-block text-left">
                            <div v-if="item.hasDropDown">
                                <MenuButton
                                    class="block group-hover:text-[#21455E] text-base focus:outline-none focus:ring-0"
                                >
                                    {{ item.item }}
                                    <i class="fa-solid fa-chevron-down"></i>
                                </MenuButton>
                            </div>

                            <transition
                                enter-active-class="transition duration-100 ease-out"
                                enter-from-class="transform scale-95 opacity-0"
                                enter-to-class="transform scale-100 opacity-100"
                                leave-active-class="transition duration-75 ease-in"
                                leave-from-class="transform scale-100 opacity-100"
                                leave-to-class="transform scale-95 opacity-0"
                            >
                                <MenuItems
                                    class="absolute -right-16 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-20"
                                >
                                    <div class="px-1 py-1">
                                        <MenuItem
                                            v-slot="{ active }"
                                            v-for="(
                                                subItem, _index
                                            ) in item.subMenu"
                                            :key="_index"
                                        >
                                            <button
                                                :class="[
                                                    active
                                                        ? 'text-primary'
                                                        : 'text-slate-500',
                                                    'group flex w-full text-left items-center px-2 py-4 text-sm border-b  border-slate-200 last:border-none',
                                                ]"
                                            >
                                                {{ subItem }}
                                            </button>
                                        </MenuItem>
                                    </div>
                                </MenuItems>
                            </transition>
                        </Menu>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

const menu = reactive<
    { item: string; hasDropDown: boolean; subMenu?: string[] }[]
>([
    { item: "Projects", hasDropDown: false },
    {
        item: "Tools & App",
        hasDropDown: true,
        subMenu: ["Snapbyte Recorder", "AudioBounce", "Sugar Voice"],
    },
    { item: "Channels", hasDropDown: false },
    { item: "Contacts", hasDropDown: false },
    { item: "Analytics", hasDropDown: false },
    { item: "Settings", hasDropDown: false },
]);
</script>

<style scoped></style>
