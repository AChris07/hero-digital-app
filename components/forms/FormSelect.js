import Select, { components } from 'react-select';
import { useUIDSeed } from 'react-uid';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ExpandArrow from '../../public/text-expand-arrow.svg';

function FormSelect({
  onChange,
  className,
  disabled,
  label,
  options,
  placeholder,
  value,
  keepOpen,
  ...otherProps
}) {
  const seed = useUIDSeed();
  const labelComponent = label && (
    <label htmlFor={seed('input')} className="form-select__label">
      {label}
    </label>
  );
  const classes = classNames('form-select__container', className);
  const DropdownIndicator = (props) => (
    <components.DropdownIndicator {...props}>
      <ExpandArrow />
    </components.DropdownIndicator>
  );

  return (
    <div {...otherProps} className={classes}>
      {labelComponent}
      <div className="form-select__wrapper">
        <select
          id={seed('input')}
          className="form-select__native"
          disabled={disabled}
          onChange={onChange}
          value={value}
        >
          <option key={seed('empty-option')} disabled selected>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={seed(opt)} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ExpandArrow className="form-select__native-arrow" />
        <div className="form-select__custom__container">
          <Select
            id={seed('input')}
            className="form-select__custom"
            classNamePrefix="form-select__custom"
            options={options}
            onChange={onChange}
            value={value}
            components={{ DropdownIndicator }}
            isSearchable={false}
            placeholder={placeholder}
            menuIsOpen={keepOpen || undefined}
            isDisabled={disabled}
          />
        </div>
      </div>
    </div>
  );
}

FormSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  ).isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  keepOpen: PropTypes.bool,
};

FormSelect.defaultProps = {
  className: '',
  disabled: false,
  label: undefined,
  placeholder: '- Select One -',
  value: undefined,
  keepOpen: false,
};

export default FormSelect;
