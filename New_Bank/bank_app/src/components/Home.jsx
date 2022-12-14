import React from "react";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="/home/lab-user/Downloads/download.jpeg"
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Home</h1>
            <p> Welcome to BSV Bank!We are here to help you.
            </p>
            <a href="/Login">
            <button className="client">Client</button>
            </a>

           <a href="/AdminLogin">
            <button className="admin">Admin</button>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;