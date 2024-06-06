import { createSlice } from "@reduxjs/toolkit";

const initialState = {
first_name_engF:false,second_name_engF:false,
  third_name_engF:false,last_name_engF:false,
  first_name_argF:false,second_name_argF:false,
  third_name_argF:false,last_name_argF:false,
  gar_nationalityF:false,gar_nat_idF:false,
  gar_nat_id_srcF:false,gar_nat_id_expr:false};

const frm5Slice = createSlice({
  name: "frm5",
  initialState,
  reducers: {
    setFirst_name_engF: (state, action) => {
      state.first_name_engF = action.payload;
    },
    setSecond_name_engF: (state, action) => {
      state.second_name_engF = action.payload;
    },
    setThird_name_engF: (state, action) => {
      state.third_name_engF = action.payload;
    },
    setLast_name_engF: (state, action) => {
      state.last_name_engF = action.payload;
    },
    setFirst_name_argF: (state, action) => {
      state.first_name_argF = action.payload;
    },
    setSecond_name_argF: (state, action) => {
      state.second_name_argF = action.payload;
    },
    setThird_name_argF: (state, action) => {
      state.third_name_argF = action.payload;
    },
    setLast_name_argF: (state, action) => {
      state.last_name_argF = action.payload;
    },
    setGar_nationalityF: (state, action) => {
      state.gar_nationalityF = action.payload;
    },
    setGar_nat_idF: (state, action) => {
      state.gar_nat_idF = action.payload;
    },
    setGar_nat_id_srcF: (state, action) => {
      state.gar_nat_id_srcF = action.payload;
    },
    setGar_nat_id_expr: (state, action) => {
      state.gar_nat_id_expr = action.payload;
    },
  },
});
export  const {
  setFirst_name_engF,
  setSecond_name_engF,
  setThird_name_engF,
  setLast_name_engF,
  setFirst_name_argF,
  setSecond_name_argF,
  setThird_name_argF,
  setLast_name_argF,
  setGar_nationalityF,
  setGar_nat_idF,
  setGar_nat_id_expr,
  setGar_nat_id_srcF
 } = frm5Slice.actions;
export default frm5Slice.reducer;

