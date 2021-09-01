import React from "react"
import About from "./pages/about/About.js"
import ProjectsPage from "./pages/projects/ProjectsPage.js"
import Contact from "./pages/contact/Contact.js"
class MainContent extends React.Component {
    render() {
        // using app state to set the current page
        const page = this.props.page.toString()
        return (
            <>
                {page === "about" && <About />}
                {page === "projects" && <ProjectsPage />}
                {page === "contact" && <Contact />}
            </>
        )

    }
}
export default MainContent