import './contact.css'
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import { useContext, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context'

const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_suvz1gc', 'template_u0dz0vr', formRef.current, 'user_TcAW3xrY7d89HALOS3FTv')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div className="c">
            <div className="c-bg"></div>
            <dic className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">
                        Let's discuss your Project
                    </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            +91 7439199763
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon" />
                            it.20203040@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="" className="c-icon" />
                            Kolkata Airport, West Bengal, India.
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story?</b> Get in touch. Always available for
                        freelancing if the right project comes along me.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder='Name' name='user_name' />
                        <input  type="text" placeholder='Subject' name='user_subject' />
                        <input  type="text" placeholder='Email' name='user_email' />
                        <textarea rows="5" placeholder='Message' name='message' />
                        <button>Submit</button>
                        {done && " Sent.."}
                    </form>
                </div>
            </dic>
        </div>
    )
}

export default Contact
