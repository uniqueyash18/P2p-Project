import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";
import i18next from "i18next";

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