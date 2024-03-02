<script setup lang="ts">
import type { FavProps } from "./MoleculesFavourite.props";
withDefaults(defineProps<FavProps>(), {
  isClick: false,
});
</script>

<template>
  <div class="px-4 py-3 flex gap-3 background-color w-fit rounded-[100px]">
    <img src="/icons/Star.svg" class="h-6 w-6" v-if="!isClick" />
    <img src="/icons/StarFill.svg" class="h-6 w-6" v-else />
    <p class="font-bold text-[16px] text-black">I miei preferiti</p>
  </div>
</template>
<style scoped lang="scss">
.background-color {
  background-color: rgba(95, 21, 255, 0.1);
}
</style>
