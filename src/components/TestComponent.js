import React,{Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import axios from 'axios'

const style = {
  height:'100vh',
  width: '100%'
}

class TestComponent extends Component{

    state = {
    showingInfoWindow: true, 
    activeMarker: {},         
    selectedPlace: {},
    mapLoaded: false,
    lat: 25.551402368154505,
    lng: 67.22656249999999,
    country_code: 'pk'
  };

handleMapIdle = () => {
  this.setState({
    mapLoaded: true
  });
}

onMarkerClick = (props, marker, e) => {
    this.setState(prevState => ({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  }));
}

onClose = () => {
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    });
  }
};

onMapClicked = async (mapProps, map, clickEvent) =>{
  this.setState({lat: clickEvent.latLng.lat(),lng:clickEvent.latLng.lng(),showingInfoWindow: false})
  const response = await axios.get(`https://eu1.locationiq.com/v1/reverse.php?key=589a30f10a8145&lat=${clickEvent.latLng.lat()}&lon=${clickEvent.latLng.lng()}&format=json`)
  if(response.status === 200){
    this.setState({country_code:response.data.address.country_code})
  } else {
    console.log(123)
    this.setState({country_code:"no country code"})
  }
}

render() {
    return(
        <Map
          google={this.props.google}
          style={style}
          initialCenter={{
            lat: this.state.lat,
            lng: this.state.lng
          }}
          zoom={2}
          onClick={this.onMapClicked}
          onIdle={this.handleMapIdle}
        >
            {this.state.mapLoaded && (
              <Marker position={{lat:this.state.lat,lng:this.state.lng}} onClick={this.onMarkerClick} />
            )} 
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
      <div>
        {this.state.lat},
        {this.state.lng},
        {this.state.country_code.toUpperCase()}
      </div>
    </InfoWindow>

        </Map>
    );
}
} 

export default GoogleApiWrapper({
apiKey: (process.env.GOOGLE_MAPS_API)
})(TestComponent);