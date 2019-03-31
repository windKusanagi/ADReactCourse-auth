import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";

import { compose } from "redux";
import { signup } from "../../stores/actions/authActions";

class Signup extends Component {
    onSubmit = formProps => {
        this.props.signup(formProps, () => {
            this.props.history.push('/features')
        });
    };

    render() {
        const { handleSubmit, auth } = this.props;

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
                {auth.errMsg && <h3>{auth.errMsg}</h3>}
                <button style={{ marginRight: "30px" }}>Sign up!</button>
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
        signup: (formProps, callback) => dispatch(signup(formProps, callback))
    };
};
export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    reduxForm({ form: "signup" })
)(Signup);
