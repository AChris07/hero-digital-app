import { createSlice } from '@reduxjs/toolkit';

export const initialState = {};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    resetForm: () => initialState,
    setField: (state, action) => {
      const { name, value } = action.payload;
      state[name] = { value, errors: null };
    },
    setFieldErrors: (state, action) => {
      const { name, error } = action.payload;
      state[name] = {
        ...(state[name] || {}),
        error,
      };
    },
  },
});

export const { resetForm, setField, setFieldErrors } = formSlice.actions;

export default formSlice.reducer;
