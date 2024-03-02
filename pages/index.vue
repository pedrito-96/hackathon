<script setup lang="ts">
definePageMeta({
  layout: false,
});

const addImg = ref(false);
</script>
<template>
  <div class="flex justify-center items-center h-screen w-screen p-[10%]">
    <img
      src="../Icons/retex.png"
      class="w-[61px] h-[73px] absolute top-[10%] left-[10%]"
    />
    <div class="flex items-center">
      <div class="boom w-full h-full">
        <p class="text-[30px] pb-11 font-bold">ciao Retexer,</p>
        <p class="text-[44px] font-bold">Sei nel luogo ideale per lavorare,</p>
        <p class="text-[44px] font-bold">imparare e divertirti</p>
        <div class="flex gap-x-[34px] pt-16">
          <a href="/chat">
            <button
              class="uppercase px-4 py-[9px] text-[16px] bg-black text-white"
            >
              sei nuovo?
            </button></a
          >
          <a href="/login">
            <button
              class="uppercase px-4 py-[9px] text-[16px] bg-black text-white"
            >
              sei già dipendente?
            </button></a
          >
        </div>
        <a href="/chat">
          <button
            class="absolute bottom-[10%] right-0 px-6 py-8 text-[16px] bg-[#48A8D4] text-white"
          >
            Ti aiutiamo noi ... (Live chat)
          </button>
        </a>
      </div>
      <!-- <div>
        <img
          v-if="addImg"
          src="../Icons/lombiCircle.png"
          @click="() => (addImg = false)"
        />
        <img v-else src="../Icons/addImg.png" @click="() => (addImg = true)" />
      </div> -->
    </div>
  </div>
</template>
<style lang="scss">
.boom {
  /* Background pattern from Toptal Subtle Patterns */
  background-image: url("/public/fade.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left;
  width: 100%;
  height: 100%;
}
</style>
