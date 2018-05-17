import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../actions/actionCreators";
import Main from "./Main";

// Pass state as props
const mapStateToProps = state => {
  return {
    posts: state.posts,
    comments: state.comments
  };
};

// Pass actions as props
const mapDispachToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

const Controller = connect(mapStateToProps, mapDispachToProps)(Main);

export default Controller;
