// import InputLogin from "../componens/INputLogin"
import LoginForm from "../components/LoginForm"
// import RefForm from "../componens/RefForm";
import "./login.css"

const Login = () => {
    return (
        <div className="login">
            <img className="imgLogin" src="/logo.png" alt="logo"/>
             <LoginForm/>
        </div>
    )
}

export default Login;