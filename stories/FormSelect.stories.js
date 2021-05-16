import React from 'react';

import FormSelect from '../components/forms/FormSelect';

export default {
  title: 'Forms/Select',
  component: FormSelect,
  argTypes: {
    onChange: { action: 'changed' },
  },
};

const Template = (args) => <FormSelect {...args} />;

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Are you a US Resident?',
  options: [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
  ],
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  options: [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
  ],
};
