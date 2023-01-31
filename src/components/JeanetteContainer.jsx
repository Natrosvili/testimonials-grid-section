import React from "react";
import "../Styles/JeanetteContainer/JeanetteContainer.css"


export default function JeanetteContainer(){
    return (
        <section className="jeanette-container">
            <div className="jeanette-flexbox">
                <img className="jeanette-img" src="./images/image-jeanette.jpg" alt="client" />
                <div className="jeanette-info">
                    <p className="jeanette-name">Jeanette Harmon</p>
                    <p className="jeanette-graduate">Verified Graduate</p>
                </div>
            </div>
            <p className="jeanette-feedback">An overall wonderful and rewarding experience</p>
            <p className="jeanette-text">
                “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living 
                while doing something I love. ”
            </p>
        </section>
    )
}