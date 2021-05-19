import { useUID } from 'react-uid';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function FormInput({
  onChange,
  className,
  disabled,
  label,
  placeholder,
  required,
  ...otherProps
}) {
  const uid = useUID();
  const labelComponent = label && (
    <label htmlFor={uid} className="form-input__label">
      {`${label}${required ? '*' : ''}`}
    </label>
  );
  const classes = classNames('form-input__container', className);

  return (
    <div {...otherProps} className={classes}>
      {labelComponent}
      <input
        type="text"
        id={uid}
        className="form-input"
        disabled={disabled}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

FormInput.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

FormInput.defaultProps = {
  className: '',
  disabled: false,
  label: undefined,
  placeholder: undefined,
  required: false,
};

export default FormInput;
