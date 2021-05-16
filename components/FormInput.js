import { useUID } from 'react-uid';
import PropTypes from 'prop-types';

function FormInput({
  onChange, label, placeholder, ...otherProps
}) {
  const uid = useUID();
  const labelComponent = label && <label htmlFor={uid}>{label}</label>;

  return (
    <div {...otherProps}>
      {labelComponent}
      <input
        type="text"
        id={uid}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

FormInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

FormInput.defaultProps = {
  label: undefined,
  placeholder: undefined,
};

export default FormInput;
