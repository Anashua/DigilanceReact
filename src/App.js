import React from 'react';
import './App.css';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'

mapboxgl.accessToken = "pk.eyJ1IjoiYW5hc2h1YSIsImEiOiJja3Q1bGUxMXowOXFtMm9wZ2drejFrczZvIn0.b5jmNZ9pkpLAO3J9vdLbYA";

class App extends React.Component {

  componentDidMount() {

    // Creates new map instance
    const map = new mapboxgl.Map({
      container: this.mapWrapper,
      style: 'mapbox://styles/mapbox/streets-v10',
      center: [77.53484,12.93419],
      zoom: 13
    });

    // Creates new directions control instance
    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'metric',
      profile: 'mapbox/driving',
    });

    // Integrates directions control with map
    map.addControl(directions, 'top-left');
  }

  render() {
    return (
      // Populates map by referencing map's container property
      <div ref={el => (this.mapWrapper = el)} className="mapWrapper" />
    );
  }
}

export default App;














// import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

// mapboxgl.accessToken = 'pk.eyJ1IjoiYW5hc2h1YSIsImEiOiJja3Q1bGUxMXowOXFtMm9wZ2drejFrczZvIn0.b5jmNZ9pkpLAO3J9vdLbYA';

// export default class App extends React.PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {
//       lng: 77.53484,
//       lat: 12.93419,
//       zoom: 13
//     };
//     this.mapContainer = React.createRef();
//   }
//   componentDidMount() {
//     const { lng, lat, zoom } = this.state;
//     const map = new mapboxgl.Map({
//       container: this.mapContainer.current,
//       style: 'mapbox://styles/mapbox/streets-v11',
//       center: [lng, lat],
//       zoom: zoom
//     });
//     map.on('move', () => {
//       this.setState({
//         lng: map.getCenter().lng.toFixed(4),
//         lat: map.getCenter().lat.toFixed(4),
//         zoom: map.getZoom().toFixed(2)
//       });
//     });

//   }
//   render() {
//     const { lng, lat, zoom } = this.state;
//     return (
//       <div>
//         <div className="sidebar">
//           Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
//         </div>
//         <div ref={this.mapContainer} className="map-container" />
//       </div>
//     );
//   }
// }
