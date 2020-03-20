import React, { Component, Fragment } from 'react';

class Review extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                <h3>Click the button below, please.</h3>
                <button onClick={this.props.updateClickNum}>Click Me!</button>
            </Fragment>
         );
    }
}
 
export default Review;