import React from "react";


const styles ={

    wrapper: {
        margin:8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: " 1px solid grey",
        borderRadius: 16,
    },
    imageContainer: {},
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contentContainer:{
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nametext: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    commentText: {
        color: "black",
        fontSize: 16,
    }
};




function Comment(props){
    return(
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img
                    src="C:\Users\codehows\Desktop\포켓몬\이상해씨.png"
                    style={styles.image}
                >
                </img>
            </div>
            <div style={styles.contentContainer}>
                <span style={styles.nametext}>이인제</span>
                <span style={styles.commentText}>제가 만든 첫 커포넌트입니다.</span>
            </div>
        </div>
    );
}

export default Comment;