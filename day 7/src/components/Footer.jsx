
import React from "react";

function Footer(){
    const styles={
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
    return(
        <>
            <br/>
            <div style={styles}>
                <img src="./Logo.png" height={50} />
                <br></br>
                <p style={{margin:'10px'}}>© Copyright Grp - 6</p>
            </div>
        </>
    );
}
export default Footer;