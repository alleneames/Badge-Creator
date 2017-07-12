import React from "react";

class BadgeOutput extends React.Component {
    render() {
        return(
            <div>
                <h3>Name: {this.props.person.firstname} {this.props.person.lastname}</h3>
                <h3>Phone: {this.props.person.phone}</h3>
                <h3>Place of birth: {this.props.person.placeofbirth}</h3>
                <h3>Favorite Food: {this.props.person.favoritefood} </h3>
                <h3>email: {this.props.person.email}</h3>
            </div>

        )
    }
}

export default BadgeOutput; 