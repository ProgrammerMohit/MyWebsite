import "./about.css"
import Pic from "../../img/profile.jpg"
const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={Pic} alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    I am a <b>Competitive Programmer</b> at Codeforces and Codechef. I am also done some internships
                    in some NGO's. I participated in Spark AR Effect Competition and got some goodies. 
                </p>
                <p className="a-desc">
                    I have a 921 rating in Codeforces and 3 star at Codechef. I am also in LeetCode you can check all of my profile 
                    using the below link.
                </p>
                <div className="ac-links">
                    <a id="cf" href="https://codeforces.com/profile/it.20203040">Codeforces</a>
                    <a id="cc" href="https://www.codechef.com/users/mohitpus">Codechef</a>
                    <a id="lc" href="https://leetcode.com/user6513IK/">LeetCode</a>
                </div>
            </div>
        </div>
    )
}

export default About
