<script setup lang="ts">
import type { OrganismsHeaderProps } from "./OrganismsHeader.props";
defineProps<OrganismsHeaderProps>();
</script>
<template>
  <div class="boom bg-[#F2FDFF] px-[135px] py-14 flex flex-col gap-y-12">
    <div class="flex justify-between items-center">
      <a href="/homepage"
        ><img src="/icons/retex.png" class="w-[61px] h-[73px]"
      /></a>
      <p>Venistar, Pianiga</p>
      <div class="flex justify-center items-center gap-4">
        <a href="/my-account">
          <p class="hover:underline underline-offset-1 underline-black">
            Ciao Giovanni
          </p></a
        >
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
