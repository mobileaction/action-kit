import MaButton from '../index.vue';
import MaIcon from '../../icon/index.vue';

export const baseConfig = {
  component: MaButton,
  subcomponents: { MaIcon },
  argTypes: {
    onClick: {},
    size: {
      control: { type: 'select' },
      options: ['x-small', 'small', 'medium', 'large', 'x-large'],
    },
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'link', 'grey-link'],
    },
    variant: {
      control: { type: 'select' },
      options: ['dark', 'plain', 'info', 'success', 'warning', 'danger'],
    },
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    rounded: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    loading: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export const Template = (args: any) => ({
  components: { MaButton },
  setup() {
    return { args };
  },
  template: `
      <ma-button v-bind="args">Button Name</ma-button>
  `,
});
