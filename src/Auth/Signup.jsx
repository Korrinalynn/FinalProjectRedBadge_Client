import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            characterName: '',
            level: '',
            bio: ''
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit = (e) => {
        fetch("http://localhost:3000/character/register", {
            method: 'POST',
            body: JSON.stringify({character:this.state}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            this.props.setToken(data.sessionToken)
        }) 
        e.preventDefault()
    }

    validateSignUp = (event) => {
        this.setState({
            errorMessage:'Fields must not be empty'
        })
        event.preventDefault();
    }

    render() {
        const submitHandler = !this.state.email ? this.validateSignUp : this.handleSubmit
        return (
            <div>
                <h1>Sign Up</h1>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellat, atque nulla, soluta vero reprehenderit numquam incidunt, rem quaerat quos voluptatum perferendis. Distinctio culpa iste atque blanditiis placeat qui ipsa?</h6>
                <Form onSubmit={submitHandler} >
                    <FormGroup>
                        <Label for="email">E-mail</Label>
                        <Input id="email" type="text" name="email" placeholder="enter email" onChange={this.handleChange} />
                        {this.state.errorMessage && <span className="error">email is required</span>}
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="su_password" type="password" name="password" placeholder="enter password" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="characterName">Character Name</Label>
                        <Input id="su_characterName" type="characterName" name="characterName" placeholder="enter character name" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="level">Level</Label>
                        <Input id="su_level" type="level" name="level" placeholder="enter level" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="bio">Bio</Label>
                        <Input id="su_bio" type="bio" name="bio" placeholder="enter bio" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit"> Submit </Button>
                </Form>
            </div>
        )
    }
}

export default Signup;