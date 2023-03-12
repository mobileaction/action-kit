import { baseConfig, Template } from './constants';

export default {
  title: 'Components/MaButton/Plain',
  ...baseConfig,
};

export const Primary: any = Template.bind({});
Primary.parameters = {
  backgrounds: {
    default: 'dark',
  },
};
Primary.args = {
  type: 'primary',
  variant: 'plain',
};

export const Secondary: any = Template.bind({});
Secondary.parameters = {
  backgrounds: {
    default: 'dark',
  },
};
Secondary.args = {
  type: 'secondary',
  variant: 'plain',
};
