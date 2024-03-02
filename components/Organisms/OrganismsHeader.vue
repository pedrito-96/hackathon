<script setup lang="ts">
import type { OrganismsHeaderProps } from "./OrganismsHeader.props";
defineProps<OrganismsHeaderProps>();
</script>
<template>
  <div class="boom bg-[#F2FDFF] px-[135px] py-14 flex flex-col gap-y-12">
    <div class="flex justify-between items-center">
      <img src="/icons/reask.svg" class="w-40 h-[29px]" />
      <p>Venistar, Pianiga</p>
      <div class="flex justify-center items-center gap-4">
        <p>Ciao Giovanni</p>
        <img src="/icons/lombiCircle.png" class="w-14 h-14" />
      </div>
    </div>
    <div v-if="isSearchBar" class="px-[15%]">
      <MoleculesTextInput
        type="text"
        name="assistant"
        placeholder="Che cos'è Paprika?"
      />
    </div>
  </div>
</template>
<style lang="scss">
.boom {
  /* Background pattern from Toptal Subtle Patterns */
  background-image: url("/public/fade.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right, right;
  width: 100%;
  height: 100%;
}
</style>
