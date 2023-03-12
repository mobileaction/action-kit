import { baseConfig, Template } from './constants';

export default {
  title: 'Components/MaButton/Warning',
  ...baseConfig,
};

export const Primary: any = Template.bind({});
Primary.args = {
  type: 'primary',
  variant: 'warning',
};

export const Secondary: any = Template.bind({});
Secondary.args = {
  type: 'secondary',
  variant: 'warning',
};
