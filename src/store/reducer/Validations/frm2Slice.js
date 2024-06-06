import { createSlice } from "@reduxjs/toolkit";

const initialState = {

  emailF:false,
  phone1_F:false,
  phone2_F:false,
  addressF:false,
  countryF:false,
  stateF:false,
  cityF:false,
};

const frm2Slice = createSlice({
  name: "frm2",
  initialState,
  reducers: {

    setEmailF: (state, action) => {
      state.emailF = action.payload;
    },
    setPone1_F: (state, action) => {
      state.phone1_F = action.payload;
    },
    setPhone2_F: (state, action) => {
      state.phone2_F = action.payload;
    },
    setAddressF:(state,action)=>{
      state.addressF = action.payload
    },
    setCountryF: (state, action) => {
      state.countryF = action.payload;
    },
    setStateF: (state, action) => {
      state.stateF = action.payload;
    },
    setCityF: (state, action) => {
      state.cityF = action.payload;
    },

  },
});
export  const {setAddressF,setCountryF,setCityF,setStateF,setEmailF,setPone1_F,setPhone2_F} = frm2Slice.actions;
export default frm2Slice.reducer;

