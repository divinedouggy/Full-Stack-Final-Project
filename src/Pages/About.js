// import { useEffect } from "react";


function About() {

    // useEffect(()  => {
    //     document.body.classList.add('about-bg');

    //     return () => {
    //         document.body.classList.remove('about-bg');
    //     };
    // });

    return (
        <div className="about">
            <p>YouZoo was created for animal lovers to unite over one common cause: well, animals.</p>
            <p>So, do it. Look at some animals. <span className="glow">You know you want to.</span></p>
            <p>Go on; they don't bite. There's no cages to stick your fingers through here.</p>
            <p>And - post a comment to let us know you were here!</p>
     
        </div>
    )
}

export default About