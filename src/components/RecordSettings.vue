<template>
    <TransitionRoot appear :show="isOpen" as="template">
        <Dialog as="div" class="relative z-10">
            <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100"
                leave-to="opacity-0"
            >
                <div class="fixed inset-0 bg-black bg-opacity-50" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto right-0">
                <div
                    class="flex min-h-full items-center justify-center p-4 text-center"
                >
                    <TransitionChild
                        as="template"
                        enter="duration-300 ease-out"
                        enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100"
                        leave="duration-200 ease-in"
                        leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95"
                    >
                        <DialogPanel
                            class="w-[360px] max-w-md transform overflow-hidden rounded-md bg-white text-left align-middle shadow-2xl transition-all"
                        >
                            <div>
                                <div
                                    class="flex justify-between border-b border-slate-300 pt-2.5 pb-3 px-6 mb-2"
                                >
                                    <h3 class="font-bold text-sm">
                                        New Recording
                                    </h3>
                                    <i
                                        class="inline-block fa-solid fa-times text-base cursor-pointer"
                                        @click="closeModal"
                                    ></i>
                                </div>
                                <div class="px-6 mb-7">
                                    <span class="text-xs inline-block mb-2"
                                        >Save the recording in</span
                                    >
                                    <div
                                        class="bg-slate-200 px-4 rounded-md border border-slate-300"
                                    >
                                        <select
                                            name="recording"
                                            class="block py-2 bg-transparent w-full focus:ring-0 focus:border-0 focus:outline-none text-xs"
                                        >
                                            <option value="Select a Project">
                                                Select a project
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <div class="px-6 space-y-5">
                                    <div class="flex justify-between">
                                        <h6 class="text-sm">Record screen</h6>
                                        <Switch
                                            v-model="enabledScreen"
                                            :class="
                                                enabledScreen
                                                    ? 'bg-[#0AD688]'
                                                    : 'bg-[#A3BAC6]'
                                            "
                                            class="relative inline-flex h-5 w-11 items-center rounded-full"
                                        >
                                            <span class="sr-only">Enable</span>
                                            <span
                                                :class="
                                                    enabledScreen
                                                        ? 'translate-x-6'
                                                        : 'translate-x-1'
                                                "
                                                class="inline-flex items-center justify-center transform h-4 w-4 rounded-full bg-white"
                                            >
                                                <i
                                                    class="fa-solid text-xs text-[#0AD688]"
                                                    :class="
                                                        enabledScreen
                                                            ? 'fa-check'
                                                            : ''
                                                    "
                                                >
                                                </i>
                                            </span>
                                        </Switch>
                                    </div>
                                    <div class="flex justify-between">
                                        <h6 class="text-sm">Record camera</h6>
                                        <Switch
                                            v-model="enabledCamera"
                                            :class="
                                                enabledCamera
                                                    ? 'bg-[#0AD688]'
                                                    : 'bg-[#A3BAC6]'
                                            "
                                            class="relative inline-flex h-5 w-11 items-center rounded-full"
                                        >
                                            <span class="sr-only">Enable</span>
                                            <span
                                                :class="
                                                    enabledCamera
                                                        ? 'translate-x-6'
                                                        : 'translate-x-1'
                                                "
                                                class="inline-flex items-center justify-center transform h-4 w-4 rounded-full bg-white"
                                            >
                                                <i
                                                    class="fa-solid text-xs text-[#0AD688]"
                                                    :class="
                                                        enabledCamera
                                                            ? 'fa-check'
                                                            : ''
                                                    "
                                                >
                                                </i>
                                            </span>
                                        </Switch>
                                    </div>
                                    <div class="flex justify-between">
                                        <h6 class="text-sm">Record mic</h6>
                                        <Switch
                                            v-model="enabledMic"
                                            :class="
                                                enabledMic
                                                    ? 'bg-[#0AD688]'
                                                    : 'bg-[#A3BAC6]'
                                            "
                                            class="relative inline-flex h-5 w-11 items-center rounded-full"
                                        >
                                            <span class="sr-only">Enable</span>
                                            <span
                                                :class="
                                                    enabledMic
                                                        ? 'translate-x-6'
                                                        : 'translate-x-1'
                                                "
                                                class="inline-flex items-center justify-center transform h-4 w-4 rounded-full bg-white"
                                            >
                                                <i
                                                    class="fa-solid text-xs text-[#0AD688]"
                                                    :class="
                                                        enabledMic
                                                            ? 'fa-check'
                                                            : ''
                                                    "
                                                >
                                                </i>
                                            </span>
                                        </Switch>
                                    </div>
                                </div>
                                <div class="flex justify-center my-5">
                                    <button
                                        class="rounded-full bg-primary text-white border-slate-300 border px-16 py-2 text-xs space-x-2 font-thin"
                                        @click="startRecording"
                                    >
                                        Start Recording
                                    </button>
                                </div>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup lang="ts">
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
} from "@headlessui/vue";
import { Switch } from "@headlessui/vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const enabledScreen = ref(false);
const enabledCamera = ref(false);
const enabledMic = ref(false);
const props = defineProps<{ isOpen: boolean }>();
// type-based
const emit = defineEmits<{
    (e: "closeModal", open: boolean): void;
}>();
const router = useRouter();
function closeModal() {
    emit("closeModal", false);
}
const startRecording = () => {
    let userRecordSetting: {
        enabledCamera: boolean;
        enabledMic: boolean;
        enabledScreen: boolean;
    } = {
        enabledCamera: enabledCamera.value,
        enabledMic: enabledMic.value,
        enabledScreen: enabledScreen.value,
    };
    localStorage.setItem("setting", JSON.stringify(userRecordSetting));
    router.push({ name: "NewRecording" });
};
</script>
