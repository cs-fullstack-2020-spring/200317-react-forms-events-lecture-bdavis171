import React, { Component, Fragment } from 'react';
import '../App.css';

class StudentForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:'',
            grade: 0,
            studentList: []
         }
    }

    //handle field changes
    handleChanges = (event) => {
        if (event.target.name === 'name') {
            this.setState({name: event.target.value});
        }
        else if (event.target.name === 'grade') {
            this.setState({grade: event.target.value});
        }
    }

    //handle submission
    handleSubmission = (event) => {
        event.preventDefault();
        let student = {name: this.state.name,grade: this.state.grade};
        this.state.studentList.push(student);
        this.setState({studentList: this.state.studentList});
        this.props.updateStudentList(this.state.studentList);
        this.setState({
            name:'',
            grade: 0
        })
    }

    render() { 
        return ( 
            <Fragment>
                <form action="">
                    <fieldset>
                        <legend>Student Form</legend>

                        <div className="formGroup">
                            <label htmlFor="name">Name:</label>
                            <input type="text" name='name' id='name' onChange={this.handleChanges} value={this.state.name}/>
                        </div>

                        <div className="formGroup">
                            <label htmlFor="grade">Grade:</label>
                            <input type="number" name='grade' id='grade' onChange={this.handleChanges} value={this.state.grade}/>
                        </div>

                        <div className="formGroup">
                            <button onClick={this.handleSubmission}>Submit</button>
                        </div>
                    </fieldset>
                </form>
            </Fragment>
         );
    }
}
 
export default StudentForm;