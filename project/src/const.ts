export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export interface Place {
  id: number,
  img: string,
  name: string,
  price: number,
  type: string,
  premium: boolean,
  active: boolean,
  stars: string
}

export type Places = Place[]
