import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { register } from '../../actions';

class SignUp extends Component {
  handleSubmitForm = ({ username, password, confirmPassword }) => {
    const { history } = this.props;
    this.props.register(username, password, confirmPassword, history);
  };

  renderAlert = () => {
    if (!this.props.error) return null;
    return <h3>{this.props.error}</h3>;
  };

  render() {
    // const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={this.props.handleSubmitForm}>
          <fieldset>
            <label>Username:</label>
            <Field name="username" Component="input" type="text" />
          </fieldset>
          <fieldset>
            <label>Password:</label>
            <Field name="password" Component="input" type="password" />
          </fieldset>
          <fieldset>
            <label>Confirm Password:</label>
            <Field name="confirmPassword" comp="input" type="password" />
          </fieldset>
          <button action="submit">Sign Up</button>
          {this.renderAlert()}
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.auth.error,
  };
};

SignUp = connect(mapStateToProps, { register })(SignUp);

export default reduxForm({
  form: 'signup',
  fields: ['username', 'password', 'confirmPassword'],
})(SignUp);
