<script setup lang="ts">
import type { CardListProps } from "./OrganismsCardList.props";
defineProps<CardListProps>();
</script>

<template>
  <div class="flex gap-4 overflow-hidden overflow-x-auto hide-scroll">
    <div
      v-for="card in list"
      class="first:ml-[100px] first:xl:ml-[135px] last:mr-[100px] last:xl:mr-[135px]"
    >
      <MoleculesCard v-bind="card" class="h-[220px] w-[265px]" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.hide-scroll {
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
