import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons"
import "bootstrap/dist/css/bootstrap.css"
import "./Card.css";
import Modal from "./Modal"

export default class Posts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      isModalOpen: false
    };
  }

  componentDidMount() {
      document.title = "Scheduler Page";
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

  toggleFinished(init_color, select_color, curPost) {
      // if selected, change finished state to true
    //   console.log(init_color, select_color);
    //   if(init_color === select_color) {
    //       console.log("set " + curPost.finished  + " finished to true");
    //     fetch(`https://jerryli-scheduler-api.herokuapp.com/api/posts/${curPost.id}`, {
    //     method: "PUT",
    //     body: JSON.stringify({
    //         "taskname": curPost.taskname,
    //         "description": curPost.description,
    //         "deadline": curPost.deadline,
    //         "favorited": curPost.favorited,
    //         "priority": curPost.priority,
    //         "finished": "true"
    //     }),
    //     headers: {
    //       "Content-type": "application/json"
    //     }
    //   })
    //     .then((response) => {
    //       return response.json();
    //     })
    //     .then((json) => {
    //       console.log(json);
    //     });
    //   }
    //   else {
    //     console.log("set " + curPost.finished  + " finished to false");
        
    //     fetch(`https://jerryli-scheduler-api.herokuapp.com/api/posts/${curPost.id}`, {
    //     method: "PUT",
    //     body: JSON.stringify({
    //         "taskname": curPost.taskname,
    //         "description": curPost.description,
    //         "deadline": curPost.deadline,
    //         "favorited": curPost.favorited,
    //         "priority": curPost.priority,
    //         "finished": "false"
    //     }),
    //     headers: {
    //       "Content-type": "application/json"
    //     }
    //   })
    //     .then((response) => {
    //       return response.json();
    //     })
    //     .then((json) => {
    //       console.log(json);
    //     });
    //   }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
        <button
          type="button"
          onClick={() => {
            this.setState({ isModalOpen: true });
          }}
        >
          Tips for using this scheduler
        </button>

        {this.state.isModalOpen && (
          <Modal
            title="Tips for using this scheduler"
            body={() => {
              return (<ol>
                  <li>"My Schedule" Tab provide you a view of your tasks 
                      filtered by the priority levels of the task</li>
                  <li>"Create a Task" Tab provide a form with form validation functionalities, and
                      the added task will appear in the "My Schedule" Tab
                  </li>
                  <li>Try clicking on one of the Tabs, you will have a clearer view of the task information. 
                      In there, you will be able to Edit, Delete, or Add to Favorite
                  </li>
                  <li>Procrastinatometer detects how many tasks have imminent deadlines 
                      and gives a simple summary report</li>
              </ol>);
            }}
            onClose={() => {
              this.setState({ isModalOpen: false });
            }}
          />
        )}

        <h2>High Priority Tasks</h2>
        {this.state.posts.map((post) => {
            if(post.priority !== "h") {
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
            
            if(post.finished === true) {
                console.log(post.taskname + " is finished");
                initColor = "lightgreen"
            }
            let ddl = post.deadline;
            ddl = ddl.substring(0, 10) + " " + ddl.substring(11, 16);
            if(ddl.substring(11,13) < 12) { ddl += " AM"}
            else {ddl += " PM"}
            
            return (
                <Card
                    key={post.id}
                    title={post.taskname}
                    onClick={(appendedTitle, updatedColor, select_color, curPost) => {
                        post.taskname = appendedTitle;
                        initColor = updatedColor;
                        this.toggleFinished(updatedColor, select_color, curPost);
                    }}
                    passingPost={post}
                    emptyColor={initColor}
                    selectedColor="lightgreen"
                    renderCard={(onClick) => {
                        return (<>
                                <button
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
                            <Link to={`/posts/${post.id}`}>
                                <button 
                                    type="button"
                                    className="btn btn-secondary">
                                        Edit/Delete/Favorite "{post.taskname}"
                                </button>
                            </Link>
                            </>
                        );
                    }}
                    ></Card>
                );
                }
            )}
    </div>

        <div className="row">
            <h2>Medium Priority Tasks</h2>
            {this.state.posts.map((post) => {
            if(post.priority !== "m") {
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
                        post.taskname = appendedTitle;
                        initColor = updatedColor;
                    }}
                    emptyColor={initColor}
                    selectedColor="lightgreen"
                    renderCard={(onClick) => {
                        return (<>
                            <button
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
                        <Link to={`/posts/${post.id}`}>
                            <button 
                                type="button"
                                className="btn btn-secondary">
                                    Edit/Delete/Favorite "{post.taskname}"
                            </button>
                        </Link>
                        </>
                    );
                    }}
                    ></Card>
                );
                }
            )}
        </div>

        <div className="row">
            <h2>Low Priority Tasks</h2>
            {this.state.posts.map((post) => {
            if(post.priority !== "l") {
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
                        post.taskname = appendedTitle;
                        initColor = updatedColor;
                    }}
                    emptyColor={initColor}
                    selectedColor="lightgreen"
                    renderCard={(onClick) => {
                        return (<>
                            <button
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
                        <Link to={`/posts/${post.id}`}>
                            <button 
                                type="button"
                                className="btn btn-secondary">
                                    Edit/Delete/Favorite "{post.taskname}"
                            </button>
                        </Link>
                        </>
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
