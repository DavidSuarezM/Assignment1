import React from 'react';
import { Link } from 'react-router-dom';
export default function Layout() {
    return (
        <>
            <header>
                <img src="dsLogo.png" alt="Logo" height="100" width="100"></img>
                <h1>My Portfolio</h1>
            </header>

            <link rel="icon" href="favicon.ico" type="image/x-icon"></link>
            <nav>
                <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/services">Services</Link>| <Link to="/project">Project</Link>| <Link to="/contact">Contact</Link>
            </nav>
            <main>
                <h2>👋 Welcome to My Portfolio</h2>
                <p>
                    Hi! I'm David Andres Suarez Molina. My natal country is Ecuador. I'm a Software Engineering student at Centennial College, currently immersed in the world of Web Application Development. This website is a showcase of my journey as a developer — a space where I share my projects, skills, and growth.
                </p>
                <h2>🎯 Mission Statement</h2>
                <p>
                    My mission is to build efficient, user-centered web applications that solve real-world problems through clean code and creative thinking. I'm passionate about continuous learning, collaboration, and turning ideas into functional digital experiences.
                </p>
            </main>
            <br />
            <hr />

        </>

    );
}