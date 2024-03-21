import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";
import i18next from "i18next";
import { showMessage } from "react-native-flash-message";
import { MMKV } from "react-native-mmkv";
import { moderateVerticalScale } from "react-native-size-matters";
const storage = new MMKV()
export const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo,'userInfo')
    } catch (error:any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {

      }
    }
  };


  export const changeLang=(lng:any)=>{
    i18next.changeLanguage(lng)
    }


   export const setStorage=(key:string,value:any)=>{
    storage.set(key,value)
   }
   export const getStorage=(key:string)=>{
    storage.getString(key)
   }

   export const showError = (message:any) => {
    console.log(message, 'THIS IS MESSAGE');
    showMessage({
      type: 'danger',
      icon: 'danger',
      floating: true,
      animated: true,
      message,
      style: { marginTop:moderateVerticalScale(16) },
    });
    // Toast.show(message);
  };
  
  export const showSuccess = (message:any) => {
    showMessage({
      type: 'success',
      icon: 'success',
      floating: true,
      animated: true,
      style: { marginTop: moderateVerticalScale(16) },
      message,
    });
  
    // Toast.show(message);
  };
  export const showInfo = (message:any) => {
    showMessage({
      type: 'info',
      icon: 'info',
      message,
    });
    // Toast.show(message);
  };

interface fieldsValueTypes{
  phonenumber: any;
  email?: any;
  name?: any;
  password: any;
  confirmPassword?: any;
}
  export function validateFields(fields:fieldsValueTypes) {
    const errors:any = {};
    console.log(fields,'fieldsfields')
    // Validate name
        if ((!!fields.name || fields.name == "") && !fields.name.trim()) {
          showError("Name is required")
          return false
        }
    // Validate number
        const numberRegex = /^[0-9]+$/;
        if (!fields.phonenumber.match(numberRegex)) {
          showError( "Phone number is invalid")
          return false
        }else{
          if(String(fields.phonenumber).length<10){
            showError( "Phone number must be of atleat 10 digits")
            return false
          }
        }
    // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if ((!!fields.email || fields.email == "") && !fields.email.match(emailRegex)) {
          showError("Invalid email address")
          return false
        }
    // Validate password
        if (fields.password.length < 6) {
            showError("Password must be at least 6 characters long")
            return false
        }
    // Validate confirm password
        if ((!!fields.confirmPassword || fields.confirmPassword == "") && fields.confirmPassword !== fields.password) {
          showError("Passwords do not match")
          return false
        }
return true
}