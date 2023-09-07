import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState : {
    value : false
  },
  reducers: {
    isMailOpen: (state) => {
      state.value = true;
    },
    isMailClose: (state) => {
      state.value = false;
    }
  }
});

export const { isMailOpen, isMailClose } = mailSlice.actions;

export const selectedMail = (state) => state.mail.value;

export default mailSlice.reducer;
