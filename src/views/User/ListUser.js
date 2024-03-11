import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
class ListUser extends React.Component {
  state = {
    listUser: [],
  };
  // componentDidMount() {
  //   axios.get('https://reqres.in/api/users?page=2').then(res=>{
  //     console.log('Check res',res.data.data)
  //   })
  // }
  async componentDidMount() {
    let res = await axios.get("https://reqres.in/api/users?page=1");
    this.setState({
      listUser: res && res.data && res.data.data ? res.data.data : [],
    });
  }
  handleViewDetailUser = (user) => {
    this.props.history.push(`/user/${user.id}`);
  };
  render() {
    let { listUser } = this.state;
    return (
      <div>
        <div className="title">Fetch all list user</div>

        {listUser &&
          listUser.length > 0 &&
          listUser.map((item, index) => {
            return (
              <div
                onClick={() => this.handleViewDetailUser(item)}
                className="child"
                key={item.id}
              >
                <span>
                  {index + 1}-{item.first_name}-{item.last_name}
                </span>
              </div>
            );
          })}
      </div>
    );
  }
}
export default withRouter(ListUser);
