import { useUIDSeed } from 'react-uid';
import PropTypes from 'prop-types';

function FormSelect({
  label, options, value, ...otherProps
}) {
  const seed = useUIDSeed();
  const labelComponent = label && (
    <label htmlFor={seed('input')}>{label}</label>
  );

  return (
    <div {...otherProps}>
      {labelComponent}
      <select id={seed('input')} value={value}>
        {options.map((opt) => (
          <option key={seed(opt)} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

FormSelect.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  ).isRequired,
  value: PropTypes.string,
};

FormSelect.defaultProps = {
  label: undefined,
  value: undefined,
};

export default FormSelect;
