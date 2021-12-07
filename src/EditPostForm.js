import React from "react";
import { toast } from "react-toastify";

export default class EditPostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      taskname: "",
      description: "",
      deadline: "",
      favorited: false,
      priority: "",
      finished: false
    };
  }

  handleTitleChange(event) {
    this.setState({ taskname: event.target.value });
  }

  handleBodyChange(event) {
    this.setState({ description: event.target.value });
  }

  handlePriorityChange(event) {
    this.setState({ priority: event.target.value });
  }

  handleDDLChange(event) {
    this.setState( { deadline: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const id = this.props.match.params.postId;

    fetch(`https://jerryli-scheduler-api.herokuapp.com/api/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        "taskname": this.state.taskname,
        "description": this.state.description,
        "deadline": this.state.deadline,
        "favorited": this.state.favorited,
        "priority": this.state.priority
      }),
      headers: {
        "Content-type": "application/json"
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        toast.success(`Task "${json.taskname}" was successfully updated`);
        this.props.history.push("/");
      });
  }

  componentDidMount() {
    const id = this.props.match.params.postId;
    fetch(`https://jerryli-scheduler-api.herokuapp.com/api/posts/${id}`)
      .then((response) => {
        // response is a promise
        return response.json();
      })
      .then((json) => {
        console.log(json);
        // this state now have three attributes from json
        this.setState(json);
      });
  }

  render() {
    return (
      <form
        onSubmit={(event) => {
          this.handleSubmit(event);
        }}
      >
        <div className="my-3">
          <label htmlFor="taskname" className="form-label">
            Taskname
          </label>
          <input
            id="taskname"
            className="form-control"
            value={this.state.taskname}
            onChange={(event) => {
              this.handleTitleChange(event);
            }}
          />
          <div className="my-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              id="description"
              className="form-control"
              value={this.state.description}
              onChange={(event) => {
                this.handleBodyChange(event);
              }}
            ></textarea>
          </div>
          <div className="my-3">
            <label htmlFor="ddl" className="form-label">
              Deadline
            </label>
            <input
              id="ddl"
              type="datetime-local"
              className="form-select"
              value={this.state.deadline}
              onChange={(event) => {
                this.handleDDLChange(event);
              }}
            />
          </div>

          <div className="my-3">
            <label htmlFor="priority" className="form-label">
              Priority
            </label>
            <select
              id="priority"
              className="form-select"
              value={this.state.priority}
              onChange={(event) => {
                this.handlePriorityChange(event);
              }}
            >
              <option>--Select Priority--</option>
              <option value="l">Low</option>
              <option value="m">Medium</option>
              <option value="h">High</option>
            </select>
          </div>


          <button type="submit" className="btn btn-primary">
            Edit Task
          </button>
        </div>
      </form>
    );
  }
}
