import { useState } from "react";
import { useMutation } from "@apollo/client";
import avatar from "../assets/avatar.png";

export default function AddClientModal() {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');


  function toggleModal() {
    setModal(() => !modal);
  }

  return (
    <>
      {modal ? (
        <div className="addClient--modal">
          <div className="modal--header">
            <h2>Enter Client Info</h2>
            <img src={avatar} className="logo"></img>
          </div>
          <div className="form--container">
            <div className="form">
              <form>
                <div className="field">
                  <label className="form--label">Name</label>
                  <input type="text" id="name" className="form--control" />
                </div>
              </form>
              <form>
                <div className="field">
                  <label className="form--label">Email</label>
                  <input type="text" id="name" className="form--control" />
                </div>
              </form>
              <form>
                <div className="field">
                  <label className="form--label">Phone</label>
                  <input type="text" id="name" className="form--control" />
                </div>
              </form>
            </div>
            <div className="client--info">
              <p>
                Enter the client information. A unique client ID will be
                generated so that each project can have a unique owner. Contact information is required when entering a new client's information. When deleting a client, any projects assosictaed with that owner will be deleted as well. Use caution!
              </p>
            </div>
          </div>
          <div className="modal--bottom">
            <button onClick={toggleModal}>Cancel</button>
            <button className="confirm--button">Add Client</button>
          </div>
        </div>
      ) : (
        <button onClick={toggleModal} className="add--client--button">
          <img src={avatar} className="icon"></img>Add Client
        </button>
      )}
    </>
  );
}
