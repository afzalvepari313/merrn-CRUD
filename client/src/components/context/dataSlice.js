// dataSlice.js
import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    useradd: '',
    update: '',
    // deletedata: '',
  },
  reducers: {
    setUseradd: (state, action) => {
      state.useradd = action.payload;
    },
    setUpdate: (state, action) => {
      state.update = action.payload;
    },
    // setDLtdata: (state, action) => {
    //   state.deletedata = action.payload;
    // },
  },
});

export const { setUseradd, setUpdate } = dataSlice.actions;
export default dataSlice.reducer;
