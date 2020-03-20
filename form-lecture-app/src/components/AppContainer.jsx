import React, { Component, Fragment } from 'react';
import Review from './Review';
import StudentForm from './StudentForm';
import '../App.css';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            clickNum: 0,
            studentList: []
         }
    }

    //update number of clicks
    updateClickNum = (event) => {
        event.preventDefault();
        let newNum = this.state.clickNum + 1;
        this.setState({clickNum: newNum});
    }

    //update student list
    updateStudentList = (newList) => {
        this.setState({studentList: newList});
    }

    render() { 
        return ( 
            <Fragment>
                <h1>03 17 2020</h1>
                <h2>The button has been clicked {this.state.clickNum} times</h2>
                <Review updateClickNum={this.updateClickNum}/>
                <hr/>
                <div className="container">
                    <div className="student-form">
                        <StudentForm updateStudentList={this.updateStudentList}/>
                    </div>

                    <div className="student-list">
                        <h3>List of Students</h3>
                    {this.state.studentList.map(
                        (student,inx) => {
                            return(
                                <div key={inx}>
                                    <p>Name: {student.name}</p>
                                    <p>Average Grade: {student.grade}</p>
                                </div>
                            )
                        }
                    )}
                    </div>
                </div>
            </Fragment>
         );
    }
}
 
export default AppContainer;