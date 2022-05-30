import { AUTH } from '../constants/actionTypes'
import * as api from '../api'


export const Signin = (formData, history ) => async  (dispatch) {

    try {
        

        history.push('/')
    } catch (error) {
        
        console.log(error)
    }
}

export const Signup = (formData, history ) => async  (dispatch) {

    try {
        

        history.push('/')
    } catch (error) {
        console.log(error)
    }
}

