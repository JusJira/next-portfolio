import React from 'react'
import ProjectBox from './ProjectBox'

function ProjectsWrapper(props: { projects: any }) {
    const projects = props.projects
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 my-16">
            {projects.map((project: any, index: number) => <ProjectBox key={index} projectDetail={project} />)}
        </div>
    )
}

export default ProjectsWrapper