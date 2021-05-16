import PropTypes from 'prop-types';

function FormButton({ onClick, text, ...otherProps }) {
  return (
    <button {...otherProps} type="button">
      {text}
    </button>
  );
}

FormButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default FormButton;
