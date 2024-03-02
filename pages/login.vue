<script setup lang="ts">
definePageMeta({
  layout: false,
});

const addImg = ref(false);
</script>
<template>
  <div class="flex justify-start items-center h-screen w-screen p-[10%]">
    <img
      src="../Icons/reask.svg"
      class="absolute top-[10%] left-[10%]"
      @click="navigateTo('/')"
    />
    <div class="flex justify-center items-center">
      <div
        class="relative w-[400px] h-[300px] flex flex-col justify-center items-center gap-4 z-10"
      >
        <p class="text-[30px] font-bold flex-nowrap">
          Accedi con le tue credenziali Retex
        </p>
        <MoleculesTextInput
          type="text"
          name="email"
          placeholder="Username"
          :icon="false"
        />
        <MoleculesTextInput
          type="password"
          name="password"
          placeholder="Password"
          :icon="false"
        />

        <button
          class="self-end px-12 py-[9px] text-[16px] bg-black text-white"
          @click="navigateTo('/homepage')"
        >
          Accedi
        </button>
      </div>
      <img src="../public/fade.png" class="absolute z-0 w-full h-full" />
      <button
        class="absolute bottom-[10%] right-0 px-6 py-8 text-[16px] bg-[#48A8D4] text-white"
      >
        Ti aiutiamo noi ... (Live chat)
      </button>
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
