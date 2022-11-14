const NavBar = () => {
    return (
        <div className="navBar">
            <button className="dash"><img className="dash" src="/dash.png"/></button>
            <button className="academia"><img className="academ" src="/academia.png"/></button>
            <ul className="ul">
                <li>Editar Academia</li>
                <li className="li">Estudiantes</li>
                <li>Profesores</li>
            </ul>
            <button className="cursos"><img className="cursos" src="/cursos.png"/></button>
        </div>
    )
};

export default NavBar;