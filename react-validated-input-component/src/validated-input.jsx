import React from 'react';

class ValidatedPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '' };

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });

  }

  render() {
    const passwordLength = this.state.password.length;
    let errorMsg = '';
    let iconClass = '';
    let errorColor = '';

    if (passwordLength === 0) {
      errorMsg = 'A password is required';
      iconClass = 'fa-solid fa-xmark fa-xl red';
      errorColor = 'red';
    } else if (passwordLength > 0 && passwordLength < 8) {
      errorMsg = 'Your password is too short.';
      iconClass = 'fa-solid fa-xmark fa-xl red';
      errorColor = 'red';
    } else {
      errorMsg = '';
      iconClass = 'fa-solid fa-check fa-xl green';
      errorColor = 'green';
    }

    return (
    <form>
      <label>Password:</label>
      <input
        onChange={this.handlePasswordChange}
        type="password"
        name="password"
        value={this.state.password}
        />
        <i className={iconClass}></i>
        <p className={errorColor}>{errorMsg}</p>
    </form>
    );
  }

}

export default <ValidatedPassword />;
