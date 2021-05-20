import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import {
  setFirstName,
  setLastName,
  setEmail,
  setOrganization,
  setEUResidency,
  setAdvances,
  setAlerts,
  setOtherComms,
} from '../store/formSlice';
import FormButton from '../components/forms/FormButton';
import FormCheck from '../components/forms/FormCheck';
import FormInput from '../components/forms/FormInput';
import FormSelect from '../components/forms/FormSelect';

export default function Home() {
  const dispatch = useDispatch();

  const firstName = useSelector((state) => state.form.firstName);
  const lastName = useSelector((state) => state.form.lastName);
  const email = useSelector((state) => state.form.email);
  const organization = useSelector((state) => state.form.organization);
  const isEUResident = useSelector((state) => state.form.isEUResident);
  const hasAdvances = useSelector((state) => state.form.advances);
  const hasAlerts = useSelector((state) => state.form.alerts);
  const hasOtherComms = useSelector((state) => state.form.otherComms);

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

        <form type="submit">
          <div className="columns is-multiline">
            <FormInput
              className="column is-half"
              label="First Name"
              value={firstName}
              onChange={(evt) => dispatch(setFirstName(evt.target.value))}
            />
            <FormInput
              className="column is-half"
              label="Last Name"
              value={lastName}
              onChange={(evt) => dispatch(setLastName(evt.target.value))}
            />
            <FormInput
              className="column is-half"
              label="Email Address"
              value={email}
              onChange={(evt) => dispatch(setEmail(evt.target.value))}
            />
            <FormInput
              className="column is-half"
              label="Organization"
              value={organization}
              onChange={(evt) => dispatch(setOrganization(evt.target.value))}
            />
            <FormSelect
              className="column is-half"
              label="EU Resident"
              options={[
                { label: 'Yes', value: 'yes' },
                { label: 'No', value: 'no' },
              ]}
              value={isEUResident}
              onChange={(value) => dispatch(setEUResidency(value))}
            />
          </div>

          <div className="columns is-multiline">
            <FormCheck
              className="column is-half"
              label="Advances"
              isChecked={hasAdvances}
              onChange={() => dispatch(setAdvances(!hasAdvances))}
            />
            <FormCheck
              className="column is-half"
              label="Alerts"
              isChecked={hasAlerts}
              onChange={() => dispatch(setAlerts(!hasAlerts))}
            />
            <FormCheck
              className="column is-half"
              label="Other Communications"
              isChecked={hasOtherComms}
              onChange={() => dispatch(setOtherComms(!hasOtherComms))}
            />
          </div>

          <div className="hd-button-group">
            <FormButton primary onClick={() => {}} text="Submit" />
            <FormButton onClick={() => {}} text="Reset" />
          </div>
        </form>
      </main>
    </>
  );
}
