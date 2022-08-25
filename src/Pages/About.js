import { useEffect } from "react";


function About() {

    // useEffect(()  => {
    //     document.body.classList.add('about-bg');

    //     return () => {
    //         document.body.classList.remove('about-bg');
    //     };
    // });

    return (
        <div>
            <p>YouZoo is meant to be a place to relax,</p>
            <p>look at some animals, and post a comment or two</p>
            <p>to let us know that you were here.</p>
        </div>
    )
}

export default About