import React, { useState } from "react";
import "./styles.scss";
import Navicon from "../assets/markeble-logo.png";
import BellOutlined from "@ant-design/icons";
// import { Navigate, useNavigate } from "react-router-dom";

function Nav() {
  // const [isOpen, setisOpen] = useState(true);
  // const navigate = useNavigate('')

  // const toggleButton = () =>  {
  //   setisOpen(!isOpen)
  //   Navigate('/sidebar');
  // }

  return (
    <div className="Nav-bar ">
      <div className="Navbar-left">
        <img src={Navicon} alt="Logo" />
        
        <ul>
          <li>
            <a href="#">
              <li>My App</li>
            </a>
          </li>
          <li>
            <a href="#">
              <li>Home</li>
            </a>
          </li>
          <li>
            <a href="#">
              <li>Explore</li>
            </a>
          </li>
        </ul>
        
        <input type="text" placeholder="Search for Contact" />
      </div>
      <div className="Navbar-right">
        <button type="button" class="btn  position-relative">
          <span class="material-symbols-outlined">notifications</span>
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            0
            <span class="visually-hidden">unread messages</span>
          </span>
        </button>

        <button type="button" class="btn  position-relative">
          <span class="material-symbols-outlined">mail</span>{" "}
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            0
            <span class="visually-hidden">unread messages</span>
          </span>
        </button>

        <button type="button" class="btn  position-relative">
          <span class="material-symbols-outlined">flash_on</span>{" "}
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            0
            <span class="visually-hidden">unread messages</span>
          </span>
        </button>
        <div className="text-center p-3">
          {" "}
          <img src={Navicon} alt="Profile"  className="Nav-bar-img"/> Mahesh
        </div>

        <button className="bg-danger text-white">
          <span class="material-symbols-outlined">add</span>
          Create
        </button>

        <button>
          <span class="material-symbols-outlined">star</span>
          Upgrade
        </button>

        <button>
          <span class="material-symbols-outlined">lists</span>
          More
        </button>
      </div>
    </div>
  );
}

export default Nav;
