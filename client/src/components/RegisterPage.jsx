import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterPage = props => (
    <div className="border-div">
        <header className="welcome">Регистрация</header>
        <nav>
            <img src={require("./images/about.png")} alt="О сайте" />
            <p>=^● ⋏ ● ^= Meow!</p>
            <img src={require("./images/categories.png")} alt="Категории" />
            <ul>
                <Link to="/">
                    <li>Главная</li>
                </Link>
                <Link to="/login">
                    <li>Войти</li>
                </Link>
                <Link to="/register">
                    <li>Зарегистрироваться</li>
                </Link>
            </ul>
        </nav>
        <article>
            <div className="register-div">
                <form action="/api/register" method="post">
                    <input className="login-input" placeholder="login" type="text" name="login" />
                    <br />
                    <input className="login-input" placeholder="email" type="email" name="email" />
                    <br />
                    <input className="login-input" placeholder="password" type="password" name="password" />
                    <br />
                    <input className="login-input" placeholder="repeat password" type="password" name="repassword" />
                    <br />
                    <input className="submit" type="submit" name="submit" defaultValue="Register!" />
                </form>
            </div>
        </article>
        <footer>
            <p>Powered by cats!</p>
        </footer>
    </div>
)

export default RegisterPage
