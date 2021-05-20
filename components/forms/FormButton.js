import PropTypes from 'prop-types';
import classNames from 'classnames';

function FormButton({
  onClick,
  className,
  disabled,
  text,
  primary,
  type,
  ...otherProps
}) {
  const classes = classNames('form-button', { primary }, className);

  return (
    <button
      {...otherProps}
      className={classes}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

FormButton.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  type: PropTypes.string,
};

FormButton.defaultProps = {
  onClick: () => {},
  className: '',
  disabled: false,
  primary: false,
  type: 'button',
};

export default FormButton;
