import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlog } from '../../actions';

class BlogShow extends Component {
  componentDidMount() {
    this.props.fetchBlog(this.props.match.params._id);
  }

  render() {
    if (!this.props.blog) {
      return '';
    }

    const { title, content, signedUrl } = this.props.blog;

    return (
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <img src={signedUrl} width = "500" height = "500"/>
      </div>
    );
  }
}

function mapStateToProps({ blogs }, ownProps) {
  return { blog: blogs[ownProps.match.params._id] };
}

export default connect(mapStateToProps, { fetchBlog })(BlogShow);
