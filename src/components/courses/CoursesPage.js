import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/CourseActions";
import * as authorActions from "../../redux/actions/AuthorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "./CoursesList";

class CoursePage extends React.Component {
  componentDidMount() {
    const { courses, authors, actions } = this.props;
    if (this.props.courses.length === 0) {
      this.props.actions
        .loadCourses()
        .catch(err => alert("erreor loading courses failed + " + err));
    }
    if (this.props.authors.length === 0) {
      this.props.actions
        .laodAuthors()
        .catch(err => alert("erreor loading authors failed + " + err));
    }
  }
  render() {
    return (
      <>
        <h2>Courses</h2>
        {/* todo: replace CourseList with bootstrap table */}
        <CourseList courses={this.props.courses}> </CourseList>
      </>
    );
  }
}

CoursePage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired,
  auhtors: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map(course => {
            return {
              ...course,
              authorName: state.authors.find(a => a.id === course.authorId).name
            };
          }),
    authors: state.authors
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      laodAuthors: bindActionCreators(authorActions.laodAuthors, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
