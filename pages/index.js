import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import { resetForm, setField, setFieldErrors } from '../store/formSlice';
import FormButton from '../components/forms/FormButton';
import FormCheck from '../components/forms/FormCheck';
import FormInput from '../components/forms/FormInput';
import FormSelect from '../components/forms/FormSelect';

export default function Home() {
  const dispatch = useDispatch();

  const firstName = useSelector((state) => state.form.firstName || {});
  const lastName = useSelector((state) => state.form.lastName || {});
  const email = useSelector((state) => state.form.email || {});
  const organization = useSelector((state) => state.form.organization || {});
  const isEUResident = useSelector((state) => state.form.isEUResident || {});
  const hasAdvances = useSelector((state) => state.form.advances || {});
  const hasAlerts = useSelector((state) => state.form.alerts || {});
  const hasOtherComms = useSelector((state) => state.form.otherComms || {});

  const handleSubmit = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();

    const form = evt.target;
    let isFormValid = true;
    for (let i = 0; i < form.elements.length; i += 1) {
      const element = form.elements[i];

      if (!element.checkValidity()) {
        isFormValid = false;
        const { name, validity } = element;
        let error;

        if (name) {
          if (validity.valueMissing) error = 'valueMissing';
          if (validity.typeMismatch) error = 'typeMismatch';

          dispatch(setFieldErrors({ name, error }));
        }
      }
    }

    if (isFormValid) console.log('Form is valid');
  };

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
        <header>
          <h1>Sign up for email updates</h1>
          <p>*Indicates a required field</p>
        </header>

        <form type="submit" onSubmit={handleSubmit} noValidate>
          <div className="columns is-multiline">
            <FormInput
              className="column is-half"
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
              className="column is-half"
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
              className="column is-half"
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
              className="column is-half"
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
              className="column is-half"
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

          <div className="columns is-multiline">
            <FormCheck
              className="column is-half"
              name="advances"
              label="Advances"
              isChecked={hasAdvances.value}
              onChange={() => dispatch(setField({ name: 'advances', value: !hasAdvances }))}
            />
            <FormCheck
              className="column is-half"
              name="alerts"
              label="Alerts"
              isChecked={hasAlerts.value}
              onChange={() => dispatch(setField({ name: 'alerts', value: !hasAlerts }))}
            />
            <FormCheck
              className="column is-half"
              name="otherComms"
              label="Other Communications"
              isChecked={hasOtherComms.value}
              onChange={() => dispatch(
                setField({ name: 'otherComms', value: !hasOtherComms }),
              )}
            />
          </div>

          <div className="hd-button-group">
            <FormButton primary text="Submit" type="submit" />
            <FormButton onClick={() => dispatch(resetForm())} text="Reset" />
          </div>
        </form>
      </main>
    </>
  );
}
