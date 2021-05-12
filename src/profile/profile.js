import React from 'react';
import PropTypes from "prop-types";


const profili = (props) => {
    console.log(props)
    return (
        <div>
        
        <h1 style={{color:"navy" ,fontFamily:"opera" }} >
        {props.fullName} <br/>
        I'm {props.old} years , {props.hobby} is my hobby  <br/>
        i'm {props.job}
        </h1> 
        
        <button style={{color:"black", marginBottom:30, background:"green", borderRadius:10 }}  onClick={props.handleName}>
        be careful ! don't click
        </button> <br/>
        
        {props.children}
        
        </div>
    )
}

export default profili

profili.propTypes ={
    fullname:PropTypes.string,
    old:PropTypes.number,
    hobby:PropTypes.string,
    job:PropTypes.string,
}

profili.defaultProps = {
    fullName: "Mouhamed Ridha",
    old : 27,
    hobby : "photography",
    job : "marine mechanic" 
    };









