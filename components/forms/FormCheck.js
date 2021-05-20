import { UIDConsumer } from 'react-uid';
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
  const labelComponent = (uid) => label && (
  <label htmlFor={uid} className="form-checkbox__label">
    {label}
  </label>
  );
  const checkComponent = isChecked && (
    <Check className="form-checkbox__check" onClick={onChange} />
  );
  const classes = classNames('form-checkbox__container', className);

  return (
    <UIDConsumer>
      {(uid) => (
        <div {...otherProps} className={classes}>
          <div className="form-checkbox__wrapper">
            <input
              type="checkbox"
              id={uid}
              className="form-checkbox"
              disabled={disabled}
              onChange={onChange}
              checked={isChecked}
            />
            {checkComponent}
          </div>
          {labelComponent(uid)}
        </div>
      )}
    </UIDConsumer>
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
