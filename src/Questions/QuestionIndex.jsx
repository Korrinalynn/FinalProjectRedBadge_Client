//This is where all of your other Question Components are gonna be (QuestionsCreate, QuestionEdit, QuestionTable)
//Put fetchAll Questions in here
import React from 'react';
import QuestionCreate from './QuestionCreate';
import QuestionTable from './QuestionTable';
import QuestionEdit from './QuestionEdit';
import { Container, Row, Col } from 'reactstrap';

class QuestionIndex extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      questions: [],
      updatePressed: false,
      questionToUpdate: {}
    }
  }

  componentWillMount() {
    this.fetchQuestions()
  }

  fetchQuestions = () => {
    fetch("http://localhost:3000/questions/get", {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.sessionToken
      })
    })
      .then((res) => res.json())
      .then((questionData) => {
        return this.setState({ questions: questionData })
      })
  }

  questionUpdate = (e, question) => {
    fetch(`http://localhost:3000/questions/${question.id}`, {
      method: 'PUT',
      body: JSON.stringify({ log: question }),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.sessionToken
      })
    })
    .then((res) => {
      this.setState({ updatePressed: false })
      this.fetchQuestions();
    })
  }

  setUpdatedQuestion = (e, question) => {
    this.setState({
        questionToUpdate: question,
        updatePressed: true
    })
}

  questionDelete = (e) => {
    fetch(`http://localhost:3000/questions/${e.target.id}`, {
      method: 'DELETE',
      body: JSON.stringify({ log: { id: e.target.id } }),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.sessionToken
      })
    })
    .then((res) => this.fetchQuestions())
  }

  render() {
    const questions = this.state.questions.length >= 1 ?
      <QuestionTable questions={this.state.questions} delete={this.questionDelete} update={this.setUpdatedQuestion} /> :
      <h2>Ask a question to see table</h2>
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
        <Col md="12">  
          {
            this.state.updatePressed ? <QuestionEdit t={this.state.updatePressed} update={this.questionUpdate} question={this.state.questionToUpdate} />
            : <div></div>
          }
        </Col>
      </Container>
    )
  }
}

export default QuestionIndex;