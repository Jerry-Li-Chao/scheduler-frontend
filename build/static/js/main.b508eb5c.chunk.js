(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{22:function(t,e,s){},31:function(t,e,s){},41:function(t,e,s){},42:function(t,e,s){},44:function(t,e,s){},45:function(t,e,s){"use strict";s.r(e);var n=s(1),a=s.n(n),i=s(16),r=s.n(i),c=(s(31),s(9)),o=s(3),l=s(5),d=s(6),h=s(8),u=s(7),j=s(0),p=function(t){Object(h.a)(s,t);var e=Object(u.a)(s);function s(){return Object(l.a)(this,s),e.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{className:"nav justify-content-center",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(c.c,{exact:!0,className:"nav-link",to:"/",children:"My Schdule"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(c.c,{exact:!0,className:"nav-link",to:"/posts/new",children:"Create a task"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(c.c,{exact:!0,className:"nav-link",to:"/favorited",children:"Favorited"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(c.c,{exact:!0,className:"nav-link",to:"/procrastinatometer",children:"Procrastinatometer"})})]})})}}]),s}(a.a.Component),b=s(19),m=(s(15),function(t){Object(h.a)(s,t);var e=Object(u.a)(s);function s(t){var n;return Object(l.a)(this,s),(n=e.call(this,t)).state={selected:!1,selectedColor:n.props.selectedColor||"yellow",emptyColor:n.props.emptyColor||"blue",displayColor:n.props.emptyColor||"green",post:n.props.passingPost},n.handleClick=n.handleClick.bind(Object(b.a)(n)),n}return Object(d.a)(s,[{key:"handleClick",value:function(){this.state.selected?this.setState({selected:!1}):this.state.selected||this.setState({selected:!0});var t=this.props.title,e="";this.state.selected?this.state.selected&&(t=t.substring(0,t.length),e=this.state.emptyColor):(t+=" [FINISHED]",e=this.state.selectedColor),this.props.onClick(t,e,this.state.selectedColor,this.state.post)}},{key:"render",value:function(){return(0,this.props.renderCard)(this.handleClick)}}]),s}(a.a.Component)),y=(s(37),s(22),function(t){Object(h.a)(s,t);var e=Object(u.a)(s);function s(){return Object(l.a)(this,s),e.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){var t=document.getElementById("modal-container");return r.a.createPortal(Object(j.jsx)("div",{className:"modal",tabIndex:"-1",children:Object(j.jsx)("div",{className:"modal-dialog",children:Object(j.jsxs)("div",{className:"modal-content",children:[Object(j.jsxs)("div",{className:"modal-header",children:[Object(j.jsx)("h5",{className:"modal-title",children:this.props.title}),Object(j.jsx)("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:this.props.onClose})]}),Object(j.jsx)("div",{className:"modal-body",children:this.props.body()}),Object(j.jsx)("div",{className:"modal-footer",children:Object(j.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:this.props.onClose,children:"Close"})})]})})}),t)}}]),s}(a.a.Component)),O=function(t){Object(h.a)(s,t);var e=Object(u.a)(s);function s(t){var n;return Object(l.a)(this,s),(n=e.call(this,t)).state={posts:[],isModalOpen:!1},n}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var t=this;document.title="Scheduler Page",fetch("https://jerryli-scheduler-api.herokuapp.com/api/posts").then((function(t){return t.json()})).then((function(e){console.log(e),t.setState({posts:e})}))}},{key:"toggleFinished",value:function(t,e,s){}},{key:"render",value:function(){var t=this;return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("button",{type:"button",onClick:function(){t.setState({isModalOpen:!0})},children:"Tips for using this scheduler"}),this.state.isModalOpen&&Object(j.jsx)(y,{title:"Tips for using this scheduler",body:function(){return Object(j.jsxs)("ol",{children:[Object(j.jsx)("li",{children:'"My Schedule" Tab provide you a view of your tasks filtered by the priority levels of the task'}),Object(j.jsx)("li",{children:'"Create a Task" Tab provide a form with form validation functionalities, and the added task will appear in the "My Schedule" Tab'}),Object(j.jsx)("li",{children:"Try clicking on one of the Tabs, you will have a clearer view of the task information. In there, you will be able to Edit, Delete, or Add to Favorite"}),Object(j.jsx)("li",{children:"Procrastinatometer detects how many tasks have imminent deadlines and gives a simple summary report"})]})},onClose:function(){t.setState({isModalOpen:!1})}}),Object(j.jsx)("h2",{children:"High Priority Tasks"}),this.state.posts.map((function(e){if("h"===e.priority){var s;"l"===e.priority?s="lightyellow":"m"===e.priority?s="coral":"h"===e.priority&&(s="crimson"),!0===e.finished&&(console.log(e.taskname+" is finished"),s="lightgreen");var n=e.deadline;return(n=n.substring(0,10)+" "+n.substring(11,16)).substring(11,13)<12?n+=" AM":n+=" PM",Object(j.jsx)(m,{title:e.taskname,onClick:function(n,a,i,r){e.taskname=n,s=a,t.toggleFinished(a,i,r)},passingPost:e,emptyColor:s,selectedColor:"lightgreen",renderCard:function(t){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{type:"button",className:"card btn",style:{width:"18rem",backgroundColor:s},onClick:t,children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h5",{className:"card-title",children:e.taskname}),Object(j.jsx)("p",{className:"card-text",children:e.description}),Object(j.jsxs)("p",{className:"card-text",children:["DDL: ",n]})]})}),Object(j.jsx)(c.b,{to:"/posts/".concat(e.id),children:Object(j.jsxs)("button",{type:"button",className:"btn btn-secondary",children:['Edit/Delete/Favorite "',e.taskname,'"']})})]})}},e.id)}}))]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("h2",{children:"Medium Priority Tasks"}),this.state.posts.map((function(t){if("m"===t.priority){var e;"l"===t.priority?e="lightyellow":"m"===t.priority?e="coral":"h"===t.priority&&(e="crimson");var s=t.deadline;return(s=s.substring(0,10)+" "+s.substring(11,16)).substring(11,13)<12?s+=" AM":s+=" PM",Object(j.jsx)(m,{title:t.taskname,onClick:function(s,n){t.taskname=s,e=n},emptyColor:e,selectedColor:"lightgreen",renderCard:function(n){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{type:"button",className:"card btn",style:{width:"18rem",backgroundColor:e},onClick:n,children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h5",{className:"card-title",children:t.taskname}),Object(j.jsx)("p",{className:"card-text",children:t.description}),Object(j.jsxs)("p",{className:"card-text",children:["DDL: ",s]})]})}),Object(j.jsx)(c.b,{to:"/posts/".concat(t.id),children:Object(j.jsxs)("button",{type:"button",className:"btn btn-secondary",children:['Edit/Delete/Favorite "',t.taskname,'"']})})]})}},t.id)}}))]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("h2",{children:"Low Priority Tasks"}),this.state.posts.map((function(t){if("l"===t.priority){var e;"l"===t.priority?e="lightyellow":"m"===t.priority?e="coral":"h"===t.priority&&(e="crimson");var s=t.deadline;return(s=s.substring(0,10)+" "+s.substring(11,16)).substring(11,13)<12?s+=" AM":s+=" PM",Object(j.jsx)(m,{title:t.taskname,onClick:function(s,n){t.taskname=s,e=n},emptyColor:e,selectedColor:"lightgreen",renderCard:function(n){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{type:"button",className:"card btn",style:{width:"18rem",backgroundColor:e},onClick:n,children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h5",{className:"card-title",children:t.taskname}),Object(j.jsx)("p",{className:"card-text",children:t.description}),Object(j.jsxs)("p",{className:"card-text",children:["DDL: ",s]})]})}),Object(j.jsx)(c.b,{to:"/posts/".concat(t.id),children:Object(j.jsxs)("button",{type:"button",className:"btn btn-secondary",children:['Edit/Delete/Favorite "',t.taskname,'"']})})]})}},t.id)}}))]})]})}}]),s}(a.a.Component),f=s(13),v=(s(41),function(t){Object(h.a)(s,t);var e=Object(u.a)(s);function s(t){var n;return Object(l.a)(this,s),(n=e.call(this,t)).state={post:{}},n}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.postId;fetch("https://jerryli-scheduler-api.herokuapp.com/api/posts/".concat(e)).then((function(t){return t.json()})).then((function(e){t.setState({post:e})}))}},{key:"deletePost",value:function(){var t=this;if(window.confirm("Are you sure you want to delete this task?")){var e="https://jerryli-scheduler-api.herokuapp.com/api/posts/".concat(this.state.post.id);fetch(e,{method:"DELETE"}).then((function(){f.b.success('Post "'.concat(t.state.post.taskname,'" was deleted')),t.props.history.push("/")}))}}},{key:"removeFavorited",value:function(){var t=this;fetch("https://jerryli-scheduler-api.herokuapp.com/api/posts/".concat(this.state.post.id),{method:"PUT",body:JSON.stringify({taskname:this.state.post.taskname,description:this.state.post.description,deadline:this.state.post.deadline,favorited:!1,priority:this.state.post.priority}),headers:{"Content-type":"application/json"}}).then((function(t){return t.json()})).then((function(e){console.log(e),f.b.success('Task "'.concat(e.taskname,'" was removed from Favorited List')),t.props.history.push("/")}))}},{key:"addToFavorited",value:function(){var t=this;fetch("https://jerryli-scheduler-api.herokuapp.com/api/posts/".concat(this.state.post.id),{method:"PUT",body:JSON.stringify({taskname:this.state.post.taskname,description:this.state.post.description,deadline:this.state.post.deadline,favorited:!0,priority:this.state.post.priority}),headers:{"Content-type":"application/json"}}).then((function(t){return t.json()})).then((function(e){console.log(e),f.b.success('Task "'.concat(e.taskname,'" was added to Favorited List')),t.props.history.push("/")}))}},{key:"render",value:function(){var t=this;return document.title="".concat(this.state.post.taskname," Task Page"),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:this.state.post.taskname}),Object(j.jsx)("p",{children:this.state.post.description}),Object(j.jsxs)("div",{className:"btn-group",children:[Object(j.jsx)(c.b,{to:"/posts/".concat(this.state.post.id,"/edit"),children:Object(j.jsx)("button",{className:"btn btn-primary",children:"Edit"})}),Object(j.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){t.deletePost()},children:"Delete"}),this.state.post.favorited?Object(j.jsx)("button",{type:"button",className:"btn btn-warning",onClick:function(){t.removeFavorited()},children:"Remove from favorited List"}):Object(j.jsx)("button",{type:"button",className:"btn btn-success",onClick:function(){t.addToFavorited()},children:"Add to favorited List"})]})]})}}]),s}(a.a.Component)),x=function(t){Object(h.a)(s,t);var e=Object(u.a)(s);function s(t){var n;return Object(l.a)(this,s),(n=e.call(this,t)).state={posts:[]},n}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var t=this;document.title="Favorited Page",fetch("https://jerryli-scheduler-api.herokuapp.com/api/posts").then((function(t){return t.json()})).then((function(e){console.log(e),t.setState({posts:e})}))}},{key:"render",value:function(){var t=this;return Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("h2",{children:"Favorited Tasks"}),this.state.posts.map((function(e){if(!1!==e.favorited){var s;"l"===e.priority?s="lightyellow":"m"===e.priority?s="coral":"h"===e.priority&&(s="crimson");var n=e.deadline;return(n=n.substring(0,10)+" "+n.substring(11,16)).substring(11,13)<12?n+=" AM":n+=" PM",Object(j.jsx)(m,{title:e.taskname,onClick:function(e,s){t.setState({title:e,displayColor:s})},emptyColor:"lightyellow",selectedColor:"lightgreen",renderCard:function(t){return Object(j.jsx)(c.b,{to:"/posts/".concat(e.id),children:Object(j.jsx)("button",{"data-inline":"true",type:"button",className:"card btn",style:{width:"18rem",backgroundColor:s},onClick:t,children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h5",{className:"card-title",children:e.taskname}),Object(j.jsx)("p",{className:"card-text",children:e.description}),Object(j.jsxs)("p",{className:"card-text",children:["DDL: ",n]})]})})})}},e.id)}}))]})})}}]),s}(a.a.Component),k=(s(42),function(t){Object(h.a)(s,t);var e=Object(u.a)(s);function s(t){var n;return Object(l.a)(this,s),(n=e.call(this,t)).validate=function(){var t="",e="",s="",a="";return t=""===n.state.taskname?"Taskname cannot be empty":"",e=""===n.state.description?"description cannot be empty":"",s=""===n.state.deadline?"deadline cannot be empty":"",a=""===n.state.priority?"select a priority":"",!(t||e||s||a)||(n.setState({nameError:t}),n.setState({descriptionError:e}),n.setState({deadlineError:s}),n.setState({priorityError:a}),!1)},n.state={taskname:"",description:"",deadline:"",priority:"",nameError:"",descriptionError:"",deadlineError:"",priorityError:""},n}return Object(d.a)(s,[{key:"componentDidMount",value:function(){document.title="Create a Task Page"}},{key:"handleTitleChange",value:function(t){this.setState({taskname:t.target.value})}},{key:"handleBodyChange",value:function(t){this.setState({description:t.target.value})}},{key:"handlePriorityChange",value:function(t){this.setState({priority:t.target.value})}},{key:"handleDDLChange",value:function(t){this.setState({deadline:t.target.value})}},{key:"handleSubmit",value:function(t){var e=this;t.preventDefault(),this.validate()&&fetch("https://jerryli-scheduler-api.herokuapp.com/api/posts",{method:"POST",body:JSON.stringify({taskname:this.state.taskname,description:this.state.description,deadline:this.state.deadline,favorited:"false",priority:this.state.priority}),headers:{"Content-type":"application/json"}}).then((function(t){return t.json()})).then((function(t){console.log(t),f.b.success('Task "'.concat(e.state.taskname,'" was successfully created')),e.props.history.push("/")}))}},{key:"render",value:function(){var t=this;return Object(j.jsxs)("form",{className:"needs-validation",onSubmit:function(e){t.handleSubmit(e)},noValidate:!0,children:[Object(j.jsxs)("div",{className:"my-3",children:[Object(j.jsx)("label",{htmlFor:"title",className:"form-label",children:"Taskname"}),Object(j.jsx)("input",{id:"title",className:"form-control",value:this.state.taskname||"",onChange:function(e){t.handleTitleChange(e)},required:!0}),this.state.nameError?Object(j.jsx)("div",{className:"error",children:"Taskname cannot be empty"}):null]}),Object(j.jsxs)("div",{className:"my-3",children:[Object(j.jsx)("label",{htmlFor:"body",className:"form-label",children:"Description"}),Object(j.jsx)("textarea",{id:"body",className:"form-control",value:this.state.description||"",onChange:function(e){t.handleBodyChange(e)},required:!0}),this.state.descriptionError?Object(j.jsx)("div",{className:"error",children:"Description cannot be empty"}):null]}),Object(j.jsxs)("div",{className:"my-3",children:[Object(j.jsx)("label",{htmlFor:"ddl",className:"form-label",children:"Deadline"}),Object(j.jsx)("input",{id:"ddl",type:"datetime-local",className:"form-select",value:this.state.deadline,onChange:function(e){t.handleDDLChange(e)},required:!0}),this.state.deadlineError?Object(j.jsx)("div",{className:"error",children:"Deadline cannot be empty"}):null]}),Object(j.jsxs)("div",{className:"my-3",children:[Object(j.jsx)("label",{htmlFor:"priority",className:"form-label",children:"Priority"}),Object(j.jsxs)("select",{id:"priority",className:"form-select",value:this.state.priority,onChange:function(e){t.handlePriorityChange(e)},required:!0,children:[Object(j.jsx)("option",{children:"--Select Priority--"}),Object(j.jsx)("option",{value:"l",children:"Low"}),Object(j.jsx)("option",{value:"m",children:"Medium"}),Object(j.jsx)("option",{value:"h",children:"High"})]}),this.state.priorityError?Object(j.jsx)("div",{className:"error",children:"A priority needs to be selected"}):null]}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Create Task"})]})}}]),s}(a.a.Component)),g=function(t){Object(h.a)(s,t);var e=Object(u.a)(s);function s(t){var n;return Object(l.a)(this,s),(n=e.call(this,t)).state={taskname:"",description:"",deadline:"",favorited:!1,priority:"",finished:!1},n}return Object(d.a)(s,[{key:"handleTitleChange",value:function(t){this.setState({taskname:t.target.value})}},{key:"handleBodyChange",value:function(t){this.setState({description:t.target.value})}},{key:"handlePriorityChange",value:function(t){this.setState({priority:t.target.value})}},{key:"handleDDLChange",value:function(t){this.setState({deadline:t.target.value})}},{key:"handleSubmit",value:function(t){var e=this;t.preventDefault();var s=this.props.match.params.postId;fetch("https://jerryli-scheduler-api.herokuapp.com/api/posts/".concat(s),{method:"PUT",body:JSON.stringify({taskname:this.state.taskname,description:this.state.description,deadline:this.state.deadline,favorited:this.state.favorited,priority:this.state.priority}),headers:{"Content-type":"application/json"}}).then((function(t){return t.json()})).then((function(t){console.log(t),f.b.success('Task "'.concat(t.taskname,'" was successfully updated')),e.props.history.push("/")}))}},{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.postId;fetch("https://jerryli-scheduler-api.herokuapp.com/api/posts/".concat(e)).then((function(t){return t.json()})).then((function(e){console.log(e),t.setState(e)}))}},{key:"render",value:function(){var t=this;return Object(j.jsx)("form",{onSubmit:function(e){t.handleSubmit(e)},children:Object(j.jsxs)("div",{className:"my-3",children:[Object(j.jsx)("label",{htmlFor:"taskname",className:"form-label",children:"Taskname"}),Object(j.jsx)("input",{id:"taskname",className:"form-control",value:this.state.taskname,onChange:function(e){t.handleTitleChange(e)}}),Object(j.jsxs)("div",{className:"my-3",children:[Object(j.jsx)("label",{htmlFor:"description",className:"form-label",children:"Description"}),Object(j.jsx)("textarea",{id:"description",className:"form-control",value:this.state.description,onChange:function(e){t.handleBodyChange(e)}})]}),Object(j.jsxs)("div",{className:"my-3",children:[Object(j.jsx)("label",{htmlFor:"ddl",className:"form-label",children:"Deadline"}),Object(j.jsx)("input",{id:"ddl",type:"datetime-local",className:"form-select",value:this.state.deadline,onChange:function(e){t.handleDDLChange(e)}})]}),Object(j.jsxs)("div",{className:"my-3",children:[Object(j.jsx)("label",{htmlFor:"priority",className:"form-label",children:"Priority"}),Object(j.jsxs)("select",{id:"priority",className:"form-select",value:this.state.priority,onChange:function(e){t.handlePriorityChange(e)},children:[Object(j.jsx)("option",{children:"--Select Priority--"}),Object(j.jsx)("option",{value:"l",children:"Low"}),Object(j.jsx)("option",{value:"m",children:"Medium"}),Object(j.jsx)("option",{value:"h",children:"High"})]})]}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Edit Task"})]})})}}]),s}(a.a.Component),C=(s(43),s(44),function(t){Object(h.a)(s,t);var e=Object(u.a)(s);function s(t){var n;return Object(l.a)(this,s),(n=e.call(this,t)).state={posts:[],dates:[],datesdesc:[]},n}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var t=this;document.title="Procrastinatometer Page",fetch("https://jerryli-scheduler-api.herokuapp.com/api/posts").then((function(t){return t.json()})).then((function(e){console.log(e),t.setState({posts:e})}))}},{key:"render",value:function(){var t=this;return this.state.posts.map((function(e){t.state.dates.push(e),t.state.datesdesc.push(e)})),this.state.dates.sort((function(t,e){return new Date(t.deadline)-new Date(e.deadline)})),this.state.datesdesc.sort((function(t,e){return new Date(e.deadline)-new Date(t.deadline)})),console.log("printing content of dates: "),console.log(this.state.dates),console.log("printing content of datesdesc: "),console.log(this.state.datesdesc),Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"3 Closest Deadlines"}),this.state.dates.slice(0,3).map((function(e){var s;"l"===e.priority?s="lightyellow":"m"===e.priority?s="coral":"h"===e.priority&&(s="crimson");var n=e.deadline;return(n=n.substring(0,10)+" "+n.substring(11,16)).substring(11,13)<12?n+=" AM":n+=" PM",Object(j.jsx)(m,{title:e.taskname,onClick:function(e,s){t.setState({title:e,displayColor:s})},emptyColor:"lightyellow",selectedColor:"lightgreen",renderCard:function(t){return Object(j.jsx)(c.b,{to:"/posts/".concat(e.id),children:Object(j.jsx)("button",{"data-inline":"true",type:"button",className:"card btn",style:{width:"18rem",backgroundColor:s},onClick:t,children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h5",{className:"card-title",children:e.taskname}),Object(j.jsx)("p",{className:"card-text",children:e.description}),Object(j.jsxs)("p",{className:"card-text",children:["DDL: ",n]})]})})})}},e.id)})),Object(j.jsx)("h2",{children:"You have a lot of time to do these things"}),Object(j.jsx)("p",{children:"You may want to break them into smaller tasks"}),this.state.datesdesc.slice(0,3).map((function(e){var s;"l"===e.priority?s="lightyellow":"m"===e.priority?s="coral":"h"===e.priority&&(s="crimson");var n=e.deadline;return(n=n.substring(0,10)+" "+n.substring(11,16)).substring(11,13)<12?n+=" AM":n+=" PM",Object(j.jsx)(m,{title:e.taskname,onClick:function(e,s){t.setState({title:e,displayColor:s})},emptyColor:"lightyellow",selectedColor:"lightgreen",renderCard:function(t){return Object(j.jsx)(c.b,{to:"/posts/".concat(e.id),children:Object(j.jsx)("button",{"data-inline":"true",type:"button",className:"card btn",style:{width:"18rem",backgroundColor:s},onClick:t,children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h5",{className:"card-title",children:e.taskname}),Object(j.jsx)("p",{className:"card-text",children:e.description}),Object(j.jsxs)("p",{className:"card-text",children:["DDL: ",n]})]})})})}},e.id)}))]})}}]),s}(a.a.Component));function N(){return Object(j.jsxs)(c.a,{children:[Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(p,{}),Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/favorited",children:Object(j.jsx)(x,{})}),Object(j.jsx)(o.a,{path:"/procrastinatometer",children:Object(j.jsx)(C,{})}),Object(j.jsx)(o.a,{path:"/posts/new",component:k}),Object(j.jsx)(o.a,{path:"/posts/:postId/edit",component:g}),Object(j.jsx)(o.a,{path:"/posts/:postId",component:v}),Object(j.jsx)(o.a,{exact:!0,path:"/",children:Object(j.jsx)(O,{})}),Object(j.jsx)(o.a,{path:"*",children:Object(j.jsx)(w,{})})]})]}),Object(j.jsx)(f.a,{})]})}function w(){var t=Object(o.f)();return Object(j.jsx)("div",{children:Object(j.jsxs)("h3",{children:["No match for ",Object(j.jsx)("code",{children:t.pathname})]})})}var D=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,47)).then((function(e){var s=e.getCLS,n=e.getFID,a=e.getFCP,i=e.getLCP,r=e.getTTFB;s(t),n(t),a(t),i(t),r(t)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root")),D()}},[[45,1,2]]]);
//# sourceMappingURL=main.b508eb5c.chunk.js.map