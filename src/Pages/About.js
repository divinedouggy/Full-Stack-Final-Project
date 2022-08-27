import { useEffect } from "react";


function About() {

    // useEffect(()  => {
    //     document.body.classList.add('about-bg');

    //     return () => {
    //         document.body.classList.remove('about-bg');
    //     };
    // });

    return (
        <div className="about">
            <p>YouZoo is meant to be a place to relax,</p>
            <p>look at some animals, and also:</p>
            <p>post a comment or two to let us know that you are here!</p>
        </div>
    )
}

export default About