import React from 'react';

import FormInput from '../components/FormInput';

export default {
  title: 'Forms/Text Input',
  component: FormInput,
  argTypes: {
    onChange: { action: 'changed' },
  },
};

const Template = (args) => <FormInput {...args} />;

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'First Name',
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  label: 'First Name',
  placeholder: 'John',
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {};
