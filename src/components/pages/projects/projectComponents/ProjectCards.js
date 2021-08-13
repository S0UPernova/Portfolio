import React from "react"
import projectData from "./projectData.json"
class ProjectCards extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTag: ""
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
            
        })
    }
    render() {
        // creating a variable to make if statements a bit simpler
        const searchTag = this.state.searchTag.toLowerCase()
        return (
            <section id="projects" className="cardContainer">
                {/* search bar updates searchTag state to filter project array */}
                <input className="searchTags" name="searchTag" type="text" placeholder="Search" value={this.state.searchTag} onChange={this.handleChange}/>

                {/* filters array to what matches searchTag in props */}
                {projectData.filter((project) => {
                    if (searchTag == "") {
                        return project
                    }
                    if (project.name && project.name.toLowerCase().includes(searchTag)) {
                        return project
                    }
                    if (project.description && project.description.toLowerCase().includes(searchTag)) {
                        return project
                    }
                    if (project.techStack && project.techStack.toString().toLowerCase().includes(searchTag)) {
                        return project
                    }
                }   
                )
                // maps each object in the filtered project array to make project cards with conditional rendering for all fields
                .map((project, index) => (
                        <div key={index} className="card">
                            {project.name && <h2 className="projectName">{project.name}</h2>}
                            {project.description && <p className="projectDesc">{project.description}</p>}
                            {project.techStack && project.techStack.map((project, index) => <button
                                key={index} 
                                onClick={this.handleChange} 
                                name="searchTag"
                                value={project} 
                                >{project}</button>)}
                            {project.hostedLink && <a className="hosted btn" href={project.hostedLink} rel="noreferrer" target="_blank">Hosted link</a>}
                            {project.githubLink && <a className="github btn" href={project.githubLink} rel="noreferrer" target="_blank">Github</a>}
                            
                        </div>
                ))}
            </section>
        )
    }
}
export default ProjectCards