import React from "react";
import Pin from "../logoimages/pin.svg"

export default function Content(props){
    return(
        <div className="content">
            <img src={props.imageUrl} alt="Poster" className="content--poster"/>
            <div className="content--details">
                <div className="content--detailssub">
                    <img src={Pin} alt="Pin" className="content--pin"/>
                    <h4 className="content--country">{props.location}</h4>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="content--location">{props.title}</h1>
                <h4 className="content--date">{`${props.startDate} - ${props.endDate}`}</h4>
                <p className="content--desc">{props.description}</p>
            </div>
        </div>
    )
}