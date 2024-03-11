import React from "react";
import './Demo.scss';
// import Child2 from "./ChildEx2";
class childEx extends React.Component {
  state = {
    showJobs: false,
  };
  handleShowJobs = () => {
    this.setState({ showJobs: !this.state.showJobs });
  };
  handleDeleteJob = (job) => {
    console.log("Delete", job);
    this.props.deleteAJob(job);
  };
  render() {
    let { arrJobs } = this.props;
    let { showJobs } = this.state;

    const check = showJobs === true ? "showJobs=true" : "showJobs=false";
    console.log(">>>>>>> ", check);
    return (
      <>
        {showJobs === false ? (
          <div>
            <button onClick={() => this.handleShowJobs()}>Show</button>
          </div>
        ) : (
          <>
            <div className="child-arr">
              {arrJobs.map((item, index) => {
                return (
                  <div key={index}>
                    <p>
                      {item.name} - {item.salary}{" "}
                      <>
                        <span
                          onClick={() => {
                            this.handleDeleteJob(item);
                          }}
                        >
                          x
                        </span>
                      </>
                    </p>
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowJobs()}>Hide</button>
            </div>
          </>
        )}
        {/* <Child2 /> */}
      </>
    );
  }
}
// const childEx = (props) => {
//   let { arrJobs } = props;
//   return (
//     <>
//       <div className="child-arr">
//         {arrJobs.map((item, index) => {
//           return (
//             <div key={item.id}>
//               <p>
//                 {item.name}-{item.salary}
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };
export default childEx;
