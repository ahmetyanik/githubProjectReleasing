import React from "react";


function Input() {
  return (
    <div className="container">
      <form>
        <div className="d-flex justify-content-center">
          <div className="input-group flex-nowrap">
            <input
              type="text"
              className="form-control"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              name="userName"
              placeholder="Please write username"
            />
          </div>
        </div>
      </form>
    </div>
  );
}






export default Input;
