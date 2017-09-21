import { connect } from 'react-redux';
import { logIn } from '../actions/user';
import LoginButton from '../components/LoginButton'

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => dispatch(logIn()),
  }
}

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginButton)

export default LoginContainer;