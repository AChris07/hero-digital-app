import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  organization: '',
  isEUResident: undefined,
  advances: false,
  alerts: false,
  otherComms: false,
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setOrganization: (state, action) => {
      state.organization = action.payload;
    },
    setEUResidency: (state, action) => {
      state.isEUResident = action.payload;
    },
    setAdvances: (state, action) => {
      state.advances = action.payload;
    },
    setAlerts: (state, action) => {
      state.alerts = action.payload;
    },
    setOtherComms: (state, action) => {
      state.otherCooms = action.payload;
    },
  },
});

export const {
  setFirstName,
  setLastName,
  setEmail,
  setOrganization,
  setEUResidency,
  setAdvances,
  setAlerts,
  setOtherComms,
} = formSlice.actions;

export default formSlice.reducer;
