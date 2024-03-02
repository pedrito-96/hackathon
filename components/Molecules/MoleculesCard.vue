<script setup lang="ts">
import type { CardProps } from "./MoleculesCard.props";
defineProps<CardProps>();
</script>

<template>
  <div class="relative rounded-xl w-[265px]">
    <img :src="image" class="relative" />
    <p class="absolute bottom-1/2 text-center w-full text-white">{{ title }}</p>
  </div>
</template>
