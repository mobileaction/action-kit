import { baseConfig, Template } from './constants';

export default {
  title: 'Components/MaButton/Success',
  ...baseConfig,
};

export const Primary: any = Template.bind({});
Primary.args = {
  type: 'primary',
  variant: 'success',
};

export const Secondary: any = Template.bind({});
Secondary.args = {
  type: 'secondary',
  variant: 'success',
};
