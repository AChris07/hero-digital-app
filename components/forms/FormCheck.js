import { UIDConsumer } from 'react-uid';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Check from '../../public/check.svg';

function FormCheck({
  onChange,
  className,
  name,
  disabled,
  label,
  required,
  multiple,
  isChecked,
  ...otherProps
}) {
  const labelComponent = (uid, seed) => label && (
  <label id={seed('label')} htmlFor={uid} className="form-checkbox__label">
    {label}
  </label>
  );
  const checkComponent = isChecked && (
    <Check
      aria-hidden="true"
      className="form-checkbox__check"
      onClick={onChange}
    />
  );
  const classes = classNames('form-checkbox__container', className);

  return (
    <UIDConsumer>
      {(uid, seed) => (
        <div {...otherProps} className={classes}>
          <div className="form-checkbox__wrapper">
            <input
              aria-labelledby={seed('label')}
              type="checkbox"
              id={uid}
              className="form-checkbox"
              name={name}
              disabled={disabled}
              required={required}
              multiple={multiple}
              onChange={onChange}
              checked={isChecked}
            />
            {checkComponent}
          </div>
          {labelComponent(uid, seed)}
        </div>
      )}
    </UIDConsumer>
  );
}

FormCheck.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  required: PropTypes.bool,
  multiple: PropTypes.bool,
  isChecked: PropTypes.bool,
};

FormCheck.defaultProps = {
  className: '',
  name: undefined,
  disabled: false,
  label: undefined,
  required: false,
  multiple: false,
  isChecked: false,
};

export default FormCheck;
