import { connect } from 'react-redux';
import { USER_LOGIN, USER_LOGOUT, LOGIN_PAGE_UNLOADED, UPDATE_FIELD_AUTH, USER_REGISTER } from '../../constants/ActionTypes';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import requestConfiguration from '../../RequestConfiguration';

const mapStateToProps = state => ({ ...state.login });

const mapDispatchToProps = dispatch => ({
    onChangeEmail: value =>
        dispatch({ type: UPDATE_FIELD_AUTH, key: 'email', value }),
    onChangePassword: value =>
        dispatch({ type: UPDATE_FIELD_AUTH, key: 'password', value }),
    onSubmit: (email, password) =>
        console.log("EMAIL" + email + "ŞİFRE:" + password),
    // dispatch({ type: USER_LOGIN, payload: requestConfiguration.Authentication.login(email, password) }),
    onUnload: () =>
        dispatch({ type: LOGIN_PAGE_UNLOADED })
});



class Login extends Component {
    changeEmail = ev => this.props.onChangeEmail(ev.target.value);
    changePassword = ev => this.props.onChangePassword(ev.target.value);
    loginBtnOnclick = (e) => {
        debugger;
        e.preventDefault();
        this.props.onSubmit(this.props.email, this.props.password);
    }
    render() {
        return (
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-dark text-white" style={{ borderRadius: "1rem" }} >
                                <div className="card-body p-5 text-center">
                                    <div className="mb-md-5 mt-md-4 pb-5">
                                        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                        <p className="text-white-50 mb-5">Please enter your login and password!</p>
                                        <div className="form-outline form-white mb-4">
                                            <input type="email" id="typeEmailX" className="form-control form-control-lg" value={this.props.email || ''} onChange={this.changeEmail.bind(this)} />
                                            <label className="form-label" htmlFor="typeEmailX">Email</label>
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <input type="password" id="typePasswordX" className="form-control form-control-lg" value={this.props.password || ''} onChange={this.changePassword.bind(this)} />
                                            <label className="form-label" htmlFor="typePasswordX">Password</label>
                                        </div>
                                        <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
                                        <button className="btn btn-outline-light btn-lg px-5" type="button" onClick={this.loginBtnOnclick.bind(this)}>Login</button>
                                        <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                            <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                                            <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                                            <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);