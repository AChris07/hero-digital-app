import { useUID } from 'react-uid';
import PropTypes from 'prop-types';

function FormCheck({ label, value, ...otherProps }) {
  const uid = useUID();
  const labelComponent = label && <label htmlFor={uid}>{label}</label>;

  return (
    <div {...otherProps}>
      {labelComponent}
      <input type="checkbox" id={uid} value={value} />
    </div>
  );
}

FormCheck.propTypes = {
  label: PropTypes.string,
  value: PropTypes.bool,
};

FormCheck.defaultProps = {
  label: undefined,
  value: undefined,
};

export default FormCheck;
