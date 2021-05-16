import Head from 'next/head';
import FormButton from '../components/forms/FormButton';
import FormCheck from '../components/forms/FormCheck';
import FormInput from '../components/forms/FormInput';
import FormSelect from '../components/forms/FormSelect';

export default function Home() {
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

      <header>
        <h1>Sign up for email updates</h1>
        <p>*Indicates a required field</p>
      </header>

      <form type="submit">
        <div className="columns is-multiline">
          <FormInput className="column is-half" label="First Name" />
          <FormInput className="column is-half" label="Last Name" />
          <FormInput className="column is-half" label="Email Address" />
          <FormInput className="column is-half" label="Organization" />
          <FormSelect
            className="column is-half"
            label="EU Resident"
            options={[
              { label: 'Yes', value: 'yes' },
              { label: 'No', value: 'no' },
            ]}
          />

          <FormCheck className="column is-half" label="Advances" />
          <FormCheck className="column is-half" label="Alerts" />
          <FormCheck className="column is-half" label="Other Communications" />
        </div>

        <div className="columns">
          <FormButton
            className="column is-half"
            onClick={() => {}}
            text="Submit"
          />
          <FormButton
            className="column is-half"
            onClick={() => {}}
            text="Reset"
          />
        </div>
      </form>

      <footer />
    </>
  );
}
