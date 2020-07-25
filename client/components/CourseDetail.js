import React, {Component, Fragment} from 'react';
import {NavLink} from 'react-router-dom'

class CourseDetails extends Component {
    render() {
        return(
            <Fragment>
                <div className="actions--bar">
                    <div className="bounds">
                        <div className="grid-100">
                            <span>
                                <NavLink className="button" to="">Update Course</NavLink>
                                <NavLink className="button" to="">Delete Course</NavLink>
                            </span>
                            <NavLink className="button button-secondary" to="/courses">Return to the List</NavLink>
                        </div>
                    </div>
                    <div className="bounds course--detail">
                        <div className="grid-66">
                            <div className="course--header">
                                <h4 className="course--label">Course</h4>
                                <h3 className="course--title">course title</h3>
                                <p>Author name</p>
                            </div>
                        </div>
                        <div class="course--description">
                            <p>Loop through pargraphs</p>
                        </div>
                        <div class="grid-25 grid-right">
                            <div class="course--stats">
                                <ul className="course--stats--list">
                                    <li className="course--stats--list--item">
                                        <h4>Estimated Time</h4>
                                        <h3>Hourse</h3>
                                    </li>
                                    <li className="course--stats--list--item">
                                        <h4>Materials Needed</h4>
                                        <ul>
                                         //loop through Materials
                                            <li></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                    </div>
                    </div>
                </div>
            </Fragment>
        );
    }

} 
export default CourseDetails;