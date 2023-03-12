import { baseConfig, Template } from './constants';

export default {
  title: 'Components/MaButton/Dark',
  ...baseConfig,
};

export const Primary: any = Template.bind({});
Primary.args = {
  type: 'primary',
};

export const Secondary: any = Template.bind({});
Secondary.args = {
  type: 'secondary',
};
