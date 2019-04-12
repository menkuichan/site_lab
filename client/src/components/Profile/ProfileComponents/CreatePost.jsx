import React from 'react';
import style from '../style.js';

export const CreatePost = () => (
    <div style={style.inputPost}>
        <form action="/profile" method="post">
            <input style={style.post} type="text" name="text"/>
            <input style={style.submitPost} type="submit" value="Submit"/>
        </form>
    </div>
);

export default CreatePost