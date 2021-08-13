import React from "react"
import ProjectCards from "./projectComponents/ProjectCards"

class ProjectsPage extends React.Component {
    render() {
        return (
            <>
                {/* would like to add a showcase section at the start of the page */}

                {/* project cards with searchbar */}
                <ProjectCards />
            </>
        )
    }
}
export default ProjectsPage