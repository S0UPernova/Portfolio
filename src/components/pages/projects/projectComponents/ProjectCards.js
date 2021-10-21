import React from "react"
import projectData from "./projectData.json"
import { motion } from 'framer-motion'

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
    let motionTransition = { type: "spring", stiffness: 75 }
    // creating a variable to make if statements a bit simpler
    const searchTag = this.state.searchTag.toLowerCase()

    const search = (searchWith, searchForProperties) => {
      let search = true
      searchWith && searchWith.split(' ').forEach(word =>
        searchForProperties && searchForProperties.forEach(searchForProperty =>
          searchForProperty !== null && !searchForProperty.toLowerCase().includes(word.toLowerCase()) ? search = false : null)
      )
      if (search === true) {
        return true
      } else return false
    }

    return (
      <section id="projects" className="cardContainer">
        {/* search bar updates searchTag state to filter project array */}
        <input className="searchTags" name="searchTag" type="text" placeholder="Search" value={this.state.searchTag} onChange={this.handleChange} />

        {/* filters project array with searchbar input to update displayed projects */}
        {/* refactored this to have function outside of the return */}
        {projectData.filter((project) => search(searchTag, [`${project.name}${project.description}${project.techStack}`]))
          // maps each object in the filtered project array to make project cards with conditional rendering for all fields
          .map((project, index) => (
            <motion.div key={index}
              layout
              transition={motionTransition}
              className="card">

              {project.name && <motion.h2
                layout
                transition={motionTransition}
                className="projectName">{project.name}
              </motion.h2>}

              {project.description && <motion.p
                layout
                transition={motionTransition}
                className="projectDesc">{project.description}
              </motion.p>}

              {project.techStack && project.techStack.map((project, index) => <motion.button
                key={index}
                onClick={this.handleChange}
                name="searchTag"
                value={project}
                layout
                transition={motionTransition}
              >{project}</motion.button>)}

              {project.hostedLink && <motion.a
                layout
                transition={motionTransition}
                className="hosted btn"
                href={project.hostedLink}
                rel="noreferrer"
                target="_blank">Hosted link
              </motion.a>}

              {project.githubLink && <motion.a
                layout
                transition={motionTransition}
                className="github btn"
                href={project.githubLink}
                rel="noreferrer"
                target="_blank">Github
              </motion.a>}
              
            </motion.div>
          ))}
      </section>
    )
  }
}
export default ProjectCards