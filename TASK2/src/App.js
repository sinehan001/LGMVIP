import React from "react";
import "./App.css";
import Cards from "./users";

import { ThreeDots } from "react-loader-spinner";

function App() {
  const [isDataLoaded, setIsDataLoaded] = React.useState(false);
  const [userData, setUserData] = React.useState([]);
  const [isButtonClick, setisButtonClick] = React.useState(false);
  const handleClick = () => {
    setisButtonClick(true);

    fetch("https://reqres.in/api/users?page=1")
    .then((response) => response.json())
    .then((res) => {
      setUserData(res.data);
      setInterval(() => {
        setIsDataLoaded(true);
      }, 500);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  return (
    <section className="wholecontainer">
      <nav className="navbar navbar-expand-lg navbar-light glassnav">
        <div className="container-fluid">
          <span>
            <img className="brandname" src={require('./image/logo.png')} alt="LGMVIP" height={80} />
          </span>
          <span className="but">
            <ul className="navbar-nav ms-auto me-5">
              <button className="Btn" onClick={handleClick}>
                Get Users
              </button>
            </ul>
          </span>
        </div>
      </nav>

      <div className="container">
        <div className="row justify-content-center">
          {isButtonClick ? (
            isDataLoaded ? (
              <Cards userData={userData} />
            ) : (
              <div className="col-4 mt-5">
                <center>
                <i><h4 className="h4">Fetching Users Data...</h4></i>
                <span className="loader">
                  <ThreeDots color="white" width={150} height={150} />
                </span>
                </center>
              </div>
            )
          ) : (
            <div className="col-6 col-sm-8 text">
              <i><b>Click "Get Users" to Fetch Users Data</b></i>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default App;