import { createSlice } from "@reduxjs/toolkit";
// import { fetchEmployees } from "../../services/employeeServices";

const initialState = {

    s_application_birth_date: "2/2/2222",

    gnl_stg_idf: '123456',



    /********************Added*******************/
    // g_religion:"Islam",
    // g_passport_id:'123456789',
    // g_passport_country_id:'12345678910000',
    // g_passport_expiry:'22/5/2030',
    // g_email :'Email@gmail.com',
    // g_district:'New city',
    // g_employee_code:'123456789',
    //
    // s_passport_country_id:'2',
    // s_passport_expiry:'2025-08-05',

    // s_stage:'3',
    // note:"Note",

    /***************From Postman****************/
    // s_grade_idf:'0',
    // s_course_programme_id:'1',
    // s_stage_id:'1',
    // status:'1',

    /******************************* page 0 Form 1 *********************************/
    forrrrrrrrrrrrrrrrrrrrm_1111:'',
    iqama_id: '',
    reg_grade_id: 0,
    date_of_birth: '',
    nationality_id: 0,
    gender: "",
    programme_id: 0,
    acadmic_year_id: 0,
    grade_id:0,
    // -------------------------------------------------------------------- //
    /******************************* page 1 Form 4 **********************************/
    forrrrrrrrrrrrrrrrrrrrm_2222:'',
    first_name: '',
    second_name: '',
    third_name: '',
    last_name: '',
    first_name_ar: '',
    second_name_ar: '',
    third_name_ar: '',
    last_name_ar: '',
    religion_id: 0,
    passport_id:"",
    passport_expiry_date:"",
    language_id:0,
    passport_country:0,
    birth_country: 0,
    iqama_source_date: '',
    iqama_source:'',
    parent_iqama_id:'',
    parent_iqama_source:"",
    parent_iqama_source_date:"",
    // -------------------------------------------------------------------- //
    /******************************* page 2 Form 2 **********************************/
    forrrrrrrrrrrrrrrrrrrrm_3333:'',
    address_line: '',
    email: '',
    country_id:0,
    state_id:0,
    city_id:0,
    phone1: '',
    phone2: '',

    // -------------------------------------------------------------------- //
    /******************************* page 3 Form 5 **********************************/
    forrrrrrrrrrrrrrrrrrrrm_4444:'',
    first_name_gur: '',
    second_name_gur: '',
    third_name_gur: '',
    last_name_gur: '',
    first_name_gur_ar: '',
    second_name_gur_ar: '',
    third_name_gur_ar: '',
    last_name_gur_ar: '',
    iqama_id_gur: '',
    iqama_source_gur: '',
    iqama_source_date_gur: '',
    nationality_id_gur: 0,
    // -------------------------------------------------------------------- //
    /******************************* page 4 Form 6 **********************************/
    forrrrrrrrrrrrrrrrrrrrm_5555:'',
    passport_id_gur:'',
    passport_expiry_date_gur:'',
    passport_country_gur:0,
    religion_id_gur:0,
    language_id_gur:0,
    relation_gur:'',
    date_of_birth_gur:'',
    education:'',
    job:'',
    company:'',
    address_line_gur:'',
    mobile_phone:'',
    mother_phone:'',
    emergency_phone: '',
    employee_id_name:'',
    email_gur:'',
    country_id_gur:0,
    state_id_gur:0,
    city_id_gur:0,
    forrrrrrrrrrrrrrrrrrrrm_5555_enddddd:'',

    // -------------------------------------------------------------------- //

    last_attended_school: '',
    last_attended_school_ar: '',
    last_country_id: '',
    last_grade_id: '',
    last_year_id: '',
    evaluvation: '',
    last_score: '',

    applicant_document_types_id:[],



    g_relation: 'ttttttttttttttttttttttttttttttttttttttttttttt',


    //
    // s_national_id_expiry: '',
    //
    // s_passport_id: '',

    //ADD
    birth_country_id:"33333333333333333333",
    // applicant_student_passport_country_id : "21",




    ///////////////////AS////////////////////////

    // s_native_language: '',
    ////////////////////// form 3  ////////////////////////////////////

    //
    // g_birth_date: '',
    // g_education: ' ',
    // g_job: '',
    // g_company: '',
    // g_office_address: '',
    // g_city: 'new city',

    // g_mobile: '',
    // mother_mobile: '',
    // employee_name: '',
    // validate_form:"",
    // next_form:"",
    birth_certificate: [],
    vaccination_card: [],
    student_na_id: [],
    parent_na_id: {},
    student_valid_passport: {},
    student_photo: {},
    medical_fitness_report: {},
    parent_acceptance_letter: {},
    employment_letter: {},
    validate_frm1:{natidF:false,genderF:false,birthdateF:false,nationaltyF:false,yearF:false,gradeF:false,programF:false},
    First_open:true,p_national_id_expiry:""
};

const studentSlice = createSlice({
    name: "student",
    initialState,
    reducers: {

        /******************************* page 0 Form 1  (student) **********************************/
        setStudentNational: (state, action) => {
            state.iqama_id = action.payload;
        },
        setBirthDate: (state, action) => {
            state.date_of_birth = action.payload;
        },
        setGender: (state, action) => {
            state.gender = action.payload;
        },
        setNationlaty:(state,action)=>{
            state.nationality_id = action.payload
        },
        SetSacademicYear: (state, action) => {
            state.acadmic_year_id = action.payload;
        },
        setGrades :(state,action)=>{
            state.reg_grade_id =action.payload
        },
        setProgram :(state,action)=>{
            state.programme_id =action.payload
        },setGradeId :(state,action)=>{
            state.grade_id =action.payload
        },

        /******************************* page 1 Form 4  **********************************/
        setStEnFirstName: (state, action) => {
            state.first_name = action.payload
        },
        setStEnSecondName: (state, action) => {
            state.second_name = action.payload
        },
        setStEnThirdName: (state, action) => {
            state.third_name = action.payload
        },
        setStEnLastName: (state, action) => {
            state.last_name = action.payload
        },
        setStArFirstName: (state, action) => {
            state.first_name_ar = action.payload
        },
        setStArSecondName: (state, action) => {
            state.second_name_ar = action.payload
        },
        setStArThirdName: (state, action) => {
            state.third_name_ar = action.payload
        },
        setStArLastName: (state, action) => {
            state.last_name_ar = action.payload
        },
        setStReligion: (state, action) => {
            state.religion_id = action.payload
        },
        setStPassportId: (state, action) => {
            state.passport_id = action.payload;

        },
        setStPassportIdExpiryDate: (state, action) => {
            state.passport_expiry_date = action.payload;

        },
        setLanguage: (state, action) => {
            state.language_id = action.payload;
        },
        setStPassportCountry: (state, action) => {
            state.passport_country = action.payload;
        },

        setStBirthCountryId: (state, action) => {
            state.birth_country = action.payload
        },
        setStNationalIdExpiryDate: (state, action) => {
            state.iqama_source_date = action.payload
        },
        setStNationalIdSource: (state, action) => {
            state.iqama_source = action.payload
        },
        setParent_nat_id: (state, action) => {
            state.parent_iqama_id = action.payload;

        },
        setP_national_id_source: (state, action) => {
            state.parent_iqama_source = action.payload;

        },
        setParent_exp_nat_id: (state, action) => {
            state.parent_iqama_source_date = action.payload;

        },
        //--------------------------------------------------------------------------------//

        /******************************* page 2 Form 2  **********************************/

        setEmail: (state, action) => {
            state.email = action.payload;

        },
        setPhone2: (state, action) => {
            state.phone2 = action.payload;

        },
        setPhone1: (state, action) => {
            state.phone1 = action.payload;

        },
        setAddress: (state, action) => {
            state.address_line = action.payload;

        },

        setCountryId: (state, action) => {
            state.country_id = action.payload;

        },
        setStateId: (state, action) => {
            state.state_id = action.payload;

        },

        setCityId: (state, action) => {
            state.city_id = action.payload;

        },
        //--------------------------------------------------------------------------------//
        /******************************* page 3 Form 5  **********************************/

        setParentFnameEn :(state,action)=>{
            state.first_name_gur = action.payload
        },
        setParentSnameEn:(state,action)=>{
            state.second_name_gur = action.payload

        },
        setParentThirdnameEn:(state,action)=>{
            state.third_name_gur = action.payload

        },
        setParentLnameEn:(state,action)=>{
            state.last_name_gur = action.payload

        },
        setParentFnameAr :(state,action)=>{
            state.first_name_gur_ar = action.payload
        },
        setParentSnameAr:(state,action)=>{
            state.second_name_gur_ar = action.payload
        },
        setParentThirdnameAr:(state,action)=>{
            state.third_name_gur_ar = action.payload
        },
        setParentLnameAr:(state,action)=>{
            state.last_name_gur_ar = action.payload
        },
        setParentNationlId :(state,action)=>{
            state.iqama_id_gur = action.payload
        },
        setParentNationlIdSource :(state,action)=>{
            state.iqama_source_gur = action.payload
        },
        setParentNationlIdExpire :(state,action)=>{
            state.iqama_source_date_gur = action.payload
        },
        setParentNationlaity :(state,action)=>{
            state.nationality_id_gur = action.payload
        },

        //--------------------------------------------------------------------------------//
        /******************************* page 4 Form 6 **********************************/
        setParentNationalIdExpiry: (state, action) => {
            state.passport_expiry_date_gur = action.payload
        },
        /***************We Need Parent Passport ID religion, Native Lang ***********/
        setParentPassportId: (state, action) => {
            state.passport_id_gur = action.payload
        },
        setParentPassportCountry: (state, action) => {
            state.passport_country_gur = action.payload
        },
        setParentRiligion: (state, action) => {
            state.religion_id_gur = action.payload
        },
        setParentNativeLanguage: (state, action) => {
            state.language_id_gur = action.payload
        },

        setParentRelation: (state, action) => {
            state.relation_gur = action.payload
        },
        setParentDateOfBirth: (state, action) => {
            state.date_of_birth_gur = action.payload
        },
        setParentEducation: (state, action) => {
            state.education = action.payload
        },
        setParentJop: (state, action) => {
            state.job = action.payload
        },
        setParentCompany: (state, action) => {
            state.company = action.payload
        },
        setParentCompanyAddress: (state, action) => {
            state.address_line_gur = action.payload
        },
        setParentMobile: (state, action) => {
            state.mobile_phone = action.payload
        },
        setMotherMobile: (state, action) => {
            state.mother_phone = action.payload
        },
        setEmergencyMobile: (state, action) => {
            state.emergency_phone = action.payload
        },
        setEmployeeName_id: (state, action) => {
            state.employee_id_name = action.payload
        },
         setParentEmail: (state, action) => {
            state.email_gur = action.payload
        },
        setParentCountry: (state, action) => {
            state.country_id_gur = action.payload
        },
        setParentState: (state, action) => {
            state.state_id_gur = action.payload
        },
        setParentCity: (state, action) => {
            state.city_id_gur = action.payload
        },

        //--------------------------------------------------------------------------------//

        /******************************* page 5 Form 3 **********************************/
        setSchoolNameEn: (state, action) => {
            state.last_attended_school = action.payload
        },
        setSchoolNameAr: (state, action) => {
            state.last_attended_school_ar = action.payload
        },
        setSchoolCountry: (state, action) => {
            state.last_country_id = action.payload
        },
        setLastGrade: (state, action) => {
            state.last_grade_id = action.payload
        },
        setGradeYear: (state, action) => {
            state.last_year_id = action.payload
        },
        setGradeScore: (state, action) => {
            state.last_score = action.payload
        },
        setGradeEvaluation: (state, action) => {
            state.evaluvation = action.payload
        },


        setDocumentIds: (state, action) => {
            state.applicant_document_types_id = action.payload
        },
        //--------------------------------------------------------------------------------//

        //////////////////////form 5(parent)//////////////////////////////////////////


        /*******************************Form 7**********************************/
        setUploadApplicantPhoto: (state, action) => {
            state.student_photo = action.payload;

        },

        setBirthCertificate: (state, action) => {
            state.birth_certificate = action.payload;

        },

        setVaccinationCard: (state, action) => {
            state.vaccination_card = action.payload;

        },
        setStudentNationalID: (state, action) => {
            state.student_na_id = action.payload;

        },

        setPatentNationalID: (state, action) => {
            state.parent_na_id = action.payload;

        },

        setstudentvalidpasssport: (state, action) => {
            state.student_valid_passport = action.payload;

        },

        setmedicalfitnessreport: (state, action) => {
            state.medical_fitness_report = action.payload;

        },

        setparentacceptanceletter: (state, action) => {
            state.parent_acceptance_letter = action.payload;

        },

        setemploymentletters: (state, action) => {
            state.employment_letter = action.payload;

        },
        setValidate_form: (state, action) => {
            state.validate_form = action.payload;

        },
        setNext_form: (state, action) => {
            state.Next_form = action.payload;

        },





        setP_national_id_expiry: (state, action) => {
            state.p_national_id_expiry = action.payload;

        },

        setFirst_open: (state, action) => {
            state.First_open = action.payload;

        },
        setValidate_frm1: (state, action) => {
            state.validate_frm1 = action.payload;
            const { validField, stt } = action.payload;

            // Then, update the state accordingly.
            return {
                ...state,
                validate_frm1: {
                    ...state.validate_frm1,
                    [validField]: stt,
                },
            };
            // state.validate_frm1[validField] = stt;


        },
    },
});
/*******************************Form 1**********************************/
export const {  setStudentNational, SetSacademicYear, setGender ,setBirthDate ,setNationlaty ,setGradeId,setGrades,setProgram  } = studentSlice.actions;
/*******************************Form 2**********************************/
export const { setEmail, setPhone2, setPhone1, setAddress, setCountryId,setStateId,setCityId} = studentSlice.actions;

/*******************************Form 3**********************************/
export const { setSchoolNameEn, setSchoolNameAr, setSchoolCountry, setLastGrade,
    setGradeYear, setGradeScore, setGradeEvaluation } = studentSlice.actions;

/*******************************Form 4**********************************/
export const { setStEnFirstName, setStEnSecondName, setStEnThirdName, setStEnLastName,
    setStArFirstName, setStArSecondName, setStArThirdName, setStArLastName,
    setStReligion, setStBirthCountryId, setStNationalIdExpiryDate, setStNationalIdSource ,
    setStPassportIdExpiryDate , setStPassportId ,setLanguage ,setStPassportCountry
} = studentSlice.actions;

/*******************************Form 5**********************************/
export  const {
    setParentFnameEn,setParentSnameEn,setParentThirdnameEn,setParentLnameEn,
    setParentFnameAr,setParentSnameAr,setParentThirdnameAr,setParentLnameAr,
    setParentNationlId,setParentNationlIdSource,setParentNationlIdExpire ,setParentNationlaity} = studentSlice.actions;

/*******************************Form 6**********************************/
export const { setParentNationalIdExpiry, setParentPassportId,
    setParentRiligion, setParentNativeLanguage, setParentRelation,
    setParentDateOfBirth, setParentEducation, setParentJop, setParentCompany,
    setParentCompanyAddress, setParentMobile, setMotherMobile,
    setEmergencyMobile, setEmployeeName_id,setParentEmail,setParentCountry
    ,setParentState, setParentCity,setParentPassportCountry
    } = studentSlice.actions;

/*******************************Form 7**********************************/
export const { setUploadApplicantPhoto, setBirthCertificate, setemploymentletters, setparentacceptanceletter, setmedicalfitnessreport, setstudentvalidpasssport, setPatentNationalID, setStudentNationalID, setVaccinationCard } = studentSlice.actions;
export const {setValidate_form,setNext_form,setValidate_frm1,setFirst_open ,setDocumentIds, setParent_nat_id,setParent_exp_nat_id,
    setP_national_id_source,

}= studentSlice.actions
export default studentSlice.reducer;
