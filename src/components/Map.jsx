import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map({ data }) {
  const position = data
    ? [data.location.lat.toFixed(3), data.location.lng.toFixed(3)]
    : [];

  return (
    <>
      {data ? (
        <MapContainer
          key={JSON.stringify(data)}
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%", zIndex: "-1" }}
        >
          <TileLayer
            url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2FtLXhhbmRlciIsImEiOiJjbGU0ZHRmYjQwMjNqM29wYmZrYWNzZTNwIn0.kQRMnGuofJIPw82mjbYK8A"
            attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> | &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            maxZoom={18}
            id="mapbox/streets-v11"
            tileSize={512}
            zoomOffset={-1}
            accessToken="YOUR_ACCESS_TOKEN_HERE"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default Map;
