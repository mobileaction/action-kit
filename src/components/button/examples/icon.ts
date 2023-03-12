import { baseConfig } from './constants';
import MaButton from '../index.vue';
import MaIcon from '../../icon/index.vue';

export default {
  title: 'Components/MaButton/Icon',
  ...baseConfig,
};

export const LeftIcon = (args: any) => ({
  components: { MaButton, MaIcon },
  setup() {
    return { args };
  },
  template: `
      <div class="grid grid-cols-2 gap-4">
        <div>
          <MaButton v-bind="args" type="primary">
            <template #icon><MaIcon name="plus" /></template>
            Button Name
          </MaButton>
        </div>
        <div>
          <MaButton v-bind="args" type="primary" rounded>
            <template #icon><MaIcon name="plus" /></template>
            Button Name
          </MaButton>
        </div>
      </div>
    `,
});

export const RightIcon = (args: any) => ({
  components: { MaButton, MaIcon },
  setup() {
    return { args };
  },
  template: `
        <div class="grid grid-cols-2 gap-4">
          <div>
            <MaButton v-bind="args" type="primary">
              Button Name
              <MaIcon name="plus" />
            </MaButton>
          </div>
          <div>
            <MaButton v-bind="args" type="primary" rounded>
              Button Name
              <MaIcon name="plus" />
            </MaButton>
          </div>
        </div>
      `,
});

export const IconOnly = (args: any) => ({
  components: { MaButton, MaIcon },
  setup() {
    return { args };
  },
  template: `
          <div class="grid grid-cols-2 gap-4">
            <div>
              <MaButton v-bind="args" type="primary">
                <template #icon><MaIcon name="plus" /></template>
              </MaButton>
            </div>
            <div>
              <MaButton v-bind="args" type="primary" rounded>
                <template #icon><MaIcon name="plus" /></template>
              </MaButton>
            </div>
          </div>
        `,
});
