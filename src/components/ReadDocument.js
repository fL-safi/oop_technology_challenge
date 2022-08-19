import React from "react";
import WhitePaper from "../assets/document/whitepaper.png"
import classes from "./ReadDocument.module.css"

const ReadDocument = () => {
    return (
        <React.Fragment>
        <div className={classes.offer} >
        <div className={classes['small-container']} >
            <div className={classes.row} >
                <div  className={classes['col-2']} >
                    <img src={WhitePaper}  className={classes['offer-img']} alt="exclusive products" />
                </div>
                <div className={classes['col-2']}>
                   
                    <h1>Read our Document</h1>
                    <small>
                        Here is our full documents that help you to 
                        understand about us. And  lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit.
                    </small>
                    <div className={classes.btns} >
                        <p><a href="" className={`${classes.btn} ${classes.btn1}`}  >White Paper <span>&nbsp; &nbsp; &nbsp; </span> </a> </p>
                        <p><a href=""  className={`${classes.btn} ${classes.btn1}`} >One Pager <span>&nbsp; &nbsp; &nbsp; </span> </a> </p>
                    </div>
                    <div className={classes.btns} >
                        <p><a href=""  className={`${classes.btn} ${classes.btn1}`} >Privacy & Policy </a> </p>
                        <p><a href=""  className={`${classes.btn} ${classes.btn1}`} >Terms of coin </a> </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </React.Fragment>
    )
}

export default ReadDocument;