<template>
  <Button :class="buttonClass" :type="buttonType">
    <template v-for="(_, slot) in $slots" v-slot:[slot]>
      <slot :name="slot" />
    </template>
  </Button>
</template>
<script lang="ts" setup>
import { defineComponent, defineProps, withDefaults, computed } from 'vue';
import Button from 'ant-design-vue/lib/button';
import 'ant-design-vue/lib/button/style/css';
import type { ButtonType, ButtonSize, ButtonVariant } from './types';

export interface MaButtonProps {
  type?: ButtonType;
  variant?: ButtonVariant;
  size?: ButtonSize;
  rounded?: boolean;
  href?: string;
}

const props = withDefaults(defineProps<MaButtonProps>(), {
  type: 'primary',
  variant: 'dark',
  size: 'x-small',
});

const buttonType = computed(() => {
  return props.type === 'secondary'
    ? 'default'
    : props.type === 'grey-link'
    ? 'link'
    : props.type;
});

const buttonClass = computed(() => {
  return [
    `ma-button ma-button--${props.variant} ma-button--${props.type} ma-button--${props.size}`,
    {
      'ma-button--rounded': props.rounded,
    },
  ];
});

defineComponent({
  name: 'MaButton',
  emits: ['click'],
});
</script>
<style lang="scss" src="./styles.scss"></style>
