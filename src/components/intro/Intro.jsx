import React from 'react'
import "./intro.css"
import Me from "../../img/code.gif"

export const Intro = () => {
    return (
        <div className='i'>
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className='i-intro'>Hello, My name is</h2>
                    <h1 className='i-name'>Mohit</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Enthusiast</div>
                            <div className="i-title-item">Photographer</div>
                            <div className="i-title-item">Competitve Programmer</div>
                            <div className="i-title-item">Video Editor</div>
                        </div>
                    </div>
                    <div className="i-desc">
                       I am currently doing my B.E from University Institute Of Technology in
                       Information Technology. 
                    </div>
                    <a href="resume.pdf" download="resume.pdf">
                        <button className='resumebtn'>Get Resume</button>
                    </a>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="" className='i-img'/>
            </div>
        </div>
    )
}
