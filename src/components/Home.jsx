import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Home = () => {
  // Define the position for the center of the map
  const position = [51.505, -0.09]; // Example coordinates (London)

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className='text-6xl font-semibold text-center my-12'>
        {/* MapContainer should be the root element */}
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ width: '100%', height: '400px' }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Home;
