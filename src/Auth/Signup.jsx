import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import {AuthContext} from '../Auth/AuthContext';

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit = (e) => {
        fetch("http://localhost:3000/character", {
            method: 'POST',
            body: JSON.stringify({character:this.state}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            this.props.auth.setToken(data.sessionToken)
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
                        <Label for="email">email</Label>
                        <Input id="email" type="text" name="email" placeholder="enter email" onChange={this.handleChange} />
                        {this.state.errorMessage && <span className="error">email is required</span>}
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="su_password" type="password" name="password" placeholder="enter password" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit"> Submit </Button>
                </Form>
            </div>
        )
    }
}

export default props => (
    <AuthContext.Consumer>
      {auth => <Signup {...props} auth={auth} />}
    </AuthContext.Consumer>
);
