export interface Location {
  latitude: number;
  longitude: number;
  zoom: number;
}

export interface Offer {
  id: number,
  img: string,
  name: string,
  price: number,
  type: string,
  premium: boolean,
  active: boolean,
  stars: string,
  isFavorite: boolean,
  location: Location,
  city: string,
}
