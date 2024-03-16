import { Marker, MapContainer, Popup, TileLayer, useMap, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet.heat";
import axios from 'axios';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query'; // Import QueryClient
import { useState } from 'react'; // 'locationfound' is not used, removed it

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

async function Fetchdata() {
  const data = await axios.get('http://127.0.0.1:8000/fetch_coordinates');
  return data;
}

const queryClient = new QueryClient(); // Create a new QueryClient instance

export default function Home() { // Export Home component as default
  const { data, isSuccess } = useQuery("mydata", Fetchdata);

  console.log(data && data.data);
  console.log(data);

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <MapContainer
          style={{ width: "100vw", height: "100vh" }}
          attributionControl={false}
          center={[30.93925700144764, 69.5339985983349]}
          zoom={12}
          zoomControl={false}
          markerZoomAnimation={true}
          scrollWheelZoom={true}
        >
          <HeatMap />
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[30.93925700144764, 69.5339985983349]}>
            <Popup>This is marker</Popup>
          </Marker>
          <LocationMarker />
        </MapContainer>
      </div>
    </QueryClientProvider>
  );
};

function HeatMap() {
  const { data, isSuccess } = useQuery("mydata", Fetchdata);
  const map = useMap();

  console.log(data && data.data);

  // Check if the query was successful and data is available
  if (!isSuccess) {
    // You can render an error message or return early
    return <div>Error loading data</div>;
  }

  // Assuming data.data is an array with [latitude, longitude] pairs
  const addressPoints = data.data.map(function (p) {
    return [p.latitude, p.longitude, p.opacity];
  });

  var heat = L.heatLayer(addressPoints, { radius: 25 }).addTo(map);

  // You may want to return null or some other UI if the heatmap is rendered asynchronously
  return null;
}
