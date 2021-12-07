import React from "react";
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import Posts from "./Posts";
import Post from "./Post";
import Favorited from "./Favorited.js";
import CreatePostForm from "./CreatePostForm";
import EditPostForm from "./EditPostForm";
import { ToastContainer } from "react-toastify";

import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";
import Procrastinatometer from "./Procrastinatometer";

export default function App() {
    
    return (
      <Router>
        <div className="container">
          <Navigation />

          <Switch>
            <Route path="/favorited">
              <Favorited />
            </Route>
            <Route path="/procrastinatometer">
              <Procrastinatometer />
            </Route>
            <Route path="/posts/new" component={CreatePostForm} />
            {/* put the specific route before generic routes */}
            <Route path="/posts/:postId/edit" component={EditPostForm} />
            <Route path="/posts/:postId" component={Post} />
            <Route exact path="/">
              <Posts />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </div>
        <ToastContainer />
      </Router>
    );
}

function NoMatch() {
  let location = useLocation();
  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}