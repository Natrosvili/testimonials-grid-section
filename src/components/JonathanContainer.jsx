import React from "react";
import "../Styles/JonathanContainer/JonathanContainer.css"


export default function JonathanContainer(){
    return (
        <section className="jonathan-container">
            <div className="jonathan-flexbox">
                <img className="jonathan-img" src="./images/image-jonathan.jpg" alt="client" />
                <div className="jonathan-info">
                    <p className="jonathan-name">Jonathan Walters</p>
                    <p className="jonathan-graduate">Verified Graduate</p>
                </div>
            </div>
            <p className="jonathan-feedback">The team was very supportive and kept me motivated</p>
            <p className="jonathan-text">
                “ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer 
                for a big company. This was one of the best investments I've made in myself. ”
            </p>
        </section>
    )
}