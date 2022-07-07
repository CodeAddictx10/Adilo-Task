<template>
    <main class="2xl:container mx-auto pr-14">
        <div class="grid md:grid-cols-12">
            <aside class="col-span-2 bg-slate-100/100 h-full pt-6">
                <nav>
                    <ul class="text-left mx-auto px-2 space-y-5">
                        <li
                            class="border border-primary bg-slate-200 rounded-md py-2 px-5 2xl:px-8 flex items-center space-x-3 cursor-pointer"
                        >
                            <i class="fa-solid fa-clapperboard"></i>
                            <span>My Recordings</span>
                        </li>
                        <li
                            class="hover:bg-slate-200 rounded-md py-2 flex items-center space-x-3 px-8 cursor-pointer"
                        >
                            <i class="fa-solid fa-share-nodes"></i>
                            <span>Requested</span>
                        </li>
                    </ul>
                </nav>
            </aside>
            <section class="col-span-10 xl:pl-20 pt-6">
                <!-- Breadcrumbs -->
                <div class="w-full mb-8">
                    <ol class="flex space-x-3 text-sm">
                        <li class="cursor-pointer hover:text-primary">
                            SnapByte
                            <i
                                class="fa-solid fa-chevron-right text-xs group-hover:text-primary"
                            ></i>
                        </li>
                        <li class="cursor-pointer hover:text-primary">
                            My Recordings
                        </li>
                    </ol>
                </div>

                <div class="w-full flex items-start justify-between">
                    <h2 class="text-xl space-x-3 font-light py-2">
                        <span>My Recordings</span>
                        <span class="font-semibold">{{
                            recordedVidoes.length
                        }}</span>
                    </h2>
                    <div class="flex items-center space-x-8 mb-8">
                        <button
                            class="rounded-full bg-transparent text-slate-500 border-slate-300 border px-3.5 py-2 text-sm space-x-2"
                        >
                            <span><i class="fa-solid fa-sort"></i> </span>
                            <span>By Date</span>
                        </button>
                        <button
                            class="rounded-full bg-transparent text-slate-500 border-slate-300 border px-3.5 py-2 text-sm space-x-2"
                        >
                            <span><i class="fa-solid fa-filter"></i></span>
                            <span>Add Filter</span>
                        </button>
                        <button
                            class="rounded-full bg-primary text-white px-3.5 py-2 text-sm space-x-2"
                        >
                            <span><i class="fa-solid fa-video"></i> </span>
                            <span>New Request</span>
                        </button>
                        <button
                            class="rounded-full bg-[#EE5951] text-white px-3.5 py-2 text-sm space-x-2"
                            @click="record"
                        >
                            <span
                                ><i class="fa-solid fa-record-vinyl"></i>
                            </span>
                            <span>Start Recording</span>
                        </button>
                    </div>
                </div>
                <!-- List of records vidoes -->
                <Recordings :recordedVidoes="recordedVidoes" />

                <!-- record setting modal -->
                <RecordSettings :isOpen="isOpen" @closeModal="closeModal" />
            </section>
        </div>
    </main>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import Recordings from "@/components/Recordings.vue";
import RecordSettings from "@/components/RecordSettings.vue";
const recordedVidoes = reactive([
    {
        thumbnail: "https://picsum.photos/80/50",
        title: "Lorem Ipsum is simply dummy",
        time: "0:45:00",
        description:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        noOfViews: 500,
        size: "30MB",
        lastModeified: "3 month ago",
    },
    {
        thumbnail: "https://picsum.photos/100/50",
        title: "What is Lorem Ipsum?",
        time: "04:00:00",
        description:
            "There are many variations of passages of Lorem Ipsum available",
        noOfViews: 1000,
        size: "15MB",
        lastModeified: "A month ago",
    },
    {
        thumbnail: "https://picsum.photos/100/50",
        title: "Can you help translate this site",
        time: "1:30:00",
        description:
            "Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words ",
        noOfViews: 100,
        size: "100MB",
        lastModeified: "2 month ago",
    },
    {
        thumbnail: "https://picsum.photos/100/50",
        title: "Where can I get some?",
        time: "0:29:00",
        description:
            "here are many variations of passages of Lorem Ipsum available, but the majority have suffered",
        noOfViews: 500,
        size: "30MB",
        lastModeified: "A month ago",
    },

    {
        thumbnail: "https://picsum.photos/100/50",
        title: "Where does it come from?",
        time: "0:32:00",
        description:
            " Lorem Ipsum is not simply random text. It has roots in a piece of classical",
        noOfViews: 450,
        size: "20MB",
        lastModeified: "3 month ago",
    },
]);
const isOpen = ref<boolean>(false);
const record = () => {
    isOpen.value = true;
};
const closeModal = () => {
    isOpen.value = false;
};
</script>

<style scoped></style>
