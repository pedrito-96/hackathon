<script setup lang="ts">
import type { AccordionProps } from "./MoleculesAccordion.props";
defineProps<AccordionProps>();
const isOpen = ref(false);
</script>

<template>
  <Disclosure>
    <DisclosureButton
      class="text-black text-[24px] py-4 hover:text-[32px] hover:font-bold"
      @click="isOpen = !isOpen"
      :class="{ 'text-[32px] font-bold': isOpen, 'font-semibold': !isOpen }"
    >
      {{ title }}
    </DisclosureButton>
    <DisclosurePanel class="text-black text-[24px] py-4">
      {{ content }}
    </DisclosurePanel>
  </Disclosure>
</template>
