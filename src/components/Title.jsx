import React from "react";
import { useParams } from "react-router";


function Title(){

    const parametre = useParams();

    return(
        <h3 className="text-center mt-3 rounded p-2" style={{backgroundColor:"rgb(231, 227, 231)"}}>
        Followings of {parametre.username}
      </h3>
    )
}


export default Title;