import React from "react";

function About() {
    return(
        <section>
            <h1 id="about">About Me</h1>
            <img src={require('../../assets/panik.png')} alt="panik"></img>
            <div>
                <p>
                    yadda yadda lorem ipsum i'm on a deadline
                </p>
            </div>
        </section>
    );
}

export default About;