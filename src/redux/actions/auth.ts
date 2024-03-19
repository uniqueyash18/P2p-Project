import { useDispatch } from "react-redux"
import { post, setItem } from "../../services/apiService"
import { LOGIN, SIGNUP } from "../../services/routes"
import { showSuccess } from "../../utils/helperFunctions"
import { requestUserPermission } from "../../utils/notificationService"
import { setUserdata } from "../reducers/auth"
import store from "../store"
const { dispatch } = store;
type LoignData={
    phonenumber:Number,
    password:String
}

type SignupData={
    name:String,
    email:String,
    phonenumber:Number,
    password: String,
    isAdmin:Boolean,
    fcm_token: any
}
export const login =async(data:LoignData)=>{
const authToken =await requestUserPermission()    
const res =  await post(LOGIN,data).then((res)=>{
    if(!!res?.data){
        setItem("userData",res?.data)
        dispatch(setUserdata(res?.data))
        showSuccess(res?.message)
    }
}).catch(()=>{})
return res
}
export const signup =async(data:SignupData)=>{
    const res =  await post(SIGNUP,data).then((res)=>{
        console.log(res,'signupress')
        if(!!res?.data){
            setItem("userData",res?.data)
            dispatch(setUserdata(res?.data))
            showSuccess(res?.message)
        }
    }).catch(()=>{})
    return res
    }