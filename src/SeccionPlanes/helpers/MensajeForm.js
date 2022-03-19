import React from 'react';


export default function Mensaje({mensaje, bgColor}){

    let styles = {
        padding: "10px",
        margin: "10px",
        color: "white",
        fontWeight: "bold",
        backgroundColor: bgColor,
        textAling: 'center',
        display: 'flex',
        justifyContent:"center",
        alignItems: "center",
        borderRadius: "15px"
    }

    return(
        <div style={styles}>
            <p>{mensaje}</p>
        </div>
    );
}