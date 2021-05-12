import React, { Component } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

const Wrapper = styled.div `
width:${props => props.width};
height:${props => props.height}`;

export default class Map extends Component {
    componentDidMount() {
        // Set the map variable
        const myMap = L.map('map');

        // Load the basemap
        const myBasemap = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        });

        // Add basemap to map id
        myBasemap.addTo(myMap);

        // Set view of the map
        myMap.setView([51.219135, 4.396786], 12);
        var circle = L.circle([this.props.data.latitude, this.props.data.longitude], {
            color: 'cornflowerblue',
            fillColor: 'cornflowerblue',
            fillOpacity: 0.3,
            radius: 500
        }).openPopup().addTo(myMap);
        circle.bindPopup(`<h3>${this.props.data.name}</h3>`);
        
    
    }
    
    render() {
        return (
            <Wrapper width = '100%' height='500px' id="map"/>
        );
    }
}
