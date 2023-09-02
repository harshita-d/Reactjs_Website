import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="homeDiv">
      <div className="mt-10 mx-auto max-w-md">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <label htmlFor="message" className="inputLabel text-gray-800">
            Type The Message
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="message"
              id="message"
              autoComplete="given-name"
              className="inputBox"
            />
          </div>
          <button type="submit" className="submitButton">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
