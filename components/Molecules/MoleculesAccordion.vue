<script setup lang="ts">
import type { AccordionProps } from "./MoleculesAccordion.props";
defineProps<AccordionProps>();
</script>

<template>
  <Disclosure>
    <DisclosureButton
      class="text-black font-semibold text-[24px] py-2 hover:text-[32px] hover:font-bold"
    >
      {{ title }}
    </DisclosureButton>
    <DisclosurePanel class="text-black text-[24px]">
      {{ content }}
    </DisclosurePanel>
  </Disclosure>
</template>
