import React from "react";
import "../Styles/KiraContainer/KiraContainer.css"


export default function KiraContainer(){
    return (
        <section className="kira-container">
            <div className="kira-flexbox">
                <img className="kira-img" src="./images/image-kira.jpg" alt="client" />
                <div className="kira-info">
                    <p className="kira-name">Kira Whittle</p>
                    <p className="kira-graduate">Verified Graduate</p>
                </div>
            </div>
            <p className="kira-feedback">Such a life-changing experience. Highly recommended!</p>
            <p className="kira-text">
                “ Before joining the bootcamp, I've never written a line of code. I needed some structure from 
                professionals who can help me learn programming step by step. I was encouraged to enroll by a former 
                student of theirs who can only say wonderful things about the program. The entire curriculum and staff 
                did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team 
                project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial 
                could ever have. In fact, I've often referred to it during interviews as an example of my developent 
                experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 
                100% recommend! ”
            </p>
        </section>
    )
}