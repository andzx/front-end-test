import React, {useEffect, useState} from 'react';

function Index() {
    // Data
    const [projects, setProjects] = useState([]);

    // Controls
    useEffect(() => {
        // Get the page contents
    fetch("https://raw.githubusercontent.com/rommel-dk/front-end-test/master/assignment-assets/data.json")
      .then(res => res.json())
      .then(
        (result) => {
            setProjects(result.tiles);
        },

        (error) => {

        });
    }, []);

    // View
    return (
        <>
            <header class="header-index">
                <h1>Master the front-<span class="text-behind">end</span> w<span class="text-behind">i</span>th fine<span class="text-behind">sse</span></h1>
                <p>The assignment is supposed to be executed as simple as 
                possible. Code the template in HTML/CSS and try to avoid 3. 
                party frameworks as much as possible. Creating the page with 
                React components will grant extra megamate bonus points.</p>
                <p class="arrow-downwards color-primary">&#11022;</p>
                <div class="line line-one line-thin bg-primary"></div>
                <div class="line line-two line-thin bg-primary"></div>
                <div class="line line-three line-thick bg-primary"></div>
            </header>
            <div class="projects" id="#tiles">
                <div class="project alt">
                    <img title="I Imagined that Things Were Speaking" src="https://raw.githubusercontent.com/rommel-dk/front-end-test/master/assignment-assets/images/tiles-image-1.jpg" alt="I Imagined that Things Were Speaking"/>
                    <div class="date">Project 29 August 2019</div>
                    <div class="author color-alt">Jams Bonham</div>
                    <div class="title">I Imagined that Things Were Speaking</div>
                </div>
            </div>
        </>
    );
}

export default Index;