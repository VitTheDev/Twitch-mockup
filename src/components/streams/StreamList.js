import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllStreams } from '../actions/index';

export class StreamList extends Component {
  componentDidMount() {
    this.props.fetchAllStreams();
  }

  renderAdmin = (stream) => {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
            Edit
          </Link>
          <Link
            to={`/streams/delete/${stream.id}`}
            className="ui button negative"
          >
            Delete
          </Link>
        </div>
      );
    }
  };

  renderList = () => {
    return this.props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream)}
          <i className="large middle aligned icon camera"></i>
          <Link to={`/streams/show/${stream.id}`} className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </Link>
        </div>
      );
    });
  };

  renderCreateStreamButton = () => {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'center ' }}>
          <Link className="ui button primary" to="/streams/create">
            Create a stream
          </Link>
        </div>
      );
    }
    return null;
  };

  render() {
    return (
      <div>
        <h2>Streams</h2>
        {this.renderCreateStreamButton()}
        <div className="ui celled list">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.stream),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchAllStreams })(StreamList);
