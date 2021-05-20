import React from 'react';

import Home from '../pages/index';

export default {
  title: 'Pages/Home',
  component: Home,
};

const Template = (args) => <Home {...args} />;

export const Default = Template.bind({});
Default.args = {};
