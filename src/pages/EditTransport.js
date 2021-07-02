import React from 'react';
import {connect} from 'react-redux';
import './AddTransport.css';
import EditTransComponent from '../components/transport/EditTransComponent';

class EditTransport extends React.Component {
    
    constructor(props, context) {
		super(props, context);
        this.props = props;
    }
    
    componentWillMount() {
        
    }

    render() {

        return ( 
            <EditTransComponent {...this.props}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditTransport);
