import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from 'react-router-dom'

function FeatureBlock({feature}) {
    return (
        <div id="feature" className="thinBorder">

                <div className="boxText">{feature.title}</div>
                {/* <Link to={feature.link}></Link>
                <Route exact path={feature.link}/> */}

        </div>
    )
}

export default FeatureBlock