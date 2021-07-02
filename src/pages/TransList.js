import React from 'react';
import {connect} from 'react-redux';
import './TransList.css';
import ListComponent from '../components/transport/ListComponent';

class TransList extends React.Component {
    
    constructor(props, context) {
		super(props, context);
        this.props = props;
    }
    
    componentWillMount() {
        
    }

    render() {

        return ( 
            <ListComponent {...this.props} />
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

export default connect(mapStateToProps, mapDispatchToProps)(TransList);
