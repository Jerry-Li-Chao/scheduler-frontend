import { array } from "prop-types";
import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
import "./Card.css";

export default class Procrastinatometer extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          posts: [],
          dates: [],
          datesdesc: []
        };
      }

    componentDidMount() {
        document.title = "Procrastinatometer Page"

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
        let ddl;
        let date;
        this.state.posts.map((post) => {
            this.state.dates.push(post);
            this.state.datesdesc.push(post);
        })

        this.state.dates.sort(function(a, b) {
            return new Date(a.deadline) - new Date(b.deadline);
        })

        this.state.datesdesc.sort(function(a, b) {
            return new Date(b.deadline) - new Date(a.deadline);
        })

        console.log("printing content of dates: ");
        console.log(this.state.dates);
        console.log("printing content of datesdesc: ");
        console.log(this.state.datesdesc);

        return (
        <div>
            <h2>3 Closest Deadlines</h2>
            
            {this.state.dates.slice(0,3).map((post) => {
            
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

            <h2>You have a lot of time to do these things</h2>
            <p>You may want to break them into smaller tasks</p>
            
            {this.state.datesdesc.slice(0,3).map((post) => {
            
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
        </div>);
    }
}
