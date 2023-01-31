import React from "react";
import "../Styles/PatrickContainer/PatrickContainer.css"


export default function PatrickContainer(){
    return (
        <section className="patrick-container">
            <div className="patrick-flexbox">
                <img className="patrick-img" src="./images/image-patrick.jpg" alt="client" />
                <div className="patrick-info">
                    <p className="patrick-name">Patrick Abrams</p>
                    <p className="patrick-graduate">Verified Graduate</p>
                </div>
            </div>
            <p className="patrick-feedback">
                Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and 
                learning from their experiences was easy.
            </p>
            <p className="patrick-text">
                “ The staff seem genuinely concerned about my progress which I find really refreshing. The program 
                gave me the confidence necessary to be able to go out in the world and present myself as a capable 
                junior developer. The standard is above the rest. You will get the personal attention you need from 
                an incredible community of smart and amazing people. ”
            </p>
        </section>
    )
}