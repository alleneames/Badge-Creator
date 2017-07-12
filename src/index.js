import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

//import container
import BadgeContainer from "./containers/badge-list-logic.js";

class App extends React.Component {
    render() {
        return (
            <view>
                <BadgeContainer />
            </view>

        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));