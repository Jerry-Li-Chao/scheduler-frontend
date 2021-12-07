import React from "react";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.css"
import "./CreatePostForm.css";

export default class CreatePostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      taskname: "",
      description: "",
      deadline: "",
      priority: "",
      nameError: "",
      descriptionError: "",
      deadlineError: "",
      priorityError: ""
    };
  }

  componentDidMount() {
    document.title = "Create a Task Page";
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

  validate = () => {
    
    let nameError =  "";
    let descriptionError = "";
    let deadlineError = "";
    let priorityError = "";

    if(this.state.taskname === "") {
      nameError = "Taskname cannot be empty";
    } else {
      nameError = "";
    }

    if(this.state.description === "") {
      descriptionError = "description cannot be empty";
    } else {
      descriptionError = "";
    }

    if(this.state.deadline === "") {
      deadlineError = "deadline cannot be empty";
    } else {
      deadlineError = "";
    }

    if(this.state.priority === "") {
      priorityError = "select a priority";
    } else {
      priorityError = "";
    }

    if(nameError || descriptionError || deadlineError || priorityError) {
      this.setState({nameError});
      this.setState({descriptionError});
      this.setState({deadlineError});
      this.setState({priorityError});
      return false;
    }
    return true;
  }

  handleSubmit(event) {
    event.preventDefault();
    
    const isValid = this.validate();
    // console.log(isValid);
    // console.log(this.state);

    if(isValid) {

      fetch("https://jerryli-scheduler-api.herokuapp.com/api/posts", {
        method: "POST",
        body: JSON.stringify({
          "taskname": this.state.taskname,
          "description": this.state.description,
          "deadline": this.state.deadline,
          "favorited": "false",
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
          toast.success(`Task "${this.state.taskname}" was successfully created`);
          // React gave us the history prop when we passed
          // CreatePostForm in component={..}
          // push("/"): change the current url to "/", weird function name though
          this.props.history.push("/");
        });
    }
  }

  render() {
    return (
      <form
        className="needs-validation"
        onSubmit={(event) => {
          this.handleSubmit(event);
        }}
        noValidate
      >
        <div className="my-3">
          <label htmlFor="title" className="form-label">
            Taskname
          </label>
          <input
            id="title"
            className="form-control"
            value={this.state.taskname || ""}
            onChange={(event) => {
              this.handleTitleChange(event);
            }}
            required
          />
          {this.state.nameError ? 
          (<div className="error">Taskname cannot be empty</div>) : 
          (null)}
          
          
          </div>

          <div className="my-3">
            <label htmlFor="body" className="form-label">
              Description
            </label>
            <textarea
              id="body"
              className="form-control"
              value={this.state.description || ""}
              onChange={(event) => {
                this.handleBodyChange(event);
              }}
              required
            ></textarea>
            {this.state.descriptionError ? 
            (<div className="error">Description cannot be empty</div>) : 
            (null)}

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
              required
            />
            {this.state.deadlineError ? 
            (<div className="error">Deadline cannot be empty</div>) : 
            (null)}
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
              required
            >
              <option>--Select Priority--</option>
              <option value="l">Low</option>
              <option value="m">Medium</option>
              <option value="h">High</option>
            </select>
            {this.state.priorityError ? 
            (<div className="error">A priority needs to be selected</div>) : 
            (null)}

          </div>

          <button type="submit" className="btn btn-primary">
            Create Task
          </button>
        
      </form>
    );
  }
}
