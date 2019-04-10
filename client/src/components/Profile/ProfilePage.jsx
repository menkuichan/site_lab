import React from 'react'
import style from './style.js'
import {
    Header, CreatePost, Posts
} from "./ProfileComponents";


export const ProfilePage = () => (
    <Wrap>
        <Header />
        <CreatePost />
        <Posts />
    </Wrap>
);

export const Wrap = props => (
    <div style={style.wrapClass}>
        <div style={style.headClass}>
            {props.children}
        </div>
    </div>
);

export default ProfilePage
