import * as types from '../config/actionTypes';
import {push} from 'react-router-redux';
import { API_URL,Transport } from '../config'
import axios from 'axios';

export function TransListRequest() {
	
	return (dispatch) => {

        var transList = [
            {
                "id": 1,
                "section_name": "Transport 1",
                "from_port": "Andaman",
                "to_port": "Paradeep",
                "cost": 12000
            },
            {
                "id": 2,
                "section_name": "Transport 2",
                "from_port": "Balasore",
                "to_port": "Mundra",
                "cost": 23000
            },
            {
                "id": 3,
                "section_name": "Transport 3",
                "from_port": "Mumbai",
                "to_port": "Kochin",
                "cost": 24000
            },
            {
                "id": 4,
                "section_name": "Transport 4",
                "from_port": "Kochin",
                "to_port": "port Blair",
                "cost": 34000
            },
            {
                "id": 5,
                "section_name": "Transport 5",
                "from_port": "Kakanadi",
                "to_port": "puduchery",
                "cost": 44000
            }
        ]
        
        if( Transport.getTransList() ) {
            dispatch(TransListRequestSuccess(Transport.getTransList()));
        } else {
            console.log("ttt",Transport.getTransList())
            Transport.setTransList(JSON.stringify(transList));
            dispatch(TransListRequestSuccess(Transport.getTransList()));
        }

	}
	
}

export function TransListRequestFailure(error) {
	return {
		type: types.TRANSLIST_REQUEST_FAILURE,
		payload: error
	};
}

export function TransListRequestSuccess(value) {
	return {
		type:  types.TRANSLIST_REQUEST_SUCCESS,
		payload: value
	};
}


//delete transport request
export function DeleteTransRequest(id) {

    return (dispatch) => {
        var transList = Transport.getTransList();
        var index = transList.map(x => {
            return x.id;
            }).indexOf(id);

        transList.splice(index, 1);
        console.log("delete", transList);
        Transport.setTransList(JSON.stringify(transList));
        dispatch(DeleteTransRequestSuccess(transList));
    }
} 

export function DeleteTransRequestFailure(error) {
	return {
		type: types.DELETETRANS_REQUEST_FAILURE,
		payload: error
	};
}

export function DeleteTransRequestSuccess(value) {
	return {
		type:  types.DELETETRANS_REQUEST_SUCCESS,
		payload: value
	};
}

//add transport request
export function AddTransRequest(value) {

    return (dispatch) => {
        var transList = Transport.getTransList();
        let id = 1;
        transList.map(x => {
            if (x.id > id) {
                id = x.id;
            }
        });

        let tr = {};
        tr.section_name = value.secname;
        tr.from_port = value.fromport;
        tr.to_port = value.toport;
        tr.cost = value.cost;
        tr.id = id + 1; 
        transList.push(tr);
        Transport.setTransList(JSON.stringify(transList));
        dispatch(AddTransRequestSuccess(tr));
    }
} 

export function AddTransRequestFailure(error) {
	return {
		type: types.ADDTRANS_REQUEST_FAILURE,
		payload: error
	};
}

export function AddTransRequestSuccess(value) {
	return {
		type:  types.ADDTRANS_REQUEST_SUCCESS,
		payload: value
	};
}



//Update transport request
export function UpdateTransRequest(data) {
	
	return (dispatch) => {
        let transList = Transport.getTransList();
        var index = transList.map(x => {
            return x.id;
        }).indexOf(data.id);
        transList[index]["section_name"] = data.secname;
        transList[index]['cost'] = data.cost;
        transList[index]["from_port"] = data.fromport;
        transList[index]["to_port"] = data.toport;
        Transport.clear();
        Transport.setTransList(JSON.stringify(transList));
        dispatch(UpdateTransRequestSuccess(data));
	}
	
}

export function UpdateTransRequestFailure(error) {
	return {
		type: types.UPDATETRANS_REQUEST_FAILURE,
		payload: error
	};
}

export function UpdateTransRequestSuccess(value) {
	return {
		type:  types.UPDATETRANS_REQUEST_SUCCESS,
		payload: value
	};
}
