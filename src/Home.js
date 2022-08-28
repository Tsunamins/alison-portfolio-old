import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from 'react-router-dom'
import FeatureBlock from "./FeatureBlock";
import { features } from "./data/data";

function Home(props) {
    return (
        <div id="home">
            <div className="">
                <div id="intro" className="teal h1Size">Alison Codes </div>
                <hr></hr>
                {/* <div className="typewriter teal h1Size">. . .</div> */}
            </div>
            {/* todo - make home a container of a Features and/or bottom half of page */}
            {/* to do - routes need to be done differently in this case - fix */}
            {/* <Routes> */}
            <div id="features">
                {features.map((feature, i) => (
                    <div className="inline">
                        <FeatureBlock feature={feature} />
                    </div>
                ))}

            </div>
            {/* </Routes> */}
        </div>
    )
}

export default Home