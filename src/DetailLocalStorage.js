import React, {Component} from 'react';

class Detail extends Component {
    commentList = null;
     // state = {'commentList' : this.commentList};
     
    commentListUI = function() {
       this.commentList = JSON.parse(localStorage.getItem('commentList'));
       if(this.commentList === null) {
            this.commentList = ['Geen'];
        }
        let commentUI = this.commentList.map(item => {
            // alert(item);
            return (
                <p class="comment">
                    {item}
                </p>
            )
        });
        return commentUI;
    }
    
    render() {
        return (
            <article>
                <h1>Detail {this.props.data.name}</h1>
               <button onClick={() => this.props.action('List')}>List</button>
               <fieldset>
                   <div>
                    <label for="comment">Commentaar:</label>
                    <textarea id="comment"></textarea>
                   </div>
                   <button onClick={() => this.props.action('DetailAddComment',
                        document.getElementById('comment').value, this.props.data)}>Opslaan</button>
               </fieldset>
               <div>
                {this.commentListUI()}

               </div>
             </article>
        )
    }
}

export default Detail; 