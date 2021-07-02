import React from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { InputField } from '../../basic/InputField';
import { Toast } from '../../basic/Toast';
import { Validate, Transport } from  '../../config';
import { UpdateTransRequest, UpdateTransRequestFailure, UpdateTransRequestSuccess } from '../../actions/TransportAction';
import {bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';

class EditTransComponent extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.handleInitialize = this.handleInitialize.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentWillMount() {
        this.handleInitialize()
    }

    handleInitialize() {
        let transport = {};
        this.setState({
            transport
        })
        // console.log("this.state",this.state);
    }
    onChange(event) {
        let yourName = event.target.name;
        var transport = {}
        // console.log('transportssss' , this.state);
        if (JSON.stringify(this.state.transport) === JSON.stringify({})) {
            transport = this.props.initialValues;
        } else {
            transport = this.state.transport;
        }
        if( yourName == "secname" ) {
                transport[yourName] = event.target.value;
        }
        if ( yourName == "cost" ) {
                transport[yourName] = event.target.value;
        }
        if ( yourName == "fromport" ) {
                transport[yourName] = event.target.value;
        }
        if ( yourName == "toport" ) {
                transport[yourName] = event.target.value;
        }
        console.log("oioi", transport)
        this.setState({
                transport
        })
    }

    submitForm() {
        // console.log("ssss", this.state.transport)
        this.props.UpdateTransRequest(this.state.transport);
    }

    render() {
        const { handleSubmit, submitting, error } = this.props;

        return (
            <div className="container">
                <div className="row">
                        <div className="col-md-2">
                        </div>
                        <div className="col-md-8">
                            <div className="card">
                                <form onSubmit={handleSubmit(this.submitForm.bind(this))} className="transportForm" >
                                    <div className="container">   
                                        <div className="row formrow">
                                            <div className="col-md-8">
                                                <label className="labeltext">Enter Section Name</label>
                                                <Field 
                                                    type="text"
                                                    className = "form-control event1" 
                                                    component = { InputField }
                                                    name = "secname"
                                                    id = "secname"
                                                    label = "Enter Section Name" 
                                                    onChange = { this.onChange }
                                                />
                                            </div>
                                            <div className="col-md-4">
                                                <label className="labeltext">Enter Cost</label>
                                                <Field 
                                                    type="text"
                                                    className = "form-control event1" 
                                                    component = { InputField }
                                                    name = "cost"
                                                    id = "cost"
                                                    label = "Enter Cost" 
                                                    onChange = { this.onChange }
                                                />
                                            </div>
                                        </div>
                                        <div className="row formrow">
                                            <div className="col-md-6">
                                                <label className="labeltext">From Port</label>
                                                <Field 
                                                    type="text"
                                                    className = "form-control event1" 
                                                    component = { InputField }
                                                    name = "fromport"
                                                    id = "fromport"
                                                    label = "From Port" 
                                                    onChange = { this.onChange }
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="labeltext">To Port</label>
                                                <Field 
                                                    type="text"
                                                    className = "form-control event1" 
                                                    component = { InputField }
                                                    name = "toport"
                                                    id = "toport"
                                                    label = "To Port" 
                                                    onChange = { this.onChange }
                                                />
                                            </div>
                                        </div>


                                        <div className="row">
                                            <div className="col-md-9">
                                            </div>
                                            <div className="col-md-3 btnSection">
                                                <button className="btn eventFormBtn" type="submit">Update</button>
                                            </div>   
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-2">
                        </div>
                </div>
            
            </div>
        );
    }
}

const validate = (values) => {
    const errors = {};

    if (!Validate.text(values.secname)) {
      errors.secname = 'Section name is required'
    }
    if (!Validate.text(values.cost)) {
      errors.cost = 'Cost is required'
    }
    if (!Validate.text(values.toport)) {
      errors.toport = 'To Port is required'
    }
    if (!Validate.text(values.fromport)) {
      errors.fromport = 'From port is required'
    }
    return errors;

}

let editTransComp =  reduxForm({
    form: 'transportForm',
    enableReinitialize: true
    // validate
})(EditTransComponent);


function mapStateToProps(state, ownProps) {

    var id = ownProps.match.params.id
    let transportList = Transport.getTransList();
    // console.log("dingra", transportList);
    let tr = transportList.find(obj => { 
                           return obj.id == id 
                        });
    // console.log('...', tr);   
    let transport = {
            "id": Number(id),
            "secname": tr.section_name,
            "cost": tr.cost,
            "fromport": tr.from_port,
            "toport": tr.to_port
    };  
    
    return {
        initialValues: transport
    }
}


//determines what action available in a component
function mapDispatchToProps(dispatch) {

    return bindActionCreators({
       UpdateTransRequest, UpdateTransRequestFailure, UpdateTransRequestSuccess
    }, dispatch);

}

export default connect(mapStateToProps, mapDispatchToProps)(editTransComp);