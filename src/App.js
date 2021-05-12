import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import List from './List';
import Detail from './Detail';
import GeneralMap from './GeneralMap';

class App extends Component {
 state = {
   commentaars:[]
 };
   routing = (action, data) => {
      switch (action) {
        case 'Home' : 
          this.route = <Home action={this.handleClick}/>;
          break;
        case 'List' :
          this.route = <List action={this.handleClick}/>
          break;
        case 'Detail' :
          this.route = <Detail action={this.handleClick} data={data} comment={this.state.commentaars}/>
          break;
        case 'GeneralMap' :
          this.route = <GeneralMap action={this.handleClick} data={data} comment={this.state.commentaars}/>
          break;
        case 'DetailAddComment' :
          let commentList = JSON.parse(localStorage.getItem('commentList'));
          if (commentList) {
            commentList = commentList.concat(data);
          } else {
            commentList = [data];
          }
          localStorage.setItem('commentList', JSON.stringify(commentList));
          this.route = <Detail action={this.handleClick} data={data}/>
          break;
        default :
          this.route = <Home action={this.handleClick} />
          break;
      }
      this.setState({ action: this.route });
  }; 
 handleClick = (action, data) => {
      this.routing(action, data);
  }

 route = <Home action={this.handleClick} />
  render() {
    return (
      this.route
    );
  }
}



export default App;
