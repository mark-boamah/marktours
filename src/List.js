import React, {Component} from 'react';
import data from './data/toerist.json';

class List extends Component {
    list = data.curiosity;
    

    row = this.list.map(item => {
        let url = `/images/small/${item.image[0].first}`;
        let alt = ` foto van ${item.name}`;
        return ([
            <tr>
                <td><img src={url} alt={alt} /></td>
                <td id="note"><h2>{item.name}</h2><br />{item.description}</td>
                <td><button onClick={() => this.props.action('Detail', item)}>Detail</button></td>
            </tr>,
            
            ]
        )
        
    })
    render() {
        return (
            <table>
               {this.row}
            </table>
            );
    }
}

export default List;