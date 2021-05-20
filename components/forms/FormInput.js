import { UIDConsumer } from 'react-uid';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function FormInput({
  onChange,
  className,
  name,
  disabled,
  label,
  placeholder,
  required,
  type,
  value,
  error,
  ...otherProps
}) {
  let errorMessage = null;
  if (error === 'valueMissing') errorMessage = `${label || name} is required`;
  if (error === 'typeMismatch') errorMessage = `${label || name} has an invalid format`;

  const errorClasses = classNames('form-input__error', {
    'form-input__error--is-shown': error,
  });
  const errorComponent = (uid) => (
    <label htmlFor={uid} className={errorClasses}>
      {errorMessage}
    </label>
  );
  const labelComponent = (uid, seed) => label && (
  <label id={seed('label')} htmlFor={uid} className="form-input__label">
    {`${label}${required ? '*' : ''}`}
  </label>
  );

  const containerClasses = classNames('form-input__container', className);
  const inputClasses = classNames('form-input', {
    'form-input--invalid': error,
  });

  return (
    <UIDConsumer>
      {(uid, seed) => (
        <div {...otherProps} className={containerClasses}>
          {errorComponent(uid)}
          {labelComponent(uid, seed)}
          <input
            aria-labelledby={seed('label')}
            type={type}
            id={uid}
            name={name}
            className={inputClasses}
            disabled={disabled}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            value={value}
          />
        </div>
      )}
    </UIDConsumer>
  );
}

FormInput.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
};

FormInput.defaultProps = {
  className: '',
  name: undefined,
  disabled: false,
  label: undefined,
  placeholder: undefined,
  required: false,
  type: 'text',
  value: '',
  error: undefined,
};

export default FormInput;
