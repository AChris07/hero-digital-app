import React from 'react';

import Loader from '../../../components/common/Loader';

export default {
  title: 'Common/Loader',
  component: Loader,
};

const Template = (args) => <Loader {...args} />;

export const Default = Template.bind({});
Default.args = {};
