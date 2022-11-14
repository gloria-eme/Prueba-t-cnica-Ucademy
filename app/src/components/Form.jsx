// import { useNavigate } from "react-router-dom";

// const Form = ({close, setName, setLastName, setUser, setEmail, setMobile, createUser}) => {
//     const navigate = useNavigate();

//     return (
//         <>
//             <input className="save" type="submit" value="Guardar"/>
//             <form className="form" onSubmit={(ev) =>{ 
//                 createUser(ev), navigate("/home")}}
//             >
//                 <div className="divlogin">
//                     <label htmlFor="name">Nombre</label>
//                     <input type="text" id="name" required
//                     onChange={(ev) => setName(ev.target.value)}/>
//                     <label  htmlFor="lastname">Apellidos</label>
//                     <input type="text" id="lastname" required
//                     onChange={(ev) => setLastName(ev.target.value)}/>
//                     <label  htmlFor="user" >Nombre de usuario</label>
//                     <input type="text" id="user" required
//                     onChange={(ev) => setUser(ev.target.value)}/>
//                     <label  htmlFor="email">Email</label>
//                     <input type="text" id="email" required
//                     onChange={(ev) => setEmail(ev.target.value)}/>
//                     <label  htmlFor="mobile">Móvil</label>
//                     <input type="text" id="mobile" required
//                     onChange={(ev) => setMobile(ev.target.value)}/>
//                 </div> 
//             </form>
//             <button className="close" onClick={close}>
//                 Cerrar
//             </button>
//         </>
//     )
// }

// export default Form;