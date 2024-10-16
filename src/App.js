import React from "react";
import Navbar from "./component/Navbar"
import Content from "./component/Content"
import Data from "./data"

export default function App(){
    const getdata = Data.map(i =>{
        return <Content key={i.id} {...i} />
    })


    return(
        <div>
            <Navbar />
            <div className="padtop">
                {getdata}
            </div>
        </div>
    )
}
