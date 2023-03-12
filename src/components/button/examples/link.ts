import { baseConfig, Template } from './constants';

export default {
  title: 'Components/MaButton/Link',
  ...baseConfig,
};

export const Default: any = Template.bind({});
Default.args = {
  type: 'link',
};

export const Grey: any = Template.bind({});
Grey.args = {
  type: 'grey-link',
};
