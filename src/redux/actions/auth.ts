import {useDispatch} from 'react-redux';
import {post, setItem} from '../../services/apiService';
import {LOGIN, SEND_OTP, SIGNUP, VERIFY_OTP} from '../../services/routes';
import {showSuccess} from '../../utils/helperFunctions';
import {requestUserPermission} from '../../utils/notificationService';
import {setUserdata} from '../reducers/auth';
import store from '../store';
const {dispatch} = store;
type LoignData = {
  phonenumber: Number;
  password: String;
};

type SignupData = {
  name: String;
  email: String;
  phonenumber: String;
  password: String;
  isAdmin: Boolean;
  fcm_token: any;
};
export const login = async (data: LoignData) => {
  const res = await post(LOGIN, data)
    .then(res => {
      if (!!res?.data) {
        setItem('userData', res?.data);
        dispatch(setUserdata(res?.data));
        showSuccess(res?.message);
      }
    })
    .catch(() => {});
  return res;
};

export const signup = async (data: SignupData) => {
 return new Promise<void>((resolve, reject) => {
    post(SIGNUP, data)
    .then(res => {
      console.log(res, 'signupress');
      if (!!res?.data) {
        showSuccess(res?.message||'Server Error');
        resolve(res?.data)
      }
    })
    .catch((err) => {reject(err)});
    
  })
};

export const sendOtp = async (userData:Object) => {
    return await post(SEND_OTP, {data:userData})
     
  };
  export const verifyOtp = async (otpData:Object) => {
    return await post(VERIFY_OTP, {data:otpData})
      .then(res => {
        if (!!res?.data) {
          setItem('userData', res?.data);
          dispatch(setUserdata(res?.data));
          showSuccess(res?.message);
        }
      })
  };
   export const onLogOut = () => {
    setItem('userData', null);
    dispatch(setUserdata(null));
   }