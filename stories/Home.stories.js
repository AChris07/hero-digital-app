import React from 'react';
import { Provider } from 'react-redux';

import Home from '../pages/index';
import store from '../store';

export default {
  title: 'Pages/Home',
  component: Home,
};

const Template = (args) => (
  <Provider store={store}>
    <Home {...args} />
  </Provider>
);

export const Default = Template.bind({});
Default.args = {};
