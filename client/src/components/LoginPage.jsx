import React from 'react'
import { Link } from 'react-router-dom'


export const LoginPage = props => (
    <div className="border-div">
        <header className="welcome">Вход</header>
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
            <div className="login-div">
                <form action="/api/login" method="post">
                    <input className="login-input" placeholder="login" type="text" name="login" />
                    <br />
                    <input className="login-input" placeholder="*****" type="password" name="password" />
                    <br />
                    <input className="submit" type="submit" name="submit" defaultValue="Submit!" />
                </form>
            </div>
        </article>
        <footer>
            <p>Powered by cats!</p>
        </footer>
    </div>
)

export default LoginPage