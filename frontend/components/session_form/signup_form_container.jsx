import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, login } from '../../actions/session_actions';
import SessionForm from './session_form'
import { closeModal, openModal } from '../../actions/modal_actions';


const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Create Account',
        welcome: <p className="welcome">Join DIM Cooking</p>
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        otherForm: (
            <div className="other-form">
                Already have an account?&nbsp;
                <button className="link-button" onClick={() => dispatch(openModal('login'))}> 
                    Log in
                </button>
            </div>
        ),
        closeModal: () => dispatch(closeModal()),
        login: (user) => dispatch(login(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);