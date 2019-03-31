import React, { Component } from "react";
import { connect } from 'react-redux';
import { signout } from "../../stores/actions/authActions";

class Signout extends Component {
    componentDidMount = () => {
        this.props.signout();
    }

    render() {
        return <div>Sorry to see you go</div>;
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signout: () => dispatch(signout())
    }
}

export default connect(null, mapDispatchToProps)(Signout)
