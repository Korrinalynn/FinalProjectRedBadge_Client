import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

class QuestionEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            question: ''
        };
    }

    componentWillMount() {
        this.setState({
            question: this.props.question
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.update(event, this.state)
    }

    render() {
        return (
            <div>
                <Modal isOpen={true} >
                    <ModalHeader >Ask a Question</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit} >
                            <FormGroup>
                                <Label for="question">Notes</Label>
                                <Input id="question" type="text" name="question" value={this.state.question} placeholder="Ask a question" onChange={this.handleChange} />
                            </FormGroup>
                            <Button type="submit" color="primary"> Submit </Button>
                        </Form>
                    </ModalBody>

                </Modal>

            </div>
        )
    }
}

export default QuestionEdit;