import PropTypes from 'prop-types';
import classNames from 'classnames';

function MultiCheckValidator({ children, className, errors }) {
  const containerClasses = classNames('hd-multi-check-validator', className);

  const isErrorShown = errors.every((error) => Boolean(error));
  const errorClasses = classNames('hd-multi-check-validator__error', {
    'hd-multi-check-validator__error--is-shown': isErrorShown,
  });
  const errorComponent = (
    <label className={errorClasses}>
      At least one of the checkboxes is required
    </label>
  );

  return (
    <div className={containerClasses}>
      {errorComponent}
      {children}
    </div>
  );
}

MultiCheckValidator.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  errors: PropTypes.array.isRequired,
};

MultiCheckValidator.defaultProps = {
  className: '',
};

export default MultiCheckValidator;
