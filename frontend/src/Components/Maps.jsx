import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react';
import LocationSearchInput from '../Components/PlaceAutoComplete'
import User_image from '../icon/user.png'
import Drone_image from '../icon/drone.png'
import './Maps.css'
 

export class MapContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPosition: {lat: 100,lng: 100},
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            drone: [
                {
                    name: 'Drone1',
                    position: {lat: 25.017925, lng:121.544301 }
                },
                {
                    name: 'Drone2',
                    position: {lat: 25.017929, lng:121.544303 }
                }
            ]
        }
    }

    fetchPosition = () => {
        getPosition()
            .then(pos => this.setState({currentPosition: pos}))
    }

    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,
            activeMarker: null
          })
        }
      };

  render() {
    console.log(this.props)
    var SearchBar = this.props.isSearch? <LocationSearchInput/>:null
    
    return (
        <div className='Map-Container'>
            {SearchBar}
            <Map 
                google={this.props.google}
                zoom={16}
                initialCenter={this.state.currentPosition}
                onReady={this.fetchPosition}
                center={this.state.currentPosition}
                className='Map-MapContainer'
            >
                <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />
                <Marker onClick={this.onMarkerClick}
                        title='Me'
                        name='HERE'
                        position={this.state.currentPosition}
                        icon={{
                            url: User_image,
                            scaledSize:  new this.props.google.maps.Size(40,40)
                            }} position={this.state.currentPosition} onClick={this.onMarkerClick}
                        />
                {this.state.drone.map(
                    drone => <Marker onClick={this.onMarkerClick}
                                    title='Drone'
                                    name={drone.name}
                                    position={drone.position}
                                    icon={{
                                        url: Drone_image,
                                        scaledSize:  new this.props.google.maps.Size(60,60)
                                        }} position={drone.position} onClick={this.onMarkerClick}
                    />
                )}
        
                <InfoWindow onClose={this.onInfoWindowClose}
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}
                >
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
            </Map>
        </div>
      
    );
  }
}

 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyBvP7VmMpVasqNbMIsUC5mwcIUmr5tVTyA')
})(MapContainer)

function getPosition() {
    return new Promise( (resolve, reject) => {
        navigator.geolocation.getCurrentPosition( position => {
            if(!position) reject(new Error('Cannot get position'))
            var p = { lat: position.coords.latitude, lng: position.coords.longitude}
            resolve(p)
        })
    })
}