import React from "react";
class childEx2 extends React.Component {
  state = {
    show: false,
  };
  handleShowName = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    let { show } = this.state;
    return (
      <div>
        <h1>Test</h1>
        {show === false ? (
          <button onClick={() => this.handleShowName()}>Show</button>
        ) : (
          <div>
            <p>Nguyeen dong Trieu</p>
            <button onClick={() => this.handleShowName()}>Hide</button>
          </div>
        )}
      </div>
    );
  }
}
export default childEx2;
