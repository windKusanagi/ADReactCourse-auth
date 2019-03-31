import React, { Component } from 'react';
import { connect } from 'react-redux';

const requireAuth = ChildComponent => {
    class ComposedComponent extends Component {
        componentDidMount(){
            this.shouldNavigateAway();
        }
        componentDidUpdate(){
            this.shouldNavigateAway();
        }

        shouldNavigateAway = () => {
            if (!this.props.authenticated){
                this.props.history.push('/')
            }
        }

        render() {
            return <ChildComponent {...this.props} />;
        }
    }
    const mapStateToProps = state => {
        return {
            authenticated: state.auth.authenticated
        }
    }
    return connect(mapStateToProps)(ComposedComponent);
}


export default requireAuth;



