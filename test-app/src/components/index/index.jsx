import React, {useEffect, useState} from 'react';

function Index() {
    // Data
    const [projects, setProject] = useState([]);

    // Controls
    useEffect(() => {
        // Get the page contents
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
                <p class="arrow-bottom color-primary">&#11022;</p>
                <div class="line line-one line-narrow bg-primary"></div>
                <div class="line line-two line-narrow bg-primary"></div>
                <div class="line line-three line-thick bg-primary"></div>
            </header>
            <div class="projects">x</div>
        </>
    );
}

export default Index;