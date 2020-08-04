import React, { Component } from 'react';
import { createStream } from '../actions';
import { connect } from 'react-redux';
import StreamForm from './StreamForm';

export class StreamCreate extends Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    stream: state.stream,
  };
};

export default connect(mapStateToProps, { createStream })(StreamCreate);
