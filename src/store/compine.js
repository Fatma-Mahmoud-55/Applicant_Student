import { combineReducers } from 'redux';
import studentSlice from "./reducer/studentSlice.js";
import frm1Slice from "./reducer/Validations/frm1Slice.js";
import frm4Slice from "./reducer/Validations/frm4Slice.js";
import frm2Slice from "./reducer/Validations/frm2Slice.js";
import frm3Slice from "./reducer/Validations/frm3Slice.js";
import frm5Slice from "./reducer/Validations/frm5Slice.js";
import frm6Slice from "./reducer/Validations/frm6Slice.js";
export default combineReducers({
    student : studentSlice,
    frm1:frm1Slice,
    frm2:frm2Slice,
    frm3:frm3Slice,
    frm4:frm4Slice,
    frm5:frm5Slice,
    frm6:frm6Slice,
});

