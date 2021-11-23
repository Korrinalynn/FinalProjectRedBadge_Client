import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            characterName: '',
            level: 0,
            bio: '',
            isAdmin: ''
        };
    }

    // handleChange = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.value,
    //     });
    // }

    handleSubmit = (e) => {
        console.log(typeof this.state.level)
        e.preventDefault();
        fetch("http://localhost:3000/character/register", {
            method: 'POST',
            body: JSON.stringify({
                character: {
                    email: this.state.email,
                    password: this.state.password,
                    characterName: this.state.characterName,
                    level: this.state.level,
                    bio: this.state.bio,
                    isAdmin: this.state.isAdmin
                }
                }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then( response => response.json())
        .then(data => {
            console.log(data);
            console.log(data.sessionToken, "this is coming from line 43");
            this.props.setToken(data.sessionToken)
        })
    }

    levelChange = (e) => {
        this.setState({
            level: parseInt(e.target.value)
        })
        console.log(typeof this.state.level)
    }

    // validateSignUp = (event) => {
    //     this.setState({
    //         errorMessage:'Fields must not be empty'
    //     })
    //     event.preventDefault();
    // }

    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellat, atque nulla, soluta vero reprehenderit numquam incidunt, rem quaerat quos voluptatum perferendis. Distinctio culpa iste atque blanditiis placeat qui ipsa?</h6>
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label for="email">E-mail</Label>
                        <Input id="email" type="email" name="email" placeholder="enter email" onChange={(e) => this.setState({email: e.target.value})} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="su_password" type="password" name="password" placeholder="enter password" onChange={(e) => this.setState({password: e.target.value})} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="characterName">Character Name</Label>
                        <Input id="su_characterName" type="text" name="characterName" placeholder="enter character name" onChange={(e) => this.setState({characterName: e.target.value})} />
                    </FormGroup>
                    <input name="level" onChange={(e) => this.levelChange(e)}/>
                    {/* <FormGroup>
                        <Label for="level">Level</Label>
                        <Input id="su_level" name="level" onChange={(e) => this.levelChange(e)} />      
                    </FormGroup> */}
                    <FormGroup>
                        <Label for="bio">Bio</Label>
                        <Input id="su_bio" type="bio" name="bio" placeholder="enter bio" onChange={(e) => this.setState({bio: e.target.value})} />
                    </FormGroup>
                    <Button type="submit"> Submit </Button>
                </Form>
            </div>
        )
    }
}

export default Signup;
