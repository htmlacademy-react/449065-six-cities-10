import Place from '../place/place';
import { Offer } from '../../types/offer';
import { useState } from 'react';

type PlaceListProps = {
  offers: Offer[],
}

function PlaceList({offers}: PlaceListProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeOffer, setActiveOffer] = useState({});

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((item) => <Place key={item.id} img={item.img} type={item.type} price={item.price} name={item.name} premium={item.premium} active={item.active} stars={item.stars} id={item.id} setActiveOffer={() => setActiveOffer(item)} />)}
    </div>
  );
}

export default PlaceList;
