import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginStaff, postCustomerLogin } from "../services/authServices";
import { RsetFormErrors, RsetUser } from "./mainSlices";
import { errorMessage, successMessage } from "../utils/toast";

const initialState = {
  smallNav: false,
};

// export const parseJwt = (token) => {
//   let base64Url = token.split(".")[1];
//   let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
//   let jsonPayload = decodeURIComponent(
//     window
//       .atob(base64)
//       .split("")
//       .map(function (c) {
//         return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
//       })
//       .join("")
//   );
//   return JSON.parse(jsonPayload);
// };

// export const handleStaffLogin = createAsyncThunk(
//   "main/handleStaffLogin",
//   async (obj, { dispatch, getState }) => {
//     const { staffCodeMeli, staffPassword } = getState().auth;
//     const user = {
//       username: staffCodeMeli,
//       password: staffPassword,
//     };
//     try {
//       const loginStaffRes = await loginStaff(user);
//       console.log(loginStaffRes);
//       if (loginStaffRes.data.code === 415) {
//         const userInfo = parseJwt(loginStaffRes.data.token);
//         dispatch(RsetUser(userInfo));
//         dispatch(RsetIsLoggedIn(true));
//         localStorage.setItem("token", loginStaffRes.data.token);
//         dispatch(RsetStaffCodeMeli(""));
//         dispatch(RsetStaffPassword(""));
//         dispatch(RsetFormErrors(""));
//         successMessage("ورود با موفقیت انجام شد");
//       } else {
//         errorMessage("کد ملی یا رمز عبور اشتباه است!");
//       }
//     } catch (ex) {
//       console.log(ex);
//     }
//   }
// );

const mainSlices = createSlice({
  name: "main",
  initialState,
  reducers: {
    RsetSmallNav: (state, { payload }) => {
      return { ...state, smallNav: payload };
    },
  },
});

export const { RsetSmallNav } = mainSlices.actions;

export const selectSmallNav = (state) => state.main.smallNav;

export default mainSlices.reducer;
