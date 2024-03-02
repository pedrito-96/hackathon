<template>
  <div class="flex justify-center items-center h-screen w-screen p-[10%]">
    <img
      src="/assets/icons/reaskLogo.svg"
      class="absolute top-[10%] left-[10%]"
    />
    <div class="flex items-center">
      <div class="boom w-full h-full">
        <p class="text-[30px] pb-11 font-bold">ciao Retexer,</p>
        <p class="text-[44px] font-bold">Sei nel luogo ideale per lavorare,</p>
        <p class="text-[44px] font-bold">imparare e divertirti</p>
        <div class="flex gap-x-[34px] pt-16">
          <button
            class="uppercase px-4 py-[9px] text-[16px] bg-black text-white"
          >
            sei nuovo?
          </button>
          <button
            class="uppercase px-4 py-[9px] text-[16px] bg-black text-white"
          >
            sei già dipendente?
          </button>
        </div>
        <button
          class="absolute bottom-[10%] right-0 px-6 py-8 text-[16px] bg-[#48A8D4] text-white"
        >
          Ti aiutiamo noi ... (Live chat)
        </button>
      </div>
      <!-- <div>
        <img
          v-if="addImg"
          src="/assets/lombiCircle.png"
          @click="() => (addImg = false)"
        />
        <img v-else src="/assets/addImg.png" @click="() => (addImg = true)" />
      </div> -->
    </div>
  </div>
</template>
