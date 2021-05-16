import PropTypes from 'prop-types';
import classNames from 'classnames';

function FormButton({
  onClick, className, text, primary, ...otherProps
}) {
  const classes = classNames('form-button', { primary }, className);

  return (
    <button {...otherProps} className={classes} type="button" onClick={onClick}>
      {text}
    </button>
  );
}

FormButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  primary: PropTypes.bool,
};

FormButton.defaultProps = {
  className: '',
  primary: false,
};

export default FormButton;
