import React, { useState } from "react";
import "./styles.scss";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleOpenModal = (content) => {
    setModalContent(content);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setModalContent("");
  };

  const modalData = {
    Events: ["Indoor Cricket 10:00 21/11/23 - 13:00 21/11/23", "Indoor Cricket 10:00 22/11/23 - 13:00 21/11/23", "Indoor Cricket 10:00 23/11/23 - 13:00 21/11/23"],
    Contacts: ["Adariana Jones", "Adolescent Wllbeing ", "Bexkey"],
    Projects: ["Project 1", "Project 2"],
    Albums: ["ATraining Project", "Adoption Application","Birmingham Youth"],
    Organisation: ["All Hubs", "Bradford", "Funders"],
  };

  return (
    <div className="sidebar">
      <div className="side-content">
        <ul>
          <li>
            <a href="#" onClick={() => handleOpenModal("Events")}>Events</a>
          </li>
          <li>
            <a href="#" onClick={() => handleOpenModal("Contacts")}>
              Contacts <span>32</span>
            </a>
          </li>
          <li>
            <a href="#" onClick={() => handleOpenModal("Projects")}>Projects</a>
          </li>
          <li>
            <a href="#" onClick={() => handleOpenModal("Albums")}>Albums</a>
          </li>
          <li>
            <a href="#" onClick={() => handleOpenModal("Organisation")}>Organisation</a>
          </li>
        </ul>
      </div>

      {isOpen && (
        <div className="modal-overlay" onClick={handleCloseModal} id="model-data" >
          <div className="modal-dialog modal-dialog-scrollable" onClick={(e) => e.stopPropagation()} >
            <div className="modal-header">
              <h5 className="modal-title" style={{ color: 'rgb(212, 60, 60)', fontSize: '20px', fontWeight: '600' }} >{modalContent}</h5>
              <button className="close" onClick={handleCloseModal} style={{marginLeft: '5rem',padding: '3px 10px', border: 'none', backgroundColor: "rgb(212, 60, 60)", color: '#fff'}}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <ul style={{alignItems: 'left'}}>
                {modalData[modalContent].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
