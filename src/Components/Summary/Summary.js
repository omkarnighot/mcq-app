import React from 'react';
import {Link} from 'react-router-dom'
import './Summary.css'


class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr : this.props.location.state[0],
      que : this.props.location.state[1],
    }


  }
  render(){
    const unansweredQue = this.state.que.filter((que)=>{
      if(!this.state.arr.includes(que.id))
        return que.id;
    })
    let unansweredQueEle = unansweredQue.map((ele)=>{
      return (<>Q.{ele.id} , </>)
    })
    return(
      <div className="form-container">
        <h1>Summary</h1>
        <div className="answered-que-section">
            <h3>Answered Questions : </h3>{this.props.location.state[0].map((ele)=>(<>Q.{ele} , </>))}
        </div>
        <div className="unanswered-que-section">
            <h3>Unanswered Questions : </h3>{unansweredQueEle}
        </div>
        <h3>Are you sure about submission?</h3>
        <div className="controls">
          <Link to='/submit'><button className="yes">Yes</button></Link>
          <Link to='/mcq'><button className="no">No</button></Link>
        </div>
      </div>
    )
  }
}

export default Summary;
