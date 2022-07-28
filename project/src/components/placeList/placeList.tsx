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
      {offers.map((item) => <Place key={item.id} {...item} setActiveOffer={() => setActiveOffer(item)} />)}
    </div>
  );
}

export default PlaceList;
