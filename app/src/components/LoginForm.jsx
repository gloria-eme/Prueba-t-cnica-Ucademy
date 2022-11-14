import {useForm} from "react-hook-form"
import { useNavigate } from "react-router-dom";

const LoginForm = () =>{
    const {handleSubmit, register, formState: { errors }} = useForm();
    const navigat = useNavigate();

    const onFormSubmit = (values) => {
        window.localStorage.setItem(values.username, values.password);
        navigat("/home")
    };
    //faltar-ia el locaStorage y le meto el values de arriba

  return (
        <form onSubmit={handleSubmit(onFormSubmit)} className="form">
            <div className="divlogin">
                <label  htmlFor="username"><strong>* </strong>Nombre de usuario:</label>
                <input type="text" required 
                name="username" {...register("username", {
                    minLength:3,
                })}
                />
                {errors.username ? (
                    <p className="error">
                    El nombre de usuario debe tener un mínimo de 3 caracteres.
                    </p>
                ) : null}
                <label htmlFor="password"><strong>* </strong>Contraseña:</label>
                <div className="contraseña">
                    <input  className="seña" type="password" required 
                    name="password" {...register("password", {
                        minLength: 6,
                        pattern: /^\S*$/,
                        validate: {
                            format: (password) => {
                              return (
                                /[A-Z]/g.test(password) &&
                                /[0-9]/g.test(password)
                              );
                            }},
                    })}
                    />
                    {errors.password ? (
                        <p className="error">
                        {errors.password.type === "format" ? "La contraseña debe contener al menos un número y una mayúscula." : "La contraseña debe tener un mínimo de 6 caracteres" } 
                        </p>
                    ) : null}
                    {/* <button type="button">
                        <img src="/ojo1.jpg" className="ojo" alt="ojo"/></button> */}
                </div>
                <div className="check" name="remember">
                    <input className="checkbox" type="checkbox" name="remember"/>
                    <label className="rememberme" htmlFor="remember">Remember me</label>
                    <a href="*" className="forget">Olvidé mi contraseña</a>
                </div>
            </div>
            <button className="submit" type="submit" >Iniciar sesión</button>
        </form>
    );   
};

export default LoginForm