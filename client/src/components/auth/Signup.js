import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";

import { compose } from "redux";
import { signup } from "../../stores/actions/authActions";

class Signup extends Component {
    onSubmit = formProps => {
        this.props.signup(formProps);
    };

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <fieldset>
                    <label style={{ marginRight: "20px" }}>Email</label>
                    <Field
                        name="email"
                        type="text"
                        component="input"
                        autoComplete="none"
                    />
                </fieldset>
                <fieldset>
                    <label style={{ marginRight: "20px" }}>Password</label>
                    <Field
                        name="password"
                        type="password"
                        component="input"
                        autoComplete="none"
                    />
                </fieldset>
                <button>Sign up!</button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    };
};
const mapDispatchToProps = dispatch => {
    return {
        signup: formProps => dispatch(signup(formProps))
    };
};
export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    reduxForm({ form: "signup" })
)(Signup);
