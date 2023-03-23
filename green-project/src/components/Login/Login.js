import { useContext } from "react";

import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import { AuthContext } from '../../contexts/AuthContext';

import { useForm } from "../../hook/useForm";

const LoginFormKeys = {
    Email: 'email',
    Password: 'password'
};


export const Login = () => {
    const { onLoginSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    }, onLoginSubmit)

    return (
        <section className={styles["login"]}>

            <div className={styles["login-div"]}>
                <h2 className={styles["login-title"]}>Login</h2>
                <p className={styles["login-preview"]}>Log in to your profile and add your new project</p>

                <form className={styles["login-form"]} onSubmit={onSubmit}>
                    <div className={styles["form-group"]}>
                        <label htmlFor="email">Email</label>
                        <input
                            className={styles["email"]}
                            type="text" name={LoginFormKeys.Email}
                            id="email"
                            placeholder="email ..."
                            value={values[LoginFormKeys.Email]}
                            onChange={changeHandler} 
                            />
                    </div>
                    <div className={styles["form-group"]}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name={LoginFormKeys.Password}
                            id="password"
                            placeholder="password ..."
                            value={values[LoginFormKeys.Password]}
                            onChange={changeHandler}
                        />
                    </div>
                    {/* <input type="submit" className={styles["button-idea"]} value="Login" /> */}
                    <button className={styles["button-idea"]}>Login</button>
                    <Link to="/register" className={styles["redirect-register"]} >If you don't have a registration click here</Link>
                </form>
                
            </div>

        </section>
    )
}