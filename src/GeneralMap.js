import React, { Component } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
//import styled from 'styled-components';
import MainMap from './Props/MainMap';
import data from './data/toerist.json';
import Marker from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});
export default class GeneralMap extends Component {

    list = data.curiosity;

    componentDidMount() {
        // Set the map variable
        const myMap = L.map('map2');

        // Load the basemap
        const myBasemap = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        });

        // Add basemap to map id
        myBasemap.addTo(myMap);

        // Set view of the map
        myMap.setView([51.219135, 4.396786], 15);
        
        
        this.row = this.list.map(item => {
        let lat = `${item.latitude}`;
        let long = `${item.longitude}`;
        return (
            L.marker([lat, long],).bindPopup(`
            <p>${item.name}<hr /></p>
            <li>type : ${item.type}</li>
            <li>lengtegraad : ${item.longitude}</li>
            <li>breedtegraad : ${item.latitude}</li>
            <li>land : ${item.country}</li>
            <li>stad : ${item.city}</li>
            `).openPopup().addTo(myMap)
        )
    })
        
    }
    render() {
        

        return ([
            <div>
            <MainMap>
            <Marker>
                {this.row};
            </Marker>
            </MainMap>
            </div>,
            <div className="navi">
            <button onClick={() => this.props.action('List')}>List</button>
            <button onClick={() => this.props.action('Home')}>Home</button>
            </div>
        ]);
    }
}
