import React from "react";
import "../Styles/DanielContainer/DanielContainer.css"

export default function DanielContainer(){
    return (
        <section className="daniel-container">
            <div className="daniel-flexbox">
                <img className="daniel-img" src="./images/image-daniel.jpg" alt="client" />
                <div className="daniel-info">
                    <p className="daniel-name">Daniel Clifford</p>
                    <p className="daniel-graduate">Verified Graduate</p>
                </div>
            </div>
            <p className="daniel-feedback">
                I received a job offer mid-course, and the subjects I learned were current, if not more so, 
                in the company I joined. I honestly feel I got every penny's worth.
            </p>
            <p className="daniel-text">
                “ I was an EMT for many years before I joined the bootcamp. I've been looking to make a 
                transition and have heard some people who had an amazing experience here. I signed up 
                for the free intro course and found it incredibly fun! I enrolled shortly thereafter. 
                The next 12 weeks was the best - and most grueling - time of my life. Since completing 
                the course, I've successfully switched careers, working as a Software Engineer at a VR startup. ”
            </p>
        </section>
    )
}