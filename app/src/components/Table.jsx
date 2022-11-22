import { React  } from 'react';
import InfoUser from '../routs/InfoUser';
import getData from '../api/getData';
import { v4 as uuidv4 } from "uuid";
import NewStudent from '../routs/NewStundent';
import { useContext, useState, useEffect, createContext } from 'react';
import { MyContext } from '../context/MyContext';

export const TableContext = createContext();

const Table = () => {
  const [students, setStudents] = useState([]);
  const { editStudent} = useContext(MyContext);
  
  useEffect(() => {
    (async () => {
      const users = await getData("students");
      setStudents(users);
    })();
  }, [JSON.stringify(students), editStudent]);

  return (
    <div>
      <NewStudent />
      <div className="table">
        <div className="titles">
          <p className="conexion">Conexión</p>
          <p>Nombre y apellidos</p>
          <p>Nombre de usuario</p>
          <p>Email</p>
          <p>Móvil</p>
        </div>
        {students.map((item) => (
          <div className="students" key={uuidv4()}>
            <button className="connect">Offline</button>
            <p>
              {item.name} {item.lastname}
            </p>
            <p>{item.user}</p>
            <p>{item.email}</p>
            <p>{item.mobile}</p>
            <TableContext.Provider value={item}>
              <InfoUser item={item}/>
            </TableContext.Provider>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
