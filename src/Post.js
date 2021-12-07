import React, {useEffect} from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "./Post.css";

export default class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {}
    };
  }

  componentDidMount() {
    const id = this.props.match.params.postId;
    fetch(`https://jerryli-scheduler-api.herokuapp.com/api/posts/${id}`)
      .then((response) => {
        // response is a promise
        return response.json();
      })
      .then((json) => {
        this.setState({ post: json });
      });
  }

  deletePost() {
    const isDeleteConfirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!isDeleteConfirmed) {
      return;
    }

    const url = `https://jerryli-scheduler-api.herokuapp.com/api/posts/${this.state.post.id}`;
    fetch(url, {
      method: "DELETE"
    }).then(() => {
      toast.success(`Post "${this.state.post.taskname}" was deleted`);
      this.props.history.push("/");
    });
  }

  removeFavorited() {
    fetch(`https://jerryli-scheduler-api.herokuapp.com/api/posts/${this.state.post.id}`, {
        method: "PUT",
        body: JSON.stringify({
            "taskname": this.state.post.taskname,
            "description": this.state.post.description,
            "deadline": this.state.post.deadline,
            "favorited": false,
            "priority": this.state.post.priority
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
          toast.success(`Task "${json.taskname}" was removed from Favorited List`);
          this.props.history.push("/");
        });
  }

  addToFavorited() {
    fetch(`https://jerryli-scheduler-api.herokuapp.com/api/posts/${this.state.post.id}`, {
        method: "PUT",
        body: JSON.stringify({
            "taskname": this.state.post.taskname,
            "description": this.state.post.description,
            "deadline": this.state.post.deadline,
            "favorited": true,
            "priority": this.state.post.priority
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
          toast.success(`Task "${json.taskname}" was added to Favorited List`);
          this.props.history.push("/");
        });
  }

  render() {
    // console.log(this.state.post.taskname);
    document.title = `${this.state.post.taskname} Task Page`
    return (
      <>
        <h1>{this.state.post.taskname}</h1>
        <p>{this.state.post.description}</p>
        <div className="btn-group">
          <Link
            to={`/posts/${this.state.post.id}/edit`}
          >
            <button className="btn btn-primary">Edit</button>
          </Link>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              this.deletePost();
            }}
          >
            Delete
          </button>
            
          {!this.state.post.favorited ? (
          <button type="button" className="btn btn-success" onClick={() => {
            this.addToFavorited();
          }}>
            Add to favorited List
          </button>) : (
            <button type="button" className="btn btn-warning" onClick={() => {
                this.removeFavorited();
              }}>
                Remove from favorited List
            </button>
          )}
          
          
        </div>
      </>
    );
  }
}
