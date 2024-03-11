import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
class DetailUser extends React.Component {
  state = {
    user: {},
  };
  async componentDidMount() {
    if (this.props.match && this.props.match.params) {
      let id = this.props.match.params.id;
      let res = await axios.get(`https://reqres.in/api/users/${id}`);
      this.setState({
        user: res && res.data && res.data.data ? res.data.data : {},
      });
      console.log(">>>>> check result", res);
    }
  }
  render() {
    let { user } = this.state;
    let isEmptyObj = Object.keys(user).length === 0;
    console.log(">>>> check props detail", this.props);
    return (
      <>
        <div>DetailUser</div>
        {isEmptyObj === false && (
          <>
            <div>User's Name :{user.first_name} - {user.last_name} </div>
            <div>User's Email : {user.email} </div>
            <div>
              <img src={user.avatar} />
            </div>
          </>
        )}
        <div>
            <button onClick={() => this.props.history.push("/user")}>
                Back 
            </button>
        </div>
      </>
    );
  }
}
export default withRouter(DetailUser);
