import Select, { components } from 'react-select';
import { UIDConsumer } from 'react-uid';
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
  const labelComponent = (uid) => label && (
  <label htmlFor={uid} className="form-select__label">
    {label}
  </label>
  );
  const classes = classNames('form-select__container', className);
  const DropdownIndicator = (props) => (
    <components.DropdownIndicator {...props}>
      <ExpandArrow />
    </components.DropdownIndicator>
  );

  const optionValue = options.find((option) => option.value === value);

  const handleChange = (evt) => {
    if (evt.type === 'change') {
      evt.stopPropagation();
      onChange(evt.target.value);
    } else {
      onChange(evt.value);
    }
  };

  return (
    <UIDConsumer>
      {(uid, seed) => (
        <div {...otherProps} className={classes}>
          {labelComponent(uid)}
          <div className="form-select__wrapper">
            <select
              id={uid}
              className="form-select__native"
              disabled={disabled}
              onChange={handleChange}
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
                id={uid}
                instanceId={uid}
                className="form-select__custom"
                classNamePrefix="form-select__custom"
                options={options}
                onChange={handleChange}
                value={optionValue}
                components={{ DropdownIndicator }}
                isSearchable={false}
                placeholder={placeholder}
                menuIsOpen={keepOpen || undefined}
                isDisabled={disabled}
              />
            </div>
          </div>
        </div>
      )}
    </UIDConsumer>
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
