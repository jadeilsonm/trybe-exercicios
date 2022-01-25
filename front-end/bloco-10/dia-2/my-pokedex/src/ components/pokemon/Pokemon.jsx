import React from "react";
import './Pokemon.css'

class Pokemon extends React.Component{
    render(){
        const { Poke: {name, type, averageWeight, image} } =this.props;
        return(
            <div className="container">
                <div className="information">
                    <p>{name}</p>
                    <p>{type}</p>
                    <p>averageWeight: {averageWeight.value} {averageWeight.measurementUnit}</p>
                </div>
                <div className="container-img">
                    <img src = {image} />
                </div>
            </div>
        )
    }
}

export default Pokemon;