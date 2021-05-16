import { useUID } from 'react-uid';
import PropTypes from 'prop-types';

function FormInput({ label, placeholder, ...otherProps }) {
  const uid = useUID();
  const labelComponent = label && <label htmlFor={uid}>{label}</label>;

  return (
    <div {...otherProps}>
      {labelComponent}
      <input type="text" id={uid} placeholder={placeholder} />
    </div>
  );
}

FormInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

FormInput.defaultProps = {
  label: undefined,
  placeholder: undefined,
};

export default FormInput;
