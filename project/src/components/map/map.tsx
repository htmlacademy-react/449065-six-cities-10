import leaflet from 'leaflet';
import { Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef, useEffect } from 'react';
import { Offer } from '../../types/offer';
import { City } from '../../types/city';
import useMap from '../../hooks/useMap';

type MapProps = {
  offers: Offer[],
  city: City,
};

const icon = leaflet.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

// иконка активного маркера
// const iconActive = leaflet.icon({
//   iconUrl: 'img/pin-active.svg',
//   iconSize: [40, 40],
//   iconAnchor: [20, 40]
// });

function Map({offers, city}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const points = offers.map((item) => item.location);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude
        });

        marker
          .setIcon(icon)
          .addTo(map);
      });
    }
  }, [map, points]);

  return (
    <div style={{width: '512px', height: '849px'}} ref={mapRef} id="map">
    </div>
  );
}

export default Map;
