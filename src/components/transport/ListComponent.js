import React from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { InputField } from '../../basic/InputField';
import { Toast } from '../../basic/Toast';
import { bindActionCreators } from 'redux';
import TransComponent  from './TransComponent';
import { TransListRequest, TransListRequestSuccess, TransListRequestFailure,
         DeleteTransRequest, DeleteTransRequestSuccess, DeleteTransRequestFailure
    
        } from '../../actions/TransportAction';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';


class ListComponent extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.editTransport = this.editTransport.bind(this);
        this.deleteTransport = this.deleteTransport.bind(this);
        // this.addTransport = this.addTransport.bind(this);
        this.redirectToDev = this.redirectToDev.bind(this);
    }

    componentWillMount(){
        this.props.TransListRequest();
    }

    redirectToDev() {
        this.props.history.push('/add-transport');
    }

    editTransport(transport) {
        var url = '/transport/edit/' + transport.id;
        this.props.history.push(url);
        //console.log("tttt", transport);
    }

    deleteTransport(id) {
        console.log("id", id);
        this.props.DeleteTransRequest(id);
    }

    render() {

        return (

            <div className="container">

                <div className="addTransportSec">
                    <div className="row">
                        <div className="col-md-10">
                        </div>
                        <div className="col-md-2 addTransBtnSec">
                            <span className="addTransBtn" onClick={this.redirectToDev}>Add Transport</span>
                        </div>
                    </div>
                </div>
                <table className="table tablecls">
                    <thead className="headStyle">
                        <tr>
                            <th>#</th>
                            <th>Section Name</th>
                            <th>From Port</th>
                            <th>To Port</th>
                            <th>Cost</th>
                            <th>Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {console.log("props", this.props)}
                        {this.props.transList.map((transport) => (
                            <TransComponent transport={transport} editTransport={this.editTransport} deleteTransport={this.deleteTransport} />
                        ))}
                    </tbody>
                </table>
                
            </div>
            
        );
    }
}


function mapStateToProps(state, ownProps) {
    console.log("xx", state.transportReducer.translist);
    if (state.transportReducer.translist) {
        return {
            transList: state.transportReducer.translist
        }
    } else {
        return {
            transList: []
        }
        
    }
    
}


//determines what action available in a component
function mapDispatchToProps(dispatch) {

    return bindActionCreators({
        TransListRequest, TransListRequestSuccess, TransListRequestFailure,
        DeleteTransRequest, DeleteTransRequestSuccess, DeleteTransRequestFailure
    }, dispatch);

}

export default connect(mapStateToProps, mapDispatchToProps)(ListComponent);