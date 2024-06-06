import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    birthCertificateF:false,
   employmentlettersF:false,
   medicalfitnessreportF:false,
    parentacceptanceletterF:false,
    patentNationalIDF:false,
   studentNationalIDF:false,
    studentvalidpasssportF:false,
   uploadApplicantPhotoF:false,
   vaccinationCardF:false,

};

const frm7Slice = createSlice({
    name: "frm7",
    initialState,
    reducers: {

        setBirthCertificateF: (state, action) => {
            state.birthCertificateF = action.payload;
        },
        setEmploymentlettersF: (state, action) => {
            state.employmentlettersF = action.payload;
        },
        setMedicalfitnessreportF: (state, action) => {
            state.medicalfitnessreportF = action.payload;
        },
        setParentacceptanceletterF:(state,action)=>{
            state.parentacceptanceletterF = action.payload
        },
        setPatentNationalIDF: (state, action) => {
            state.patentNationalIDF= action.payload;
        },
        setStudentNationalIDF :(state,action)=>{
            state.studentNationalIDF =action.payload
        },
        setStudentvalidpasssportF:(state,action)=>{
            state.studentvalidpasssportF =action.payload
        },
        setUploadApplicantPhotoF :(state,action)=>{
            state.uploadApplicantPhotoF=action.payload
        },
        setVaccinationCardF :(state,action)=>{
            state.vaccinationCardF =action.payload
        },


    },
});
export  const {
    setBirthCertificateF ,
    setEmploymentlettersF ,
    setMedicalfitnessreportF,
    setParentacceptanceletterF,
    setPatentNationalIDF,
    setStudentNationalIDF,
    setStudentvalidpasssportF,
    setUploadApplicantPhotoF,
    setVaccinationCardF} = frm7Slice.actions;
export default frm7Slice.reducer;
