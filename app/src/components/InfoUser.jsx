import Popup from 'reactjs-popup';
import React from 'react';
import EditStudent from './EditStudent';

const InfoUser = ({ item }) => {
    return (
<Popup trigger={<h4 className='info'>i</h4>} position="right center" modal nested>
    {(close) => (
    <div className="modal" key={item.user}>
        <div className='barra'>
            <button className='perfil'>Perfil</button>
            <button className='curses'>Cursos</button>
            <EditStudent item={item}/>
        </div>
        <div className='section'>
            <img className='avatar' src={item.img} alt={item.img}/>
            <div className='users'>
                <img src="avatar.png" alt={item.img}/>
                <p><strong>Nombre y apellidos</strong><br/>{item.name}</p>
            </div>
            <div className='nameuser'>  
                <p><strong>Nombre de usuario</strong><br/>{item.user}</p>
            </div>
            <div className='mail'>
                <img src="mail.png" alt="buzon"/>
                <p><strong>Email</strong><br/>{item.email}</p>
            </div>
            <div className='movil'>
                <img src="movil.png" alt="movil"/>
                <p><strong>Móvil</strong><br/>{item.mobile}</p>
            </div>
            <div className='date'>
                <img src="date.png" alt="date"/>
                <p><strong>Fecha de inscripción</strong><br/>01/09/2022</p>
            </div>
        </div>
        <button className="close" onClick={close}>
          Cerrar
        </button>

    </div>
    )}
  </Popup>
)}
export default InfoUser;