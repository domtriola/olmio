import React from 'react';
import SessionFooter from './session_footer.jsx';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { username: "", password: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();

    const user = Object.assign({}, this.state);
    this.props.processForm({ user });
  }

  update(field) {
    return evt => {
      this.setState({ [field]: evt.target.value });
    };
  }

  render() {
    const formTypeText = this.props.formType === "login" ? "Log In" : "Sign Up";

    return (
      <div className="session-form">
        <h2>{formTypeText}</h2>

          <form onSubmit={this.handleSubmit}>
            <ul className="errors">
              {this.props.errors.map((err, i) => <li key={i}>{err}</li>)}
            </ul>

            <label>Username<br />
              <input type="text"
                value={this.state.username}
                onChange={this.update("username")} />
            </label>

            <br />

            <label>Password<br />
              <input type="password"
                value={this.state.password}
                onChange={this.update("password")} />
            </label>

            <br />

            <input type="submit" value={formTypeText} />
          </form>

          <SessionFooter text={formTypeText} />
      </div>
    );
  }
}

export default SessionForm;
