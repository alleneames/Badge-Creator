import React from "react";

class BadgeForm extends React.Component {
    render() {
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className=" first-name col-sm-4 col-sm-offset-2" >
                            <input type="text" onChange={(event)=> {
                                this.props.handleInput("firstname", event);
                            }} value={this.props.person.firstname} placeholder="First name" />
                        </div>
                        <div className="last-name col-sm-4">
                            <input type="text" onChange={(event)=>{
                                this.props.handleInput("lastname", event);
                            }} value={this.props.person.lastname} placeholder="Last name" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="email col-sm-4 col-sm-offset-2">
                            <input onChange={(event)=>{
                                this.props.handleInput("email", event);
                            }} value={this.props.person.email} placeholder="email" />
                        </div>
                        <div className="place-of-birth col-sm-4">
                            <input onChange={(event)=>{
                                this.props.handleInput("placeofbirth", event);
                            }} value={this.props.person.placeofbirth} placeholder="Place of birth" />                        
                        </div>
                    </div>
                    <div className="row">
                        <div className="phone col-sm-4 col-sm-offset-2">
                            <input onChange={(event)=>{
                                this.props.handleInput("phone", event);
                            }} value={this.props.person.phone} placeholder="Phone" />
                        </div>
                        <div className="favorite-food col-sm-4">
                            <input onChange={(event)=>{
                                this.props.handleInput("favoritefood", event);
                            }} value={this.props.person.favoritefood} placeholder="Favorite food" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <button onClick={()=>{
                                this.props.handleSubmit()
                            }} className="submit-button">Submit</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default BadgeForm;