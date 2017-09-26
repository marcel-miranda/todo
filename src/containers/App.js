import { connect } from 'react-redux';
import App from '../components/App';
import { initialize } from '../actions/user';

const mapStateToProps = state => {
  return {
    user: state.user,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    initialize: () => dispatch(initialize()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
