import React from "react";

class CoursePage extends React.Component {
  state = {
    course: {
      title: ""
    }
  };

  handlechange = event => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({
      course
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    alert(this.state.course.title);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add course</h3>
        <input
          type="text"
          onChange={this.handlechange}
          value={this.state.course.title}
        ></input>
        <input type="submit" value="Save"></input>
      </form>
    );
  }
}

export default CoursePage;
