import React from 'react';

import FormButton from '../../../components/forms/FormButton';

export default {
  title: 'Forms/Button',
  component: FormButton,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

const Template = (args) => <FormButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  text: 'Submit',
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Cancel',
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Submit',
  primary: true,
  disabled: true,
};
