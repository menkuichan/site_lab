import React from 'react';
import style from '../style.js'

export const CreatePost = () => (
    <div style={style.inputPost}>
        <form action=''>
            <input style={style.post} type="text" name="post" />
            <input style={style.submitPost} type="submit" value="Submit" />
        </form>
    </div>
);

export default CreatePost
