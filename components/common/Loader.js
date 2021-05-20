import PropTypes from 'prop-types';
import classNames from 'classnames';

function Loader({ isVisible }) {
  return (
    isVisible && (
      <div className="hd-loader__container" role="alert" aria-busy="true">
        <div className="hd-loader">
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    )
  );
}

Loader.propTypes = {
  isVisible: PropTypes.bool,
};

Loader.defaultProps = {
  isVisible: true,
};

export default Loader;
