import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import {
  resetForm,
  setField,
  setFieldErrors,
  getField,
  getFormData,
  getSubmitStatus,
  getSubmitResponse,
  submitForm,
} from '../store/formSlice';
import Loader from '../components/common/Loader';
import FormButton from '../components/forms/FormButton';
import FormCheck from '../components/forms/FormCheck';
import FormInput from '../components/forms/FormInput';
import FormSelect from '../components/forms/FormSelect';
import MultiCheckValidator from '../components/forms/MultiCheckValidator';

export default function Home() {
  const dispatch = useDispatch();

  const firstName = useSelector(getField('firstName'));
  const lastName = useSelector(getField('lastName'));
  const email = useSelector(getField('email'));
  const organization = useSelector(getField('organization'));
  const isEUResident = useSelector(getField('isEUResident'));
  const hasAdvances = useSelector(getField('advances'));
  const hasAlerts = useSelector(getField('alerts'));
  const hasOtherComms = useSelector(getField('otherComms'));
  const formData = useSelector(getFormData);
  const submitStatus = useSelector(getSubmitStatus);
  const submitResponse = useSelector(getSubmitResponse);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();

    const form = evt.target;
    let isFormInvalid = false;
    const validMultiple = {};
    for (let i = 0; i < form.elements.length; i += 1) {
      const element = form.elements[i];

      const isElementValid = element.checkValidity();

      if (isElementValid && element.multiple) {
        validMultiple[element.type] = true;
      }

      if (!isElementValid) {
        if (element.multiple) {
          validMultiple[element.type] = validMultiple[element.type] || false;
        } else {
          isFormInvalid = true;
        }

        const { name, validity } = element;
        let error;

        if (name) {
          if (validity.valueMissing) error = 'valueMissing';
          if (validity.typeMismatch) error = 'typeMismatch';

          dispatch(setFieldErrors({ name, error }));
        }
      }
    }

    const hasInvalidMultiple = Object.keys(validMultiple).some(
      (multiple) => !validMultiple[multiple],
    );
    isFormInvalid = isFormInvalid || hasInvalidMultiple;

    if (!isFormInvalid) {
      dispatch(submitForm(formData));
    }
  };

  const responseIcon = submitStatus === 'error' ? (
    <i aria-hidden="true" className="fas fa-exclamation" />
  ) : (
    <i aria-hidden="true" className="fas fa-check" />
  );

  const responseClasses = classNames('hd-form-response', {
    'hd-form-response--error': submitStatus === 'error',
  });

  return (
    <>
      <Head>
        <title>Hero Digital Form App</title>
        <meta
          name="description"
          content="Form application, with validations and stylings"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Loader isVisible={submitStatus === 'loading'} />
        {submitResponse ? (
          <h1 className={responseClasses}>
            {responseIcon}
            <span>{submitResponse}</span>
          </h1>
        ) : (
          <>
            <header>
              <h1>Sign up for email updates</h1>
              <p>*Indicates a required field</p>
            </header>

            <form type="submit" onSubmit={handleSubmit} noValidate>
              <div className="columns is-multiline">
                <FormInput
                  className="column is-half is-full-mobile"
                  name="firstName"
                  label="First Name"
                  value={firstName.value}
                  error={firstName.error}
                  onChange={(evt) => dispatch(
                    setField({
                      name: 'firstName',
                      value: evt.target.value,
                    }),
                  )}
                  required
                />
                <FormInput
                  className="column is-half is-full-mobile"
                  name="lastName"
                  label="Last Name"
                  value={lastName.value}
                  error={lastName.error}
                  onChange={(evt) => dispatch(
                    setField({
                      name: 'lastName',
                      value: evt.target.value,
                    }),
                  )}
                  required
                />
                <FormInput
                  className="column is-half is-full-mobile"
                  name="email"
                  label="Email Address"
                  type="email"
                  value={email.value}
                  error={email.error}
                  onChange={(evt) => dispatch(
                    setField({
                      name: 'email',
                      value: evt.target.value,
                    }),
                  )}
                  required
                />
                <FormInput
                  className="column is-half is-full-mobile"
                  name="organization"
                  label="Organization"
                  value={organization.value}
                  error={organization.error}
                  onChange={(evt) => dispatch(
                    setField({
                      name: 'organization',
                      value: evt.target.value,
                    }),
                  )}
                />
                <FormSelect
                  className="column is-half is-full-mobile"
                  name="isEUResident"
                  label="EU Resident"
                  options={[
                    { label: 'Yes', value: 'yes' },
                    { label: 'No', value: 'no' },
                  ]}
                  value={isEUResident.value}
                  error={isEUResident.error}
                  onChange={(value) => dispatch(
                    setField({
                      name: 'isEUResident',
                      value,
                    }),
                  )}
                  required
                />
              </div>

              <MultiCheckValidator
                className="columns is-multiline mt-3 p-3"
                errors={[
                  hasAdvances.error,
                  hasAlerts.error,
                  hasOtherComms.error,
                ]}
              >
                <FormCheck
                  className="column is-half is-full-mobile"
                  name="advances"
                  label="Advances"
                  isChecked={hasAdvances.value}
                  onChange={() => dispatch(
                    setField({ name: 'advances', value: !hasAdvances.value }),
                  )}
                  required
                  multiple
                />
                <FormCheck
                  className="column is-half is-full-mobile"
                  name="alerts"
                  label="Alerts"
                  isChecked={hasAlerts.value}
                  onChange={() => dispatch(
                    setField({ name: 'alerts', value: !hasAlerts.value }),
                  )}
                  required
                  multiple
                />
                <FormCheck
                  className="column is-half is-full-mobile"
                  name="otherComms"
                  label="Other Communications"
                  isChecked={hasOtherComms.value}
                  onChange={() => dispatch(
                    setField({
                      name: 'otherComms',
                      value: !hasOtherComms.value,
                    }),
                  )}
                  required
                  multiple
                />
              </MultiCheckValidator>

              <div className="hd-button-group">
                <FormButton primary text="Submit" type="submit" />
                <FormButton
                  onClick={() => dispatch(resetForm())}
                  text="Reset"
                />
              </div>
            </form>
          </>
        )}
      </main>
    </>
  );
}
