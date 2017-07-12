import React from "react";

class BadgeOutput extends React.Component {
    render() {
        return(
            <div>
                <h3>Name: {this.props.person.firstname} {this.props.person.lastname} </h3>
                <h3>phone: {this.props.person.phone}</h3>
                <h3>email: {this.props.person.email}</h3>
            </div>

        )
    }
}

export default BadgeOutput; 