const style = {
    wrapClass: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#E5C4B4',
        width: '750px',
        justifyContent: 'space-around',

    },
    headClass: {
        margin: '0 20px 0 20px',
        display: 'flex',
        flexDirection: 'column',
    },
    fontFaceElement: {
        fontFamily: 'Arial',
        src: 'url(./fonts/Perfect_fonts_CC.ttf)'
    },

    //profile

    profileInfo: {
        display: 'flex',
        justifyContent: 'space-beetwen',

    },
    imageProfile: {
        display: 'flex',
        flexDirection: 'row',
        margin: '0 100px 0 0'
    },
    aboutProfile: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: '18px',
        justifyContent: 'space-around'
    },

    // create post

    inputPost: {
        display: 'flex',
        justifyContent: 'space-beetwen',
        margin: "20px 0 0 0"
    },
    post: {
        width: '650px',
        border: '0px',
        borderRadius: '15px',
        height: "40px"
    },
    submitPost: {
        background: "none",
        border: "0px",
        fontSize: "15px",
        cursor: "pointer",
    },

    //post
     postsWrap: {
        display: 'flex',
         justifyContent: 'space-beetwen',
         flexDirection: 'column',
     },

    postElement: {
        backgroundColor: '#FCF0E4',
        margin: "20px 0 20px 0",
     }
}

export default style;
