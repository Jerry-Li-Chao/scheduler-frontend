import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
import "./Card.css";

export default class Posts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    document.title = "Favorited Page";
    fetch(
      "https://jerryli-scheduler-api.herokuapp.com/api/posts"
    )
      .then((response) => {
        // response is a promise
        return response.json();
      })
      .then((json) => {
        console.log(json);
        this.setState({ posts: json });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
        <h2>Favorited Tasks</h2>
        {this.state.posts.map((post) => {
            if(post.favorited === false) {
                return;
            }
            let initColor;
            if(post.priority === "l"){
                initColor = "lightyellow"
            }
            else if(post.priority === "m"){
                initColor = "coral"
            }
            else if(post.priority === "h") {
                initColor = "crimson"
            }
            let ddl = post.deadline;
            ddl = ddl.substring(0, 10) + " " + ddl.substring(11, 16);
            if(ddl.substring(11,13) < 12) { ddl += " AM"}
            else {ddl += " PM"}
            
            return (
                <Card
                    key={post.id}
                    title={post.taskname}
                    onClick={(appendedTitle, updatedColor) => {
                        this.setState({ title: appendedTitle, displayColor: updatedColor });
                    }}
                    emptyColor="lightyellow"
                    selectedColor="lightgreen"
                    renderCard={(onClick) => {
                        return (
                            <Link to={`/posts/${post.id}`}>
                                <button
                                    data-inline="true"
                                    type="button"
                                    className="card btn"
                                    style={{
                                    width: "18rem",
                                    backgroundColor: initColor
                                    }}
                                    onClick={onClick}
                                >
                                    <div className="card-body">
                                    <h5 className="card-title">{post.taskname}</h5>
                                    <p className="card-text">
                                        {post.description}
                                    </p>
                                    <p className="card-text">
                                        DDL: {ddl}
                                    </p>
                                    </div>
                                </button>
                            </Link>
                        );
                    }}
                    ></Card>
                );
                }
            )}
        </div>
      </div>
    );
  }
}
