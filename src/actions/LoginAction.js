import * as types from '../config/actionTypes';
import {push} from 'react-router-redux';
import { API_URL,User } from '../config'
import axios from 'axios';

export function LoginRequest(values) {
	
	return (dispatch) => {
		dispatch(LoginRequestSuccess(values));
	}
	
}
export function LoginRequestFailure(error) {
	return {
		type: types.LOGIN_REQUEST_FAILURE,
		payload: error
	};
}
export function LoginRequestSuccess(value) {
	return {
		type:  types.LOGIN_REQUEST_SUCCESS,
		payload: value
	};
}