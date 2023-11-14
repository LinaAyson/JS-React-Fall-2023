import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Students.css";

export default function Students() {
  return (
    <div className="container-students">
      <h1>Students</h1>
      <div className="students-info">
        <div className="student">
          <NavLink>
            <img
              className="img-student"
              src="https://static.vecteezy.com/system/resources/previews/014/194/215/original/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg"
            />{" "}
          </NavLink>
          <h2>Name:</h2>
          <p>Contact</p>
        </div>
        <div className="student">
          <NavLink>
            <img
              className="img-student"
              src="https://static.vecteezy.com/system/resources/previews/014/194/215/original/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg"
            />
          </NavLink>
          <h2>Name:</h2>
          <p>Contact</p>
        </div>
        <div className="student">
          <NavLink>
            <img
              className="img-student"
              src="https://static.vecteezy.com/system/resources/previews/014/194/215/original/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg"
            />
          </NavLink>
          <h2>Name:</h2>
          <p>Contact</p>
        </div>
        <div className="student">
          <NavLink>
            <img
              className="img-student"
              src="https://static.vecteezy.com/system/resources/previews/014/194/215/original/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg"
            />
          </NavLink>
          <h2>Name:</h2>
          <p>Contact</p>
        </div>
        <div className="student">
          <NavLink>
            <img
              className="img-student"
              src="https://static.vecteezy.com/system/resources/previews/014/194/215/original/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg"
            />
          </NavLink>
          <h2>Name:</h2>
          <p>Contact</p>
        </div>
        <div className="student">
          <NavLink>
            <img
              className="img-student"
              src="https://static.vecteezy.com/system/resources/previews/014/194/215/original/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg"
            />
          </NavLink>
          <h2>Name:</h2>
          <p>Contact</p>
        </div>{" "}
      </div>
    </div>
  );
}
