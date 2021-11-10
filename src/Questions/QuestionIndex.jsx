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
    fetch("http://localhost:3000/questions", {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.token
      })
    })
      .then((res) => res.json())
      .then((questionData) => {
        return this.setState({ questions: questionData })
      })
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md="3">
            <QuestionCreate token={this.props.token} updateQuestionsArray={this.fetchQuestions}/>
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