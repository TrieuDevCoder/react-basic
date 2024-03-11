import logo from "./logo.svg";
import "./App.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import ListTodo from "./Todos/ListTodo";
import Home from "./Example/Home";
import Student from "./Student/Student";
import MyComponent from "./Example/MyComponent";
import Nav from "./Nav/Nav";
import ListUser from "./User/ListUser";
import DetailUser from "./User/DetailUser";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <Switch>
            <Route path="/" exact >
              <Home />
            </Route>
            <Route path="/todos">
              <ListTodo />
            </Route>
            <Route path="/students">
              <Student />
            </Route>
            <Route path="/contact">
              <MyComponent />
            </Route>
            <Route path="/user/:id">
              <DetailUser />
            </Route>
            <Route path="/user" exact>
              <ListUser />
            </Route>
            
          </Switch>
        </header>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
