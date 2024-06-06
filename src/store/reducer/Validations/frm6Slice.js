import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    emergencyMobileF:false,
    employeeNameF:false,
    motherMobileF:false,
    parentCompanyF:false,
    parentCompanyAddressF:false,
    parentDateOfBirthF:false,
    parentEducationF:false,
    parentJopF:false,
    parentMobileF:false,
    parentNationalIdExpiryF:false,
    parentNativeLanguageF:false,
    parentPassportIdF:false,
    parentRelationF:false,
    parentRiligionF:false,
    parentPassportCountryF:false,
    parentEmailF:false,
    parentCountryIdF:false,
    parentStateIdF:false,
    parentCityIdF:false,

};

const frm6Slice = createSlice({
    name: "frm6",
    initialState,
    reducers: {

        setEmergencyMobileF: (state, action) => {
            state.emergencyMobileF= action.payload;
        },
        setEmployeeNameF: (state, action) => {
            state.employeeNameF = action.payload;

        },
        setMotherMobileF: (state, action) => {
            state.motherMobileF = action.payload;
        },
        setParentCompanyF:(state,action)=>{
            state.parentCompanyF = action.payload
        },
        setParentCompanyAddressF: (state, action) => {
            state.parentCompanyAddressF = action.payload;
        },
        setParentDateOfBirthF :(state,action)=>{
            state.parentDateOfBirthF =action.payload
        },
        setParentEducationF :(state,action)=>{
            state.parentEducationF=action.payload
        },
        setParentJopF :(state,action)=>{
            state.parentJopF=action.payload
        },
        setParentMobileF :(state,action)=>{
            state.parentMobileF=action.payload
        },
        setParentNationalIdExpiryF :(state,action)=>{
            state.parentNationalIdExpiryF=action.payload
        },
        setParentNativeLanguageF :(state,action)=>{
            state. parentNativeLanguageF=action.payload
        },
        setParentPassportIdF :(state,action)=>{
            state.parentPassportIdF=action.payload
        },
        setParentRelationF :(state,action)=>{
            state.parentRelationF=action.payload
        },
        setParentRiligionF :(state,action)=>{
            state.parentRiligionF=action.payload
        },
         setParentPassportCountryF :(state,action)=>{
            state.parentPassportCountryF=action.payload
        },

  setParentEmailF :(state,action)=>{
            state.parentEmailF=action.payload
        },

        setParentCountryIdF :(state,action)=>{
            state.parentCountryIdF=action.payload
        },

        setParentStateIdF :(state,action)=>{
            state.parentStateIdF=action.payload
        },
        setParentCityIdF :(state,action)=>{
            state.parentCityIdF=action.payload
        },


    },
});
export  const {
    setEmergencyMobileF,
    setEmployeeNameF,
    setMotherMobileF,
    setParentCompanyF,
    setParentCompanyAddressF,
    setParentDateOfBirthF,
    setParentEducationF,
    setParentJopF,
    setParentMobileF,
    setParentNationalIdExpiryF,
    setParentNativeLanguageF,
    setParentPassportIdF,
    setParentRelationF,
    setParentRiligionF,
    setParentPassportCountryF,
    setParentEmailF,
    setParentCountryIdF,
    setParentCityIdF,
    setParentStateIdF

} = frm6Slice.actions;
export default frm6Slice.reducer;