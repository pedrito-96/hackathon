<script lang="ts" setup>
import type { TextInputProps } from "./MoleculesTextInput.props";
const props = withDefaults(defineProps<TextInputProps>(), {
  icon: true,
});

const emit = defineEmits<{
  (e: "onInput", value: string): void;
  (e: "onEnter", value: string): void;
}>();

const handleInput = (value: string) => {
  emit("onInput", value);
};
const handleOnEnter = (e: Event) => {
  const event = e.target as HTMLInputElement;
  emit("onEnter", event.value);
};
</script>

<template>
  <FormKit
    :type="type"
    :model-value="value"
    :name="name"
    :label="label"
    :placeholder="placeholder"
    @input="(value) => handleInput(value)"
    @keydown.enter="(value) => handleOnEnter(value)"
    :classes="{
      outer: 'w-full',
      inner: 'bg-white rounded-[100px] py-4 px-5 flex gap-[10px]',
      input: 'text-[black] bg-inherit focus:outline-none',
    }"
  >
    <template #prefixIcon>
      <img v-if="icon" src="/Icons/Search.svg" class="h-[34px] w-[34px]" />
    </template>
  </FormKit>
</template>
