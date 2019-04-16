import React from 'react'
import {Link} from 'react-router-dom'

export const RegisterPage = props => (
    <div className="border-div">
        <header className="welcome">Регистрация</header>
        <nav>
            <img src={require("./images/about.png")} alt="О сайте"/>
            <p>=^● ⋏ ● ^= Meow!</p>
            <img src={require("./images/categories.png")} alt="Категории"/>
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
                <Link to="/profile">
                    <li>Профиль</li>
                </Link>
            </ul>
        </nav>
        <article>
            <div className="register-div">
                <form action="/register" method="post">
                    <input className="login-input" placeholder="login" type="text" name="login" required={true}/>
                    <br/>
                    <input className="login-input" placeholder="email" type="email" name="email" required={true}/>
                    <br/>
                    <input className="login-input" placeholder="password" type="password" id="pas1" name="password"
                           required={true}/>
                    <br/>
                    <input className="login-input" placeholder="repeat password" type="password" id="pas2"
                           name="repassword"
                           required={true}/>
                    <br/>
                    <input className="submit" type="submit" name="submit" defaultValue="Register!"/>
                </form>
            </div>
        </article>
        <footer>
            <p>Powered by cats!</p>
        </footer>
    </div>
)

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('form').forEach(function (form) {
        form.onsubmit = function () {
            let pas1 = document.getElementById('pas1').value;
            let pas2 = document.getElementById('pas2').value;
            if (pas1 !== pas2) {
                alert("Пароли не совпадают!");
                return false;
            }
        }
    })
})

export default RegisterPage