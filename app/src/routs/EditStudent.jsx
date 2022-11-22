import axios from 'axios';
import { useForm } from 'react-hook-form';
import Popup from 'reactjs-popup';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { TableContext } from '../components/Table';
import { MyContext } from '../context/MyContext';


const EditStudent = () => {
  const item = useContext(TableContext);
  const [name, setName] = useState(item.name);
  const [lastName, setLastName] = useState(item.lastname);
  const [user, setUser] = useState(item.user);
  const [email, setEmail] = useState(item.email);
  const [mobile, setMobile] = useState(item.mobile);
  const { editStudent, setEditEstudent }  = useContext(MyContext);
  const navigate = useNavigate();
  

  const editUser = (ev) => {
    ev.preventDefault();

    const edituser = {
      ...item,
      name: name,
      lastname: lastName,
      user: user,
      email: email,
      mobile: mobile,
      id: mobile
    };
    postEditUser(edituser);
    // setEditEstudent(!editStudent);
  };

  const refreshPage = () => {
    window.location.reload(false);
  };

  const postEditUser = async (item) => {
  axios({
    method: 'put',
    url: `http://localhost:3000/estudiantes/{item.id}`,
    data: item,
  });
};

  return (
    <Popup
      trigger={<button className="edit">Editar estudiante</button>}
      position="right center"
      modal
      nested
    >
      {(close) => (
        <div  className="modal">
          <div className="barra">
            <button className="perfil">Perfil</button>
            <button className="curses">Cursos</button>
            <button className="cancel">Cancelar edición</button>
          </div>

          <form
            className="form"
            onSubmit={(ev) => {
                editUser(ev), navigate('/home');
            }}
          >
            <div className="divlogin">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                onChange={(ev) => setName(ev.target.value)}
                value={name}
              />
              <label htmlFor="lastname">Apellidos</label>
              <input
                type="text"
                id="lastname"
                onChange={(ev) => setLastName(ev.target.value)}
                value={lastName}
              />
              <label htmlFor="user">Nombre de usuario</label>
              <input
                type="text"
                id="user"
                required
                onChange={(ev) => setUser(ev.target.value)}
                value={user}
              />
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                required
                onChange={(ev) => setEmail(ev.target.value)}
                value={email}
              />
              <label htmlFor="mobile">Móvil</label>
              <input
                type="text"
                id="mobile"
                required
                onChange={(ev) => setMobile(ev.target.value)}
                value={mobile}
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

export default EditStudent;
