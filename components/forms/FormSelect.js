import Select, { components } from 'react-select';
import { UIDConsumer } from 'react-uid';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ExpandArrow from '../../public/text-expand-arrow.svg';

function FormSelect({
  onChange,
  className,
  name,
  disabled,
  label,
  options,
  placeholder,
  required,
  value,
  error,
  keepOpen,
  ...otherProps
}) {
  let errorMessage = null;
  if (error === 'valueMissing') errorMessage = `${label || name} is required`;

  const errorClasses = classNames('form-select__error', {
    'form-select__error--is-shown': error,
  });
  const errorComponent = (uid) => (
    <label htmlFor={uid} className={errorClasses}>
      {errorMessage}
    </label>
  );
  const labelComponent = (uid) => label && (
  <label htmlFor={uid} className="form-select__label">
    {`${label}${required ? '*' : ''}`}
  </label>
  );

  const containerClasses = classNames('form-select__container', className);
  const inputClasses = (specificClass) => classNames(specificClass, {
    'form-select--invalid': error,
  });
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
        <div {...otherProps} className={containerClasses}>
          {errorComponent(uid)}
          {labelComponent(uid)}
          <div className="form-select__wrapper">
            <select
              id={uid}
              name={name}
              className={inputClasses('form-select__native')}
              disabled={disabled}
              onChange={handleChange}
              required={required}
              value={value}
              defaultValue=""
            >
              <option key={seed('empty')} value="" disabled>
                - Select One -
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
                className={inputClasses('form-select__custom')}
                classNamePrefix="form-select__custom"
                options={options}
                onChange={handleChange}
                value={optionValue}
                components={{ DropdownIndicator }}
                isSearchable={false}
                placeholder={placeholder}
                menuIsOpen={keepOpen || undefined}
                isDisabled={disabled}
                required={required}
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
  name: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  ).isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
  error: PropTypes.string,
  keepOpen: PropTypes.bool,
};

FormSelect.defaultProps = {
  className: '',
  name: undefined,
  disabled: false,
  label: undefined,
  placeholder: '- Select One -',
  required: false,
  value: undefined,
  error: undefined,
  keepOpen: false,
};

export default FormSelect;
