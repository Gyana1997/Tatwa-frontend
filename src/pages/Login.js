import React from 'react';
import {connect} from 'react-redux';
import './Login.css';
import LoginComponent from '../components/login/LoginComponent';

class Login extends React.Component {
    
    constructor(props, context) {
		super(props, context);
        this.props = props;
    }
    
    componentWillMount() {
        
    }

    render() {

        return ( 
            <LoginComponent {...this.props}/>
        );
    }
}

//accessing state from reducer 
function mapStateToProps(state, ownProps) {
	return {

	}
}

//determines what action available in a component
function mapDispatchToProps(dispatch) {
	return {

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
