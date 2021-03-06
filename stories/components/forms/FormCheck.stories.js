import React from 'react';

import FormCheck from '../../../components/forms/FormCheck';

export default {
  title: 'Forms/Checkbox',
  component: FormCheck,
  argTypes: {
    onChange: { action: 'changed' },
  },
};

const Template = (args) => <FormCheck {...args} />;

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Alerts',
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Alerts',
  disabled: true,
};
