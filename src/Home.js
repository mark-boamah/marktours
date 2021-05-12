import React, {Component} from 'react';

// var bgColors = {"Cornflowerblue": "#6495ED","Red": "#E9573F"};

class Home extends Component {
    

    render() {
        return (
        <div className="App">
            <header className="App-header">
              <img src="/images/mmt-logo.jpg" className="App-logo" alt="logo moet maar tevreden" />
              <p>
                Moe maar tevreden
              </p>
              <button style={{width: '15em',marginBottom: '1em'}} onClick={() => this.props.action('List')}>List</button>
              <button style={{width: '15em'}} onClick={() => this.props.action('GeneralMap')}>General Map</button>
            </header>
         </div>
        )
    }
}

export default Home;