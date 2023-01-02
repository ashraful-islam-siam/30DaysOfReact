import { Component } from "react";

class TechList extends Component {
    render() {
        const techs = ["HTML", "CSS", "Javascript"];
        const techsFormatted = techs.map(tech => <li key={tech}>{tech}</li> )
        return techsFormatted
    }
}

class TechListMain extends Component {
    render() {
        return (
            <div className="main-wrapper">
                <p>Prerequisite to get started react.js</p>
                <ul>
                    <TechList />
                </ul>
            </div>
        )
    }
}

export default TechListMain;