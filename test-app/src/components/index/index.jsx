import React, {useEffect, useState} from 'react';
import Tile from './tile.jsx';

function Index() {
    // Data
    const [columns, setColumns] = useState([]);
    const [error, setError] = useState(null);

    // Controls
    useEffect(() => {
        // Get the page contents
    fetch("https://raw.githubusercontent.com/rommel-dk/front-end-test/master/assignment-assets/data.json")
      .then(res => res.json())
      .then(
        (result) => {
            let column = 0;
            let columns = [
                {"projects": []},
                {"projects": []},
                {"projects": []}
            ];
            
            // Place tiles in the right columns
            for (let i = 0; i < result.tiles.length; i++) {
                if (column > 2) column = 0;
                columns[column].projects.push(result.tiles[i]);
                column++;
            }
            
            setColumns(columns);
        },

        (error) => {
            setError("Website data could not be loaded, try refreshing the page");
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
                <svg class="arrow-downwards color-primary" width="125" height="46" viewBox="0 0 125 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 3H106.86V40.7655" stroke-width="6"/>
                    <path d="M122.5 24.2656L107 41.2656L90.5 24.2656" stroke-width="6"/>
                </svg>
                <div class="line line-one line-thin bg-primary"></div>
                <div class="line line-two line-thin bg-primary"></div>
                <div class="line line-three line-thick bg-primary"></div>
            </header>
            <div class="projects" id="#tiles">
                {error}
                
                {columns ? <>
                    {columns.map((column, columnIndex) => {
                        return (<div class={"column column" + columnIndex}>
                            {columns[columnIndex].projects.map((project, index) => {
                                return(<Tile project={project} index={index} />)
                            })}
                        </div>)
                    })}
                </> : <div class="loading">
                    <div class="loading1"></div>
                    <div class="loading2"></div>
                    <div class="loading3"></div>
                </div>}
            </div>
        </>
    );
}

export default Index;