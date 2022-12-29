import React from "react";

function About() {
    return(
        <section>
            <h1 id="about">About Me</h1>
            <img src={require('../../assets/IMG_20210110_145207_875.jpg')} alt="dario headshot"></img>
            <div>
                <p>
                    An avid problem solver that enjoys solving interesting problems and challenges. I grew up in Saint Paul, Minnesota. 
                </p>
            </div>
        </section>
    );
}

export default About;