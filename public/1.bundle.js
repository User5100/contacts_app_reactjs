webpackJsonp([1],{76:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(0),r=t(77),c=t(6),l=n.b.createClass({displayName:"Landing",getInitialState:function(){return{searchTerm:"Initial searchTerm"}},handleSearchTermChange:function(e){this.setState({searchTerm:e.target.value})},render:function(){return n.b.createElement("div",null,n.b.createElement(r.a,{showSearch:!1,handleSearchTermChange:this.handleSearchTermChange,searchTerm:this.state.searchTerm}),n.b.createElement("div",{className:"docs-header"},n.b.createElement("div",{className:"container"},n.b.createElement("h1",null,"Welcome to Connect"),n.b.createElement("p",null,"A place to organise your business contacts...."))),n.b.createElement("div",{className:"container docs-content"},n.b.createElement("h1",null,"The larger your network, the larger networth"),n.b.createElement("p",null,"Individuals who have a larger network of acquaintances on average earn higher incomes then than those that don't. But building and maintaining large network of contacts is tricky. It's hard to keep track of all the people you meet. That's where Connect comes in. Connect helps you build, organise and find people in your network. Start today."),n.b.createElement(c.c,{to:"/contacts"},n.b.createElement("button",{className:"btn btn-lg call-action"},"Start Now!"))))}});a.default=l},77:function(e,a,t){"use strict";var n=t(0),r=t(6),c=n.b.PropTypes,l=c.func,s=c.bool,o=c.string,i=n.b.createClass({displayName:"Header",propTypes:{handleSearchTermChange:l,showSearch:s,searchTerm:o},handleSubmit:function(e){e.preventDefault()},render:function(){var e=void 0;return e=this.props.showSearch?n.b.createElement("div",null,n.b.createElement("ul",{className:"nav navbar-nav hidden-xs"},n.b.createElement("li",null,n.b.createElement(r.c,{to:"/"},"Home"))),n.b.createElement("form",{onSubmit:this.handleSubmit,className:"navbar-form navbar-right app-search"},n.b.createElement("div",{className:"form-group"},n.b.createElement("input",{className:"form-control",onChange:this.props.handleSearchTermChange,value:this.props.searchTerm,type:"text",placeholder:"Search for contact"})))):n.b.createElement("div",null,n.b.createElement("ul",{className:"nav navbar-nav hidden-xs"},n.b.createElement("li",null,n.b.createElement(r.c,{to:"/contacts"},"My Contacts")))),n.b.createElement("nav",{className:"navbar navbar-inverse navbar-fixed-top app-navbar"},n.b.createElement("div",{className:"container"},e))}});a.a=i}});
//# sourceMappingURL=1.bundle.js.map