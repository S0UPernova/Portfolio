import React from "react"
class Header extends React.Component {
    
    
    render() {
        const page = this.props.page
        return (
            <>

            {/* not sure if I like the look of this section */}
                <header>
                        <>
                            <h1>Hello, and welcome to my website.</h1>
                        </>
                </header>

                {/* 
                    uses parent handleClick to change parent state and uses that to conditionally apply styles,
                    which page is active, by underlining the corresponding button,
                    also MainContent uses the parent state to display the desired page
                */}
                <nav>
                    <ul>

                        <li>
                            <button 
                                onClick={ this.props.handleClick} 
                                name="page" 
                                value="about" 
                                id="about" 
                                className={(page == "about" ? "btn underlined" : "btn")}
                                >About
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={ this.props.handleClick} 
                                name="page" 
                                value="projects" 
                                id="projects" 
                                className={(page == "projects" ? "btn underlined" : "btn")}
                                >Projects
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={ this.props.handleClick} 
                                name="page" 
                                value="contact" 
                                id="contact" 
                                className={(page == "contact" ? "btn underlined" : "btn")}
                                >Contact
                            </button>
                        </li>
                    </ul>
                </nav>
            </>
        )
    }
}
export default Header