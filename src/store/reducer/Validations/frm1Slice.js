import { createSlice } from "@reduxjs/toolkit";

const initialState = {

  natidF:false,
  genderF:false,
  birthdateF:false,
  nationaltyF:false,
  yearF:false,
  gradeF:false,
  programF:false,
  GradesList:[],
  ProgramsList:[],
  YearList:[]

};

const frm1Slice = createSlice({
  name: "frm1",
  initialState,
  reducers: {

    setNatidF: (state, action) => {
      state.natidF = action.payload;
    },
    setGenderF: (state, action) => {
      state.genderF = action.payload;
    },
    setBirthdateF: (state, action) => {
      state.birthdateF = action.payload;
    },
    setNationaltyF:(state,action)=>{
      state.nationaltyF = action.payload
    },
    setYearF: (state, action) => {
      state.yearF = action.payload;
    },
    setGradeF :(state,action)=>{
      state.gradeF =action.payload
    },
    setProgramF :(state,action)=>{
      state.programF =action.payload
    },
    setYearList :(state,action)=>{
      state.YearList =action.payload
    },
    setProgramsList :(state,action)=>{
      state.ProgramsList =action.payload
    },
    setGradesList :(state,action)=>{
      state.GradesList =action.payload
    },

  },
});
export  const {
 setBirthdateF,setGenderF,setGradeF,setNatidF, setNationaltyF,setProgramF,setYearF,setGradesList,setProgramsList,setYearList} = frm1Slice.actions;
export default frm1Slice.reducer;

