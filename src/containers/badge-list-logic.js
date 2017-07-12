import React from "react";
import autoBind from "react-autobind";

//import components
import BadgeListMap from "../components/badge-list-map.js";
import BadgeForm from "../components/badge-form.js";

class BadgeContainer extends React.Component {
    constructor() {
        super();
        this.state= {
            people: [],
            person: {
                firstname: "",
                lastname: "",
                email: "",
                phone: "",
                favoritefood: "",
                aboutyourself: ""
            }

        };
        autoBind(this);
    }
    handleInput(key, event) {
        let person = {
            ...this.state.person,
        };
        person[key] = event.target.value
        this.setState({
            ...this.state,
            person: person
        })
    }

    handleSubmit() {
        this.setState({
            ...this.state,
            people: [...this.state.people, this.state.person]
        })
    }
    render() {
        return(
            <div>
                <BadgeForm person={this.state.person} handleSubmit={this.handleSubmit} handleInput={this.handleInput} />
                <BadgeListMap people={this.state.people}  />
            </div>

        )
    }
}

export default BadgeContainer;