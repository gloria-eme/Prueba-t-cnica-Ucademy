import Popup from 'reactjs-popup';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewStudent = () => {
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const navigate = useNavigate();

  const createUser = (ev) => {
    ev.preventDefault();
    const newUser = {
      name: name,
      lastname: lastname,
      user: user,
      email: email,
      mobile: mobile,
      id: mobile,
    };
    postNewUser(newUser);
  };

  const refreshPage = () => {
    window.location.reload(false);
  };

  const postNewUser = async (item) => {
    axios({
      method: 'post',
      url: 'http://localhost:3000/estudiantes',
      data: item,
    });
  };
  return (
    <Popup
      trigger={
        <button className="new">
          <img className="new" src="/newstudent.png" />
        </button>
      }
      position="right center"
      modal
      nested
    >
      {(close) => (
        <div className="modal">
          <form
            className="form"
            onSubmit={(ev) => {
              createUser(ev), navigate('/home');
            }}
          >
            <div className="divlogin">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                required
                onChange={(ev) => setName(ev.target.value)}
              />
              <label htmlFor="lastname">Apellidos</label>
              <input
                type="text"
                id="lastname"
                required
                onChange={(ev) => setLastName(ev.target.value)}
              />

              <label htmlFor="user">Nombre de usuario</label>
              <input
                type="text"
                id="user"
                required
                onChange={(ev) => setUser(ev.target.value)}
              />

              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                required
                onChange={(ev) => setEmail(ev.target.value)}
              />

              <label htmlFor="mobile">Móvil</label>
              <input
                type="text"
                id="mobile"
                required
                onChange={(ev) => setMobile(ev.target.value)}
              />
            </div>
            <input className="save" type="submit" onClick={refreshPage} value="Guardar" />
          </form>
          <button className="close" onClick={close}>
            Cerrar
          </button>
        </div>
      )}
    </Popup>
  );
};

export default NewStudent;
