import {useEffect, useState, MutableRefObject} from 'react';
import {Map, TileLayer} from 'leaflet';
import { Location } from '../types/offer';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  center: Location,
  zoom: number
): Map | null {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (mapRef.current === null) {
      return;
    }

    const instance = new Map(mapRef.current, {
      center: {
        lat: center.latitude,
        lng: center.longitude
      },
      zoom: zoom
    });

    const layer = new TileLayer(
      'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      }
    );

    instance.addLayer(layer);

    setMap(instance);

    return () => {
      setMap(null);
      instance.remove();
    };
  }, [mapRef, center, zoom]);

  return map;
}

export default useMap;

