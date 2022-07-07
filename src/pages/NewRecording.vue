<template>
    <div class="bg-[#EAFAFF]">
        <section class="2xl:container h-screen pt-14">
            <div class="mx-auto w-7/12">
                <span class="block font-light"
                    ><i
                        class="fa-solid fa-record-vinyl text-red-600 pr-2"
                        :class="chuck.length > 0 ? 'animate-ping' : ''"
                    ></i
                    >Live Preview</span
                >
                <div class="bg-[#21455E] rounded-lg h-[500px] w-full mb-10">
                    <video
                        ref="videoPlayer"
                        controls
                        autoplay
                        class="h-[500px] w-full"
                        v-show="videoIsRecording"
                    ></video>
                </div>
                <div class="flex justify-center">
                    <button
                        class="rounded-full bg-primary text-white border-slate-300 border px-16 py-3 text-xs space-x-2 font-thin"
                        @click="startRecord"
                        v-if="!recordingInProgress"
                    >
                        <!-- ref="pause" -->
                        Start Recording
                    </button>
                    <button
                        class="rounded-full bg-[#EE5951] text-white border-slate-100 border px-16 py-3 text-xs space-x-2 font-thin"
                        @click="stopRecord"
                        v-if="recordingInProgress"
                    >
                        <!-- ref="pause" -->
                        Stop Recording
                    </button>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, reactive, ref } from "vue";
let setting = reactive<{
    enabledCamera: boolean;
    enabledMic: boolean;
    enabledScreen: boolean;
}>({ enabledCamera: false, enabledMic: false, enabledScreen: false });
const videoPlayer = ref<HTMLVideoElement | null>(null);
let videoIsRecording = ref<boolean>(false);
let recordingInProgress = ref<boolean>(false);
let chuck = reactive<any[]>([]);

let localStream = ref<any>(null);
let mediaFun = ref<any>(null);

/**
 * Initailize recording or screen sharing
 */
const StartVideo = async () => {
    let constraintObj = {
        audio: false,
        video: {
            facingMode: "user",
            width: { min: 640, ideal: 1280, max: 1920 },
            height: { min: 480, ideal: 720, max: 1080 },
        },
    };
    if ("mediaDevices" in navigator) {
        try {
            let stream;
            if (!setting.enabledScreen) {
                stream = await navigator.mediaDevices.getUserMedia(
                    constraintObj,
                );
            } else {
                stream = await navigator.mediaDevices.getDisplayMedia({
                    audio: true,
                    video: true,
                });
            }
            videoIsRecording.value = true;
            if ("srcObject" in videoPlayer.value!) {
                videoPlayer.value.srcObject = stream;
            }
            localStream = stream;
        } catch (error) {
            alert(`${error}`);
        }
    }
};
/**
 * Start media recording
 */
const startRecord = async () => {
    mediaFun = new MediaRecorder(localStream);
    mediaFun.start(1000);
    recordingInProgress.value = true;
    mediaFun.ondataavailable = function (e: any) {
        if (e.data.size > 0) {
            chuck.push(e.data);
        } else {
            console.log("No data yet");
        }
    };
};
/**
 * Stop media recording
 */
const stopRecord = async () => {
    mediaFun.stop();
    console.log(mediaFun.state, chuck);
    const blob = new Blob(chuck, {
        type: "video/webm",
    });
    const url = URL.createObjectURL(blob);
    if (confirm("Would you like to download the recorded file")) {
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.href = url;
        a.download = "record.webm";
        a.click();
        window.URL.revokeObjectURL(url);
    }
};
onMounted(() => {
    setting = localStorage.setting
        ? JSON.parse(localStorage.setting)
        : { enabledCamera: false, enabledMic: false, enabledScreen: false };
    // StartVideo();
});
onBeforeUnmount(() => {
    localStream.getTracks().forEach((track: any) => track.stop());
});
</script>
