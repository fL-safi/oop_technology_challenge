import React from "react";
import classes from "./Technology.module.css";
import Screen from "../assets/technologyservice/screen.png";
import icon1 from "../assets/technologyservice/icon1.svg"
import icon2 from "../assets/technologyservice/icon2.svg"
import icon3 from "../assets/technologyservice/icon3.svg"
import icon4 from "../assets/technologyservice/icon4.svg"
import button2 from "../assets/technologyservice/tech_button_2.png"




const TechnologyService = () => {
    return (
   
        <React.Fragment>
        <div className={classes.tech} >
        <div className={classes.headings} >
        <h1>Our Technology Services</h1>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui <br /> blan ditiis praes entium volup tatum deleniti.</p>
        </div>
        <div className={classes['small-container']} >
       

            <div className={classes.row} >
                
                <div className={classes['col-2']}>
        
                    <div className={classes.cards} >
                        <div className={classes.space} > 
                            <div> <img src={icon1} alt="Icon" /> </div>
                            <h3>Easy to buy and sale token</h3>
                            <p>Lorem ipsum dolor sit amet, cons <br /> ectetur adipiscing elit, sed do <br /> eiusm od tempor incididunt.</p>
                        </div>

                        <div className={classes.space} >  
                            <div> <img src={icon2} alt="Icon" /> </div>
                            <h3>Responsive Design</h3>
                            <p>Lorem ipsum dolor sit amet, cons <br /> ectetur adipiscing elit, sed do <br /> eiusm od tempor incididunt.</p>
                        </div>
                    </div>

                    <div className={classes.cards} >
                        <div className={classes.space} > 
                            <div> <img src={icon3} alt="Icon" /> </div>
                            <h3>Easy to to communicate</h3>
                            <p>Lorem ipsum dolor sit amet, cons <br /> ectetur adipiscing elit, sed do <br /> eiusm od tempor incididunt.</p>
                        </div>

                        <div className={classes.space} > 
                            <div> <img src={icon4} alt="Icon" /> </div>
                            <h3>Safe and Secure</h3>
                            <p>Lorem ipsum dolor sit amet, cons <br /> ectetur adipiscing elit, sed do <br /> eiusm od tempor incididunt.</p>
                        </div>
                    </div>
                    <div className={classes.buttonimg} >
                    <img src={button2}   />
                    </div>
                    
                </div>

                <div  className={classes['col-2']} >
                    <img src={Screen}  className={classes['tech-img']} alt="exclusive products" />
                </div>

            </div>
        </div>
    </div>
        </React.Fragment>

       
    )
}

export default TechnologyService;