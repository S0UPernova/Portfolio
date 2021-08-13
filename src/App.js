import './stylesheets/main.scss';

import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import MainContent from "./components/MainContent"
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            page: "about"
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick(event) {
        this.setState({
            [event.target.name]: [event.target.value]
            
        })
      }
    render() {
        return (
            <>
                {/* changes this state base on which button you click */}
                <Header handleClick={this.handleClick} page={this.state.page} />
                
                {/* displays the page corresponding to that button */}
                <MainContent page={this.state.page} />
                <Footer />
            </>
        )
    }
}
export default App
