import { createSlice } from "@reduxjs/toolkit";

const initialState = {
first_name_enF:false,second_name_enF:false,
  third_name_enF:false,last_name_enF:false,
  first_name_arF:false,second_name_arF:false,
  third_name_arF:false,last_name_arF:false,
  religionF:false,birth_countryF:false,
  nat_id_srcF:false, nat_expireF:false,
  passport_id_F:false, passport_id_expireF:false,
  parent_nat_idF:false, parent_nat_expireF:false,
  parent_nat_id_srcF:false,religionlist:[{name:'',religion_id:0}],
  languagelist:[{name:'',language_id:0}],
  languageF:false, passportCountry_F:false
};

const frm4Slice = createSlice({
  name: "frm4",
  initialState,
  reducers: {
    setFirst_name_enF: (state, action) => {
      state.first_name_enF = action.payload;
    },
    setSecond_name_enF: (state, action) => {
      state.second_name_enF = action.payload;
    },
    setThird_name_enF: (state, action) => {
      state.third_name_enF = action.payload;
    },
    setLast_name_enF: (state, action) => {
      state.last_name_enF = action.payload;
    },
    setFirst_name_arF: (state, action) => {
      state.first_name_arF = action.payload;
    },
    setSecond_name_arF: (state, action) => {
      state.second_name_arF = action.payload;
    },
    setThird_name_arF: (state, action) => {
      state.third_name_arF = action.payload;
    },
    setLast_name_arF: (state, action) => {
      state.last_name_arF = action.payload;
    },
    setReligionF: (state, action) => {
      state.religionF = action.payload;
    },
    setBirth_countryF: (state, action) => {
      state.birth_countryF = action.payload;
    },
    setNat_id_srcF: (state, action) => {
      state.nat_id_srcF = action.payload;
    },
    setPassport_id_F: (state, action) => {
      state.passport_id_F = action.payload;
    },
    setLanguage_F: (state, action) => {
      state.languageF = action.payload;
    },
    setPassportCountry_F: (state, action) => {
      state.passportCountry_F = action.payload;
    },
    setPassport_expireF: (state, action) => {
      state.passport_id_expireF = action.payload;
    },
    setNat_expireF: (state, action) => {
      state.nat_expireF = action.payload;
    },
    setParent_nat_idF: (state, action) => {
      state.parent_nat_idF = action.payload;
    },
    setParent_nat_expireF: (state, action) => {
      state.parent_nat_expireF = action.payload;
    },
    setParent_nat_id_srcF: (state, action) => {
      state.parent_nat_id_srcF = action.payload;
    },
    setReligionList: (state, action) => {
      state.religionlist = action.payload;
    },
    setLanguageList: (state, action) => {
      state.languagelist = action.payload;
    },
  },
});
export  const { setParent_nat_expireF,setParent_nat_id_srcF,setNat_id_srcF , setPassport_id_F, setPassport_expireF ,setParent_nat_idF,
  setBirth_countryF,setFirst_name_enF,setThird_name_arF,setSecond_name_enF,setThird_name_enF,setLast_name_enF,
  setSecond_name_arF,setFirst_name_arF,setReligionF,setLast_name_arF,setNat_expireF,setReligionList ,
  setLanguageList , setLanguage_F, setPassportCountry_F
 } = frm4Slice.actions;
export default frm4Slice.reducer;

