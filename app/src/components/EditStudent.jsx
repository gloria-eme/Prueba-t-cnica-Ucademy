import Popup from 'reactjs-popup';
import React from 'react';
import { useState } from "react";
 import { useNavigate } from "react-router-dom";
 
const EditStudent = ({ item }) => {
    const [name, setName] = useState(item.name);
    const [lastName, setLastName] = useState(item.lastname);
    const [user, setUser] = useState(item.user);
    const [email, setEmail] = useState(item.email);
    const [mobile, setMobile] = useState(item.mobile);
    const [editStudent, setEditEdtudent] = useState()
    const navigate = useNavigate();
    // const [ student, setStudent] = useState({item})
     
    const refreshPage = () => {
        window.location.reload(false);
        postNewUser()
    }
    const postNewUser = async (item) => {
        axios({
            method: "post",
            url: "http://localhost:3000/estudiantes",
            data: item,
        })
    }
    return (
    <Popup trigger={<button className='edit'>Editar estudiante</button>} position="right center" modal nested>
        {(close) => (
        <div className="modal">
            <div className='barra'>
                <button className='perfil'>Perfil</button>
                <button className='curses'>Cursos</button>
                <button className='cancel'>Cancelar edición</button>
               
            </div>
          
            <form className="form" onSubmit={(ev) => { 
                onSubmit(ev), navigate("/home")}}
            >
                <div className="divlogin">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" id="name" required
                        onChange={(ev) => setName(ev.target.value)}
                            placeholder={item.name}/>
                    <label  htmlFor="lastname">Apellidos</label>
                    <input type="text" id="lastname" required
                        onChange={(ev) => setLastName(ev.target.value)}
                            placeholder={item.lastname}/>
                    <label  htmlFor="user" >Nombre de usuario</label>
                    <input type="text" id="user" required
                        onChange={(ev) => setUser(ev.target.value)}
                            placeholder={item.user}/>
                    <label  htmlFor="email">Email</label>
                    <input type="text" id="email" required
                        onChange={(ev) => setEmail(ev.target.value)}
                            placeholder={item.email}/>
                    <label  htmlFor="mobile">Móvil</label>
                    <input type="text" id="mobile" required
                        onChange={(ev) => setMobile(ev.target.value)}
                            placeholder={item.mobile}/>
                    </div> 
                    <input className="save" type="submit" onClick={refreshPage} value="Guardar"/>
                </form>
           
            <button className="close" onClick={close}>
                Cerrar
            </button>
        </div>
        )}
    </Popup>
)}


export default EditStudent