import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';

type OfferProps = {
  offer: Offer;
  onActiveCard?: (offer: Offer) => void;
}

function CardItem ({offer, onActiveCard}: OfferProps): JSX.Element {
  const {type, title, price, previewImage, rating, id, isPremium, isFavorite} = offer;

  function onMouseOverHandler() {
    onActiveCard && onActiveCard(offer);
  }

  return (
    <article className="cities__card place-card" onMouseEnter={onMouseOverHandler}>
      {
        isPremium ?
          <div className="place-card__mark">
            <span>Premium</span>
          </div> : null
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`../offer/${id}`} title={`../offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active button' : ''}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.floor(rating * 100 / 5)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`offer/${id}`} title={`offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default CardItem;
