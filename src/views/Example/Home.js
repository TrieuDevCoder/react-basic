import React from "react";
import { withRouter } from "react-router-dom";
import Color from "../HOC/Color";
import { connect } from "react-redux";
class Home extends React.Component {
  componentDidMount() {
    // setTimeout(() => {
    //   this.props.history.push('/todos')
    // }, 2000);
  }
  handleOnClick = (user) => {
    console.log(">>>> check user", user);
    this.props.deleteUserRedux(user);
  };
  handleCreateUser = () => {
    this.props.CreateUserRedux()
  }
  render() {
    console.log(">>>> check props redux", this.props);
    let listUsers = this.props.dataRedux;
    return (
      <>
        <p>Welcome to the home page</p>
        {listUsers &&
          listUsers.length > 0 &&
          listUsers.map((item, index) => {
            return (
              <div key={index}>
                {index + 1}- {item.name}
                &nbsp; <span onClick={() => this.handleOnClick(item)}>x</span>


              </div>
            );
          })}
          <button onClick={() => this.handleCreateUser()}>Add new</button>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { dataRedux: state.users };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) =>
      dispatch({
        type: "DELETE_USER",
        payload: userDelete,
      }),
      CreateUserRedux: () =>dispatch({ type: "ADD_USER"})
  };
};
// export default withRouter(Home);
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
