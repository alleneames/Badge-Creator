import React from "react";

import BadgeOutput from "./badge-output.js"
class BadgeListMap extends React.Component {
    genBadge() {
        return this.props.people.map((person, index)=> {
            return(
                <BadgeOutput person={person} />
            )
        })
    }
    render() {
        return(
            <div>
                {this.genBadge()}
            </div>
        )
    }
}

export default BadgeListMap;