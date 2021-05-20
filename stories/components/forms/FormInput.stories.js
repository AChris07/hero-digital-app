import React from 'react';

import FormInput from '../../../components/forms/FormInput';

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

export const Required = Template.bind({});
Required.args = {
  label: 'First Name',
  required: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'First Name',
  disabled: true,
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'First Name',
  required: true,
  error: 'valueMissing',
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {};
