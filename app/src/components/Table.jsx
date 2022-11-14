import { useState, useEffect } from "react";
import getData from "../api/getData";
// import InfoUser from "./InfoUser";
import React from 'react';
import InfoUser from "./InfoUser";
import NewStudent from "./NewStundent";

const Table = () => {
    const [students, setStudents] = useState([]);
    
    useEffect(() => {
        getData().then((res) => setStudents(res));
      }, []);
    
    return (
        <div >
            <NewStudent/>
            <div className="table">
                <div className="titles">
                    <p className="conexion">Conexión</p>
                    <p>Nombre y apellidos</p>
                    <p>Nombre de usuario</p>
                    <p>Email</p>
                    <p>Móvil</p>
                </div>
                {students.map((item) => (     
                <div className="students" key={item.user}>
                    <button className="connect" >Offline</button>
                    <p>{item.name} {item.lastname}</p>
                    <p>{item.user}</p>
                    <p>{item.email}</p>
                    <p>{item.mobile}</p>
                    <InfoUser item={item}/>
                </div>
                ))} 
            </div>
        </div>
    )
}

export default Table;