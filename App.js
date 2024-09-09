import React from "react"
import Navbar from "./Navbar"
import Main from "./Main"
import data from "./data"

export default function App(){
    const myData = data.map(function(data){
        return <Main 
                    title = {data.title} 
                    location = {data.location}
                    icon = {data.icon}
                    map = {data.googleMapsUrl} 
                    starting = {data.startDate} 
                    ending = {data.endDate}
                    desc = {data.description}
                    image = {data.imageUrl}
                    />
    })
    return (
        <div className="container">
        <Navbar />
        {myData}
        </div>
    )
}