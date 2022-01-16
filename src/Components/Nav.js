import React, { useState, useEffect } from 'react';
import "./Nav.css";

function Nav() {

    const [show, setShow] = useState(false); //State to manage the scroll effect of the navbar

    useEffect(() => {

        //We basically add an event listener as we want the navbar color to change as we scroll below a certain level
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setShow(true)
            } else setShow(false);
        });
        return () => {
            window.removeEventListener("scroll") //now we remove the event listener as we dont want unlimited listeners we want to remove the listener that we first executed
        }
    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
                className="nav_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
                alt="Netflix Logo"
            />
            <img
                className="nav_avatar"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
                alt="Netflix Logo"
            />
        </div>
    )
}

export default Nav
