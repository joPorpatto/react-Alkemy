import { types } from "../types/types";


const initialState ={
        active:false,
        checking: false
}

export const authReducer = (state={initialState}, action) =>{
        switch (action.type) {

                case types.login:
                        return {
                                ...state,
                                active:true,
                                
                        }
                case types.logout:
                return {

                        ...initialState

                }
                
                case types.checkingStart:
                return {
                        ...state,
                        checking:true
                }
                case types.checkingFinish:
                return {
                        ...state,
                        checking:false
                }
        
                default:
                        return state;
        }

}