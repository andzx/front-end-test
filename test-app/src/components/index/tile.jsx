import React, {useState} from 'react';

function Tile({project, index}) {
    return(
        <div class={"project " + project.appearances["color-scheme"]} key={index}>
            <img title={project.title} src={project.image} alt={project["image-alt"]} />
            <div class="date">Project {project.date}</div>
            <div id={project.href} class={"author color-" + project.appearances["color-scheme"]}>{project.author}</div>
            <div class="title">{project.title}</div>
            <a href={project.href} class="color-primary">
                <svg class="color-primary" width="62" height="21" viewBox="0 0 62 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 10.334H58.9158" stroke-width="3"/>
                    <path d="M51.0001 2L59.2001 10.2344L51.0001 19" stroke-width="3"/>
                </svg>
            </a>
        </div>
    );
}

export default Tile;