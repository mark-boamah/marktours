import React, { Component } from 'react';
import Map from './Map';
//import Form from './Props/Form';

class Detail extends Component {
    
    //  commentList = null;
    // state = {'commentList' : this.commentList};

    // commentListUI = function() {
    //   this.commentList = this.state.commentList;
    //   if(this.commentList === null) {
    //         this.commentList = ['Geen'];
    //     }
    //     let commentUI = this.commentList.map(item => {
    //         // alert(item);
    //         return (
    //             <p class="comment">
    //                 <strong>{item.UserName}</strong>: {item.Comment}
    //             </p>
    //         )
    //     });
    //     return commentUI;
    // }
    
    /*username = null;
    usercomment = null;
    username = document.getElementById('username').value;
    usercomment = document.getElementById('comment').value;
    commentlist = [this.username,this.usercomment];
    */
    // handleSubmit(event) {
    // event.preventDefault();
    // fetch('https://jef-inghelbrecht-16539-jefinghelbrecht.c9users.io/mmt-php-api/public/curiositycomment/create', {
    //   method: 'POST',
    //   body: this.commentlist,
    // });
         
         
    //  }

    // Code is invoked after the component is mounted/inserted into the DOM tree.
    // componentDidMount() {
    //     const prepUrl = `https://jef-inghelbrecht-16539-jefinghelbrecht.c9users.io/mmt-php-api/public/curiositycomment/readallwhere?CuriosityId=${this.props.data.key}`;
    //     // alert(prepUrl);
    //     const url = prepUrl;

    //     // alles over fetch:
    //     // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //     fetch(url, {
    //         credentials: 'omit'  
    //     })
    //         .then(result => {
    //             // alert(result);
    //             return result.json()
    //             })
    //         .then(result => {
    //             // alert(JSON.stringify(result));
    //             this.setState({
    //                 commentList: result
    //             })
    //         }).catch(function (result)
    //             {alert('Error: ' + result);} );
                
                
       
    
    
        
    // }


    render() {
        
        /*if (this.username !== null) {
            this.props.data.comment[0].username = this.username;
        }
        else if (this.usercomment !== null) {
            this.props.data.comment[1].usercomment = this.usercomment;   
        }*/
        
        let url = `/images/big/${this.props.data.image[0].first}`;
        let url2 = `/images/big/${this.props.data.image[1].second}`;
        let url3 = `/images/big/${this.props.data.image[2].third}`;
        let alt = `Foto van ${this.props.data.name}`;
        return (
            <main id="detailMain">
                   <header> 
                   <h1>Informatie over {this.props.data.name}<hr /></h1>
                   <div id="btnDetail">
                   <button onClick={() => this.props.action('List')}>List</button>
                   <button onClick={() => this.props.action('Home')}>Home</button>  
                   </div>
                   </header>
                    <div className="bigImg">
                    <img id="idimg" src={url} alt={alt}/>
                    <img id="idimg" src={url2} alt={alt}/>
                    <img id="idimg" src={url3} alt={alt}/>
                    </div>
                    <hr />
                    <br />
                <h2>Algemene info</h2>
                <hr></hr>
                <ul>
                    <li>type : {this.props.data.type}</li>
                    <li>lengtegraad : {this.props.data.longitude}</li>
                    <li>breedtegraad : {this.props.data.latitude}</li>
                    <li>land : {this.props.data.country}</li>
                    <li>stad : {this.props.data.city}</li>
                </ul><br />
                
                <h2>Praktische info</h2>
                <hr></hr>
                <ul>
                    <li>Telefoon : {this.props.data.info[0].telephone}</li>
                    <li>Website : {this.props.data.info[1].website}</li>
                </ul><br />
                
                <h2>Openingsuren</h2>
                <hr></hr>
                <ul>
                    <li>{this.props.data.info[2].open}</li>
                </ul><br />
                
                <h2>Adres</h2>
                <hr></hr>
                <ul>
                    <li>{this.props.data.info[3].address}</li>
                </ul><br />
                
                {/* <h2>Commentaar</h2>
                <ul>
                  <form>
                    <textarea id="username" name="Username" type="text" placeholder="User"/>

                    <textarea id="comment" name="Comment" type="text" placeholder="Nieuwe commentaar"/>

                     <div onSubmit={this.handleSubmit}><button type="submit" value="submit">Comment</button></div>
                  </form>
                <br /><li>Comments : {this.commentlist}</li>
                </ul><br /> */}
                
                <h2>Locatie op kaart</h2>
                <hr></hr>
                <div id="mapid">{<Map data={this.props.data} />}</div>
            
             
                
             </main>
        );

    }
    // handleSubmit = comment => {
    //     this.setState({ commentaars: [...this.state.commentaars, comment] })
    // }

}

export default Detail;
