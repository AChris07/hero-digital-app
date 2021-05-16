import PropTypes from 'prop-types';

function FormButton({
  onClick, text, primary, ...otherProps
}) {
  return (
    <button {...otherProps} type="button">
      {text}
    </button>
  );
}

FormButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  primary: PropTypes.bool,
};

FormButton.defaultProps = {
  primary: false,
};

export default FormButton;
