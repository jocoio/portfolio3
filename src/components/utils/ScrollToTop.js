import { Component } from 'react';
import { withRouter } from 'react-router';

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      setTimeout(() => {window.scrollTo(0, 0)}, 300);
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)