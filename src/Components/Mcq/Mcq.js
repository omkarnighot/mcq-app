import React from 'react';
import {Link} from 'react-router-dom'
import './Mcq.css';
class Mcq extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      answeredQue : [],
      currentQuestion : 0,
      questions : [
        {
          queText : "How are you?",
          id : 1 ,
          answer : ["Motivated"],
          options : [
            {ans : "Fine"},
            {ans : "Motivated"},
            {ans : "Great"},
            {ans : "Bored"},
          ]
        },
        {
          queText : "What are you up to?",
          id : 2 ,
          answer : ["Other","Finding a great opportunity!"],
          options : [
            {ans : "Finding a great opportunity!"},
            {ans : "Following passion"},
            {ans : "Enjoying Life"},
            {ans : "Other"},
          ]
        },
        {
          queText : "What is your skills set?",
          id : 3 ,
          answer : ["MERN Stack"],
          options : [
            {ans : "MERN Stack"},
            {ans : "MEAN Stack"},
            {ans : "Java Full Stack"},
            {ans : "Other"},
          ]
        },
        {
          queText : "How do you rate your skills on a scale of 10?",
          id : 4 ,
          answer : ["8-9"],
          options : [
            {ans : "8-9"},
            {ans : "5-6"},
            {ans : "7-8"},
            {ans : "7.5-8.5"},
          ]
        },
        {
          queText : "Which job locations do you prefer?",
          id : 5 ,
          answer : ["Remote"],
          options : [
            {ans : "Bangalore"},
            {ans : "Pune"},
            {ans : "Remote"},
            {ans : "Delhi"},
          ]
        },
      ]
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.submitAns = this.submitAns.bind(this);
    // this.submit = this.submit.bind(this);
  }

  submitAns(e,id,index){
    e.target.style['border'] = '1px solid limegreen';
    this.state.answeredQue[index]=id;
  }

  increment(){
    if(this.state.currentQuestion + 1< this.state.questions.length){
      this.setState((state)=> {return {currentQuestion : state.currentQuestion + 1}})
    }
  }

  decrement(){
    if(this.state.currentQuestion >= 1){
      this.setState({
        currentQuestion : this.state.currentQuestion - 1
      })
    }
  }

  render(){
    return (
      <>
      <div className="mcq-container">
        <div className="question">
            <div><p>Question {this.state.currentQuestion +1} of {this.state.questions.length}</p></div>
            <div><h3>{this.state.questions[this.state.currentQuestion].queText}</h3></div>
        </div>
        <div className="answer-container">

            {this.state.questions[this.state.currentQuestion].options.map((answerOption,index)=>{
              let id = this.state.questions[this.state.currentQuestion].id;

              if(this.state.questions[this.state.currentQuestion].answer.length > 1){
                  return (
                  <div className="answer-option">
                      <input key={index} onClick={(e)=>this.submitAns(e,id,this.state.currentQuestion)} type="checkbox" id={index} className="checkbox"></input>
                      <label>{answerOption.ans}</label>
                  </div>)
              }
              else {
                return ((
                  <button id={index} key={index} className="answer-option" onClick={(e)=>this.submitAns(e,id,this.state.currentQuestion)}>{answerOption.ans}</button>
                ))
              }
            })}

        </div>
        <div className="controls">
            <a onClick={this.decrement}>Previous</a>
            {this.state.currentQuestion+1 === this.state.questions.length ? (<Link to = {{pathname : "/summary" , state : [this.state.answeredQue,this.state.questions] }} >Submit</Link>):null}
            <a onClick={this.increment}>Next</a>
        </div>
      </div>
      </>
    )
  }
}

export default Mcq;
