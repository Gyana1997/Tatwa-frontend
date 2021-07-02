import * as types from '../config/actionTypes';
import initialState from './initialState';

export default function transportReducer(state = initialState, action) {
    switch(action.type) {

        case types.TRANSLIST_REQUEST:
            return Object.assign({}, state, {
				loading: true,
				error: null
			});

        //return state
        case types.TRANSLIST_REQUEST_SUCCESS:
        console.log("dsds", action)
            return Object.assign({}, state, {
                translist: action.payload,
                requesting: true,
                success: true,
				error: null
			});

        case types.TRANSLIST_REQUEST_FAILURE:
   
            return Object.assign({}, state, {
                requesting: false,
                error: true,
                msg: action.payload
			});


        case types.DELETETRANS_REQUEST:
            return Object.assign({}, state, {
				loading: true,
				error: null
			});

        //return state
        case types.DELETETRANS_REQUEST_SUCCESS:
        console.log("xsxs", action)
            return Object.assign({}, state, {
                translist: action.payload,
                requesting: true,
                success: true,
				error: null
			});

        case types.DELETETRANS_REQUEST_FAILURE:
   
            return Object.assign({}, state, {
                requesting: false,
                error: true,
                msg: action.payload
			});


        case types.UPDATETRANS_REQUEST:
            return Object.assign({}, state, {
				loading: true,
				error: null
			});

        //return state
        case types.UPDATETRANS_REQUEST_SUCCESS:
        // console.log("xsxs", action)
            return Object.assign({}, state, {
                transport: action.payload,
                requesting: true,
                success: true,
				error: null
			});

        case types.UPDATETRANS_REQUEST_FAILURE:
   
            return Object.assign({}, state, {
                requesting: false,
                error: true,
                msg: action.payload
			});
            
        default:   
            return state;
    }
}