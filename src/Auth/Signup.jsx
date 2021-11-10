import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

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
        fetch("http://localhost:3000/api/character", {
            method: 'POST',
            body: JSON.stringify({user:this.state}),
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

    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellat, atque nulla, soluta vero reprehenderit numquam incidunt, rem quaerat quos voluptatum perferendis. Distinctio culpa iste atque blanditiis placeat qui ipsa?</h6>
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input id="email" type="text" name="email" placeholder="enter email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="su_password" type="password" name="password" placeholder="enter password" />
                    </FormGroup>
                    <Button type="submit"> Sign up </Button>
                </Form>
            </div>
        )
    }
}

export default Signup;