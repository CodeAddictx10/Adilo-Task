<template>
    <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500">
            <thead class="text-gray-700 capitalize font-semibold text-sm">
                <tr class="grid grid-cols-7">
                    <th
                        scope="col"
                        class="py-3 col-span-1 gird place-content-center"
                    >
                        Recording
                    </th>
                    <th scope="col" class="py-3 col-span-2">Title</th>

                    <th
                        scope="col"
                        class="py-3 col-span-1 gird place-content-center"
                    >
                        Views
                    </th>
                    <th
                        scope="col"
                        class="py-3 col-span-1 gird place-content-center"
                    >
                        Size
                    </th>
                    <th
                        scope="col"
                        class="py-3 col-span-1 gird place-content-center"
                    >
                        Last Modified
                    </th>
                    <th
                        scope="col"
                        class="py-3 col-span-1 gird place-content-center"
                    >
                        <span class="sr-only">Action</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr
                    class="hover:bg-gray-50 grid grid-cols-7 gap-5 mb-5"
                    v-for="(records, index) in recordedVidoes"
                    :key="'item' + index"
                >
                    <td class="col-span-1 relative">
                        <img
                            :src="records.thumbnail"
                            alt="video thumbnail"
                            class="rounded-md h-[80px]"
                        />
                        <small class="absolute text-white bottom-3 right-2">{{
                            records.time
                        }}</small>
                    </td>
                    <td class="= col-span-2 py-2">
                        <div class="">
                            <h6 class="font-medium">{{ records.title }}</h6>
                            <p class="text-xs py-3">
                                {{ records.description }}
                            </p>
                        </div>
                    </td>
                    <td class="= col-span-1 pt-7">
                        {{ records.noOfViews }}
                    </td>
                    <td class="= col-span-1 pt-7">
                        {{ records.size }}
                    </td>
                    <td class="= col-span-1 pt-7">
                        {{ records.lastModeified }}
                    </td>
                    <td class="= col-span-1 pt-7">
                        <a
                            href="#"
                            class="font-medium text-blue-600 hover:underline"
                            >...</a
                        >
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    recordedVidoes: {
        thumbnail: string;
        title: string;
        description: string;
        noOfViews: number;
        time: string;
        size: string;
        lastModeified: string;
    }[];
}>();
</script>

<style scoped></style>
