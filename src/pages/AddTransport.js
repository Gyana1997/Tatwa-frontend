import React from 'react';
import {connect} from 'react-redux';
import './AddTransport.css';
import AddTransComponent from '../components/transport/AddTransComponent';

class AddTransport extends React.Component {
    
    constructor(props, context) {
		super(props, context);
        this.props = props;
    }
    
    componentWillMount() {
        
    }

    render() {

        return ( 
            <AddTransComponent {...this.props} />
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

export default connect(mapStateToProps, mapDispatchToProps)(AddTransport);
