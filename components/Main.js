import React from "react"

export default function Main(props){
    return (
        <main>
            <div className="main">
                <div>
                <img src={`../images/${props.image}`} className="hill-image"/>
                </div>
                <div className="main-content">
                    <div className="icon-row">
                        <img src={`../images/${props.icon}`} className="icon-image"/>
                        <span className="location">{props.location}</span> 
                        <span><a href={props.map}>View on Google Maps</a></span>
                    </div>
                    <h2>{props.title}</h2>
                    <p className="date-paragraph">{props.starting} - {props.ending}</p>
                    <p className="desc-paragraph">{props.desc}</p>
                </div>
            </div>
            <hr/>
        </main>
    )
}