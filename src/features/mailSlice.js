import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState : {
    value : false,
    mailDetailVal : null
  },
  reducers: {
    isMailOpen: (state) => {
      state.value = true;
    },
    isMailClose: (state) => {
      state.value = false;
    },
    isMailDetail: (state,action) => {
      state.mailDetailVal = action.payload;
    }
  }
});

export const { isMailOpen, isMailClose, isMailDetail } = mailSlice.actions;

export const selectedMail = (state) => state.mail.value;

export const selectedmailDetail = (state) => state.mail.mailDetailVal;

export default mailSlice.reducer;
