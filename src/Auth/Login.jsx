import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class Login extends Component {
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
        fetch("http://localhost:3000/character/login", {
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

    render() {
        return (
            <div>
                <h1>Login</h1>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellat, atque nulla, soluta vero reprehenderit numquam incidunt, rem quaerat quos voluptatum perferendis. Distinctio culpa iste atque blanditiis placeat qui ipsa?</h6>
                <Form>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input id="li_email" type="text" name="email" placeholder="enter email" onChange={this.handleSubmit}/>
                        {this.state.errorMessage && <span className="error">E-mail is required</span>}
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="li_password" type="password" name="password" placeholder="enter password" onChange={this.handleSubmit}/>
                        {this.state.errorMessage && <span className="error">Password is required</span>}
                    </FormGroup>
                    <Button type="submit"> Login </Button>
                </Form>
            </div>
        )
    }
}

export default Login;
