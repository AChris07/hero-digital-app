import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import submit from '../api/server';

export const initialState = {
  fields: {},
  submit: {
    status: 'idle',
    response: null,
  },
};

export const submitForm = createAsyncThunk(
  'form/submit',
  async (formData, thunkAPI) => {
    try {
      const response = await submit(formData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    resetForm: () => initialState,
    setField: (state, action) => {
      const { name, value } = action.payload;
      state.fields[name] = { value, errors: null };
    },
    setFieldErrors: (state, action) => {
      const { name, error } = action.payload;
      state.fields[name] = {
        ...(state[name] || {}),
        error,
      };
    },
  },
  extraReducers: {
    [submitForm.pending]: (state) => {
      state.submit.status = 'loading';
      state.submit.response = null;
    },
    [submitForm.fulfilled]: (state, action) => {
      state.submit.status = 'idle';
      state.submit.response = action.payload.message;
    },
    [submitForm.rejected]: (state, action) => {
      state.submit.status = 'error';
      state.submit.response = action.payload.message;
    },
  },
});

export const { resetForm, setField, setFieldErrors } = formSlice.actions;
export const getField = (fieldName) => (state) => state.form.fields[fieldName] || {};
export const getFormData = (state) => Object.keys(state.form.fields).reduce(
  (acc, fieldName) => ({
    ...acc,
    [fieldName]: state.form.fields[fieldName].value,
  }),
  {},
);
export const getSubmitStatus = (state) => state.form.submit.status;
export const getSubmitResponse = (state) => state.form.submit.response;

export default formSlice.reducer;
