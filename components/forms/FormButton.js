import PropTypes from 'prop-types';
import classNames from 'classnames';

function FormButton({
  onClick,
  className,
  disabled,
  text,
  primary,
  ...otherProps
}) {
  const classes = classNames('form-button', { primary }, className);

  return (
    <button
      {...otherProps}
      className={classes}
      disabled={disabled}
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

FormButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
  primary: PropTypes.bool,
};

FormButton.defaultProps = {
  className: '',
  disabled: false,
  primary: false,
};

export default FormButton;
