import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../actions';

export class StreamShow extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderContent = () => {
    if (!this.props.stream) {
      return <h1>Loading...</h1>;
    }
    return <h1>{this.props.stream.title}</h1>;
  };

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.stream[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
