<script setup lang="ts">
import { ref } from "vue";
const v = ref("");
</script>

<template>
  <MoleculesTextInput
    label="label"
    placeholder="placeholder"
    @onEnter="
      (value) => {
        console.log(value);
        v = value;
      }
    "
  />
  <div v-if="v" class="bg-black text-white">{{ v }}</div>
</template>
