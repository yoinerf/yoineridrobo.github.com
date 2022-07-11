import React from "react";
import './BannerInfo.css';

const fecha = Date();

function BannerInfo(){
    return(
        <div className="BannerInfo">
            <label>Fecha Actual: {fecha}</label>
        </div>
    );
}

export {BannerInfo};