import { useUID } from 'react-uid';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function FormInput({
  onChange,
  className,
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
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

FormInput.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

FormInput.defaultProps = {
  className: '',
  label: undefined,
  placeholder: undefined,
  required: false,
};

export default FormInput;
