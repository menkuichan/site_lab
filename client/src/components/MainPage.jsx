import React from 'react'
import { Link } from 'react-router-dom'


export const MainPage = props => (
    <div className="border-div">
        <header className="welcome">Здравствуй, <span>дорогой пользователь!</span></header>
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
            <p>Просто котик~</p>
            <img src={require("./images/gif.gif")} alt="Гифка с котиком" />
        </article>
        <footer>
            <p>Powered by cats!</p>
        </footer>
    </div>
)

export default MainPage
