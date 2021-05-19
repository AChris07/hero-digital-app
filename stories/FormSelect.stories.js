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

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  label: 'Are you a US Resident?',
  placeholder: 'Are you?',
  options: [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
  ],
};

export const Expanded = Template.bind({});
Expanded.args = {
  label: 'Are you a US Resident?',
  options: [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
  ],
  keepOpen: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Are you a US Resident?',
  options: [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
  ],
  disabled: true,
};

const generateOptions = (max) => {
  const options = [];
  for (let i = 1; i <= max; i += 1) {
    options.push({
      label: i.toString(),
      value: i.toString(),
    });
  }

  return options;
};

export const ScrollableOptions = Template.bind({});
ScrollableOptions.args = {
  label: 'Pick a number',
  options: generateOptions(100),
  keepOpen: true,
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  options: [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
  ],
};
