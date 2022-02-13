import React from "react";
import "./Skill.css"
function skills() {
    return <div className="s">
        <p className="line"></p>
        <h3 className="h1">Front End</h3>
        <div className="skillscontainer">
            <div className="l1">
                <p className="m1">35%</p>
            </div>
            <span className="html">HTML</span><div className="b1"></div>
            <div className="l2">
                <p className="m2">65%</p>
            </div>
            <span className="css">CSS5</span><div className="b2"></div>
            <div className="l3">
                <p className="m3">25%</p>
            </div>
            <span className="js">JavaScript</span><div className="b3"></div>
            <div className="l4">
                <p className="m4">89%</p>
            </div>
            <span className="react">ReactJs</span><div className="b4"></div>
        </div>
        <h3 className="h2">Back End</h3>

        <div className="roundContainer">
            <div className="r1">
                <p className="n1">75%</p>
            </div>
            <div className="r1circle"></div>
            <span className="node">NodeJs</span>
            <div className="r2">
                <p className="n2">30%</p>
            </div>
            <div className="r2circle"></div>
            <span className="email">EmailJs</span>
        </div>
        <div className="title">
            <span className="text">
                " This is my Final Portfolio using ReactJs as Front-End Javascript Framework and 
                NodeJs , EmailJs as Back-End Framework. <br /> I know it's not fully responsive But I will Update it's designs & features
                as time goes on, " <br />
                       <span className="last">Please Provide Your Feedback !</span> 
            </span>
        </div>
    </div>
}

export default skills;