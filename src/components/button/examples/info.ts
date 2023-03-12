import { baseConfig, Template } from './constants';

export default {
  title: 'Components/MaButton/Info',
  ...baseConfig,
};

export const Primary: any = Template.bind({});
Primary.args = {
  type: 'primary',
  variant: 'info',
};

export const Secondary: any = Template.bind({});
Secondary.args = {
  type: 'secondary',
  variant: 'info',
};
