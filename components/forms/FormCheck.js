import { useUID } from 'react-uid';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Check from '../../public/check.svg';

function FormCheck({
  onChange, className, label, isChecked, ...otherProps
}) {
  const uid = useUID();
  const labelComponent = label && (
    <label htmlFor={uid} className="form-checkbox__label">
      {label}
    </label>
  );
  const checkComponent = isChecked && (
    <Check className="form-checkbox__check" />
  );
  const classes = classNames('form-checkbox__container', className);

  return (
    <div {...otherProps} className={classes}>
      <input
        type="checkbox"
        id={uid}
        className="form-checkbox"
        onChange={onChange}
        checked={isChecked}
      />
      {checkComponent}
      {labelComponent}
    </div>
  );
}

FormCheck.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  isChecked: PropTypes.bool,
};

FormCheck.defaultProps = {
  label: undefined,
  isChecked: false,
};

export default FormCheck;
