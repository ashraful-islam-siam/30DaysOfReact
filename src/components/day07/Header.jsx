import { Component } from "react";

class Header extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { welcome, title, subtitle, author: { firstName, lastName}, date } = this.props.data
        return (
            <header>
                <div className="header-wrapper">
                    <h1>{this.props.data.welcome}</h1>
                    <h2>{this.props.data.title}</h2>
                    <h3>
                    {this.props.data.subtitle}
                    </h3>
                    <p>{this.props.data.author.firstName} {this.props.data.author.lastName}</p>
                    <small>Oct 6, {this.props.data.date}</small>
                </div>
            </header>
        )
    }
}

export default Header;