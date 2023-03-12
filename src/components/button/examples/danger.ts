import { baseConfig, Template } from './constants';

export default {
  title: 'Components/MaButton/Danger',
  ...baseConfig,
};

export const Primary: any = Template.bind({});
Primary.args = {
  type: 'primary',
  variant: 'danger',
};

export const Secondary: any = Template.bind({});
Secondary.args = {
  type: 'secondary',
  variant: 'danger',
};
