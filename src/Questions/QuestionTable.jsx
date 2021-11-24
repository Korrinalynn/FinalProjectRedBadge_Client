//Tables and delete are gonna go.
//Answers is gonna go in here. It is the child. This will be the parent.
import React from 'react';
import { Table, Button } from 'reactstrap';


const QuestionTable = (props) => {

    return (
        <div>
            <h3>Question History</h3>
            <hr />
            <Table striped>
                <thead>
                    <tr>
                        <th>question</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.questions.map((question, id) => {
                            return (
                                <tr key={id}>
                                    <th scope="row">{question.id}</th>
                                    <td>{question.question}</td>
                                    <td>
                                        <Button id={question.id} onClick={props.delete} color="danger">Delete</Button>|
                                        <Button id={question.id} onClick={e => props.update(e, question)} color="warning">Edit</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default QuestionTable;