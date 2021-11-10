//This is where all of your other Question Components are gonna be (QuestionsCreate, QuestionEdit, QuestionTable)
//Put fetchAll Questions in here
import React from 'react';
import QuestionCreate from './QuestionCreate';
import { Container, Row, Col } from 'reactstrap';

class QuestionIndex extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      questions: []
    }
  }

  componentWillMount() {
    this.fetchQuestions()
  }

  fetchQuestions = () => {
    fetch("http://localhost:3000/api/log", {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.token
      })
    })
      .then((res) => res.json())
      .then((logData) => {
        return this.setState({ questions: logData })
      })
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md="3">
            {/* the create component will go here*/}
          </Col>
          <Col md="9">
            <h2>Ask a question</h2>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default QuestionIndex;