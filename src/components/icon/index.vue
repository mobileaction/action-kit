<template>
  <span class="ma-icon">
    <component :is="icon" />
  </span>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, defineComponent } from 'vue';
import type { IconName } from './types';
export interface IconProps {
  name: IconName;
}

defineComponent({
  name: 'MaIcon',
});

const props = defineProps<IconProps>();
const icon = defineAsyncComponent(() => import(`./assets/${props.name}.svg`));
</script>
<style lang="scss" src="./styles.scss"></style>
