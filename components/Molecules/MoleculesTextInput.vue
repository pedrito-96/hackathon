<script lang="ts" setup>
import type { TextInputProps } from "./MoleculesTextInput.props";
const props = defineProps<TextInputProps>();

const emit = defineEmits<{
  (e: "onInput", value: string): void;
  (e: "onEnter", value: string): void;
}>();

const handleInput = (value: string) => {
  console.log("emit", value);
  emit("onInput", value);
};
const handleOnEnter = (e: Event) => {
  const event = e.target as HTMLInputElement;
  console.log("event", event.value);
  emit("onEnter", event.value);
};
</script>

<template>
  <FormKit
    type="text"
    :model-value="value"
    :name="name"
    :label="label"
    :placeholder="placeholder"
    @input="(value) => handleInput(value)"
    @keydown.enter="(value) => handleOnEnter(value)"
    :classes="{
      inner: 'bg-[#CCCCCC] rounded-[100px] py-4 px-5 flex gap-[10px]',
      input: 'text-[black] bg-inherit focus:outline-none',
    }"
  >
    <template #prefixIcon>
      <slot name="iconSx">
        <img src="/icons/Search.svg" class="h-[34px] w-[34px]" />
      </slot>
    </template>
  </FormKit>
</template>
