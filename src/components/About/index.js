import React from "react";

function About() {
    return(
        <section>
            <h1 id="about">About Me</h1>
            <img src={require('../../assets/panik.png')} alt="panik"></img>
            <div>
                <p>
                    An avid problem solver that enjoys solving interesting problems and challenges. I grew up in Saint Paul, Minnesota 
                </p>
            </div>
        </section>
    );
}

export default About;