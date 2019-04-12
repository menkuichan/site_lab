import React from 'react';
import style from '../style.js'


export const Header = () => (
    <div style={style.profileInfo}>
        <div style={style.imageProfile}></div>
        <div style={style.aboutProfile}>
            <div style={{fontSize: '29px', fontWeight: 'bold'}}>Ilona Menkui</div>
            <div>18.08.1998</div>
            <div>Female</div>
            <div>ilona@mail.ru</div>
            <div>I'm a human. And cat lover.</div>
        </div>
    </div>

);

export default Header
