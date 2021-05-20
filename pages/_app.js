import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { UIDReset } from 'react-uid';
import store from '../store';

import '../styles/index.sass';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <UIDReset prefix="uid_">
        <Component {...pageProps} />
      </UIDReset>
    </Provider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object,
};

MyApp.defaultProps = {
  pageProps: {},
};

export default MyApp;
