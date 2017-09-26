import { connect } from 'react-redux';
import { logIn, logOut } from '../actions/user';
import LoginButton from '../components/LoginButton'

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: () => dispatch(logIn()),
    logOut: () => dispatch(logOut()),
  }
}

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginButton)

export default LoginContainer;
