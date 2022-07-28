import { Link } from 'react-router-dom';
import FavoriteList from '../../components/favoriteList/favoriteList';
import Header from '../../components/header/header';
import { Offer } from '../../types/offer';

type FavoriteProps = {
  offers: Offer[],
}

function Favorites({offers}: FavoriteProps): JSX.Element {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <Link className="locations__item-link" to={'/'}><span>Amsterdam</span></Link>
                  </div>
                </div>
                <FavoriteList favoriteOffers={favoriteOffers} />
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <Link className="locations__item-link" to={'/'}>
                      <span>Cologne</span>
                    </Link>
                  </div>
                </div>
                <FavoriteList favoriteOffers={favoriteOffers} />
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={'/'}>
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33"
          />
        </Link>
      </footer>
    </div>
  );
}

export default Favorites;
