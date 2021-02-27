import React from 'react';
import "./Country.css"
const Country = (props) => {
    // console.log(props.country);
    const {name,population,region,flag}= props.country; 
    return (
        <div className="country-info">
            <h4>Country: {name}</h4>
            <img style={{height:"50px"}} src={flag} alt=""/>
            <p>Population : {population}</p>
            <p><small>Region : {region}</small></p>
            <button onClick={()=>props.handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;