import React, {Component} from 'react';



export default class MyForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    
    fetch('https://jef-inghelbrecht-16539-jefinghelbrecht.c9users.io/mmt-php-api/public/curiositycomment/create', {
      method: 'POST',
      body: data,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea id="username" name="username" type="text" />

        <textarea id="comment" name="comment" type="text" />

        <button>Comment</button>
      </form>
    );
  }
}