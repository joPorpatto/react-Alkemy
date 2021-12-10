import axios from "axios";
import Swal from "sweetalert2";
import { types } from "../types/types";


export const startLogin = ({email,password}) =>{
        return async(dispatch) =>{      
        
                await axios.post("http://challenge-react.alkemy.org/", {
                         email,
                         password,
    
                }).then(function (response) {
                        localStorage.setItem("token", response.data.token);
                        dispatch({
                                type: types.login
                        })
                        dispatch(startChecking())
                        
                }).catch(function (err) {
                         Swal.fire('Contraseña o Password incorrectos', 'error')
                })
                
                        
               
        }
}




export const startChecking = () =>{
        return async (dispatch) =>{

                if (localStorage.getItem('token')) {
                        dispatch({type: types.checkingStart})
                        
                } else{
                        dispatch({
                                type: types.checkingFinish
                        })
                }
        }
}





export const checkingFinish = () => {
        return (dispatch) =>{
                localStorage.clear();                
                dispatch( logout() );
        }
}


const logout = () => ({
        type: types.logout,
})