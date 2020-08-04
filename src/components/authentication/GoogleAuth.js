import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

export class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '224179760908-3fon1nnoqob39tc5ea3htol4ouq06a9j.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };
  renderAuthButton() {
    if (this.props.isSignedIn === null || this.props.isSignedIn) {
      return (
        <button
          onClick={() => this.auth.signOut()}
          className="ui red google button"
        >
          <i className="google icon"></i>Sign Out
        </button>
      );
    } else {
      return (
        <button
          onClick={() => this.auth.signIn()}
          className="ui red google button"
        >
          <i className="google icon"></i>Sign In
        </button>
      );
    }
  }
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
