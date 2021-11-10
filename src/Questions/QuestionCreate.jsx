import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class QuestionCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            question: '',
            characterId: ''
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3000/api/question/`, {
            method: 'POST',
            body: JSON.stringify({ question: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
        .then((res) => res.json())
        .then((questionData) => {
            this.props.updateQuestionsArray();
            this.setState({
                question: '',
                characterId: ''
            })
        })
    }

    render() {
        return (
            <div>
                <h3>Ask a Question</h3>
                <hr />
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label for="question"/>
                        <Input id="question" type="text" name="question" value={this.state.question} placeholder="Ask away" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit" color="primary">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default QuestionCreate;