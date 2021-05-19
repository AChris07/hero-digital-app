import { useUID } from 'react-uid';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Check from '../../public/check.svg';

function FormCheck({
  onChange,
  className,
  disabled,
  label,
  isChecked,
  ...otherProps
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
        disabled={disabled}
        onChange={onChange}
        checked={isChecked}
      />
      {checkComponent}
      {labelComponent}
    </div>
  );
}

FormCheck.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  isChecked: PropTypes.bool,
};

FormCheck.defaultProps = {
  className: '',
  disabled: false,
  label: undefined,
  isChecked: false,
};

export default FormCheck;
