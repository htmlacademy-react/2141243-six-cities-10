import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { Offers } from '../../types/offer';
import FavoriteCardItem from '../../components/favoriteCardItem/favoriteCardItem';
import FavoritesScreenEmpty from '../../pages/favoritesScreenEmpty/favoritesScreenEmpty';

type FavotitesScreenProp = {
  offers: Offers;
}

function FavotitesScreen({offers}: FavotitesScreenProp): JSX.Element {
  const favoriteOffers = offers.filter((it) => it.isFavorite);

  if (favoriteOffers.length === 0) {
    return <FavoritesScreenEmpty />;
  }

  const favoriteOffersObject = Object.fromEntries(favoriteOffers.map((m) => [m.city.name, favoriteOffers.filter((it) => it.city.name === m.city.name)]));

  return (
    <>
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">

              {
                Object.keys(favoriteOffersObject).map((city) => (
                  <li key={city} className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="/">
                          <span>{city}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">

                      {
                        favoriteOffersObject[city].map((offer) => (
                          <FavoriteCardItem key={offer.id} offer={offer} />
                        ))
                      }

                    </div>
                  </li>
                ))
              }

            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default FavotitesScreen;
