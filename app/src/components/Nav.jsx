import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
      <div className="nav">
        <div className="searching">
        <NavLink to="/home">
         <img className="imgLink" src="/logo2.png" alt="logoHome"/>
        </NavLink>
            <img className="lupa"  src="/lupa.png" alt="lupa"/>
            <input className="search" type="text" placeholder="Buscar"/>
        </div>
        <div className="profile">
            <button className="buzon"><img className="buzon" src="/buzon.png"/></button>
            <button className="bell"><img className="bell" src="/bell.png"/></button>
            <NavLink to="/profile">
            <img className="user" src="/profile.png" alt="profile"/>
            </NavLink>
        </div>
      </div>
    );
  };
  
  export default Nav;