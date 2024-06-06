import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    gradeEvaluationF:true,
    gradeScoreF:true,
    gradeYearF:true,
    lastGradeF:true,
    schoolCountryF:true,
    schoolNameArF:true,
    schoolNameEnF:true,
    isCheckedd:false
};

const frm3Slice = createSlice({
    name: "frm3",
    initialState,
    reducers: {

        setGradeEvaluationF: (state, action) => {
            state.gradeEvaluationF = action.payload;
        },
        setGradeScoreF: (state, action) => {
            state.gradeScoreF = action.payload;
        },
        setGradeYearF: (state, action) => {
            state.gradeYearF = action.payload;
        },
        setLastGradeF:(state,action)=>{
            state.lastGradeF = action.payload
        },
        setSchoolCountryF: (state, action) => {
            state.schoolCountryF = action.payload;
        },
        setSchoolNameArF :(state,action)=>{
            state. schoolNameArF =action.payload
        },
        setSchoolNameEnF :(state,action)=>{
            state.schoolNameEnF =action.payload
        },
        setIsChecked :(state,action)=>{
            state.isCheckedd =action.payload
        }


    },
});
export  const {setIsChecked,setGradeEvaluationF,setGradeScoreF,setGradeYearF,setLastGradeF,setSchoolCountryF,setSchoolNameArF,setSchoolNameEnF}= frm3Slice.actions;
export default frm3Slice.reducer;