import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_CLIENT } from "../mutations/clientMutations";
import { GET_CLIENTS } from "../queries/clientQueries";
import avatar from "../assets/avatar.png";

export default function AddClientModal() {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [addClient] = useMutation(ADD_CLIENT, {
    variables: { name, email, phone },
    update(cache, { data: { addClient } }) {
      const { clients } = cache.readQuery({ query: GET_CLIENTS });

      cache.writeQuery({
        query: GET_CLIENTS,
        data: { clients: [...clients, addClient] },
      });
    },
  });

  function toggleModal() {
    setModal(() => !modal);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(name === "" || email === "" || phone === "") {
      return alert('Please complete all required fields');
    }

    addClient(name, email, phone);

    setName('');
    setEmail('');
    setPhone('');

    setModal(() => !modal);
  };

  return (
    <>
      {modal ? (
        <div className="addClient--modal" id="modal">
          <div className="modal--header">
            <h2>Enter Client Info</h2>
            <img src={avatar} className="logo"></img>
          </div>
          <div className="form--container">
            <div className="form">
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <label className="form--label">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="form--control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="field">
                  <label className="form--label">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="form--control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="field">
                  <label className="form--label">Phone</label>
                  <input
                    type="text"
                    id="phone"
                    className="form--control"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="modal--bottom">
                  <button onClick={toggleModal}>Cancel</button>
                  <button
                    type="submit"
                    data-bs-dismiss="modal"
                    className="confirm--button"
                  >
                    Add Client
                  </button>
                </div>
              </form>
            </div>
            <div className="client--info">
              <p>
                Enter the client information. A unique client ID will be
                generated so that each project can have a unique owner. Contact
                information is required when entering a new client's
                information. When deleting a client, any projects assosictaed
                with that owner will be deleted as well. Use caution!
              </p>
            </div>
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
