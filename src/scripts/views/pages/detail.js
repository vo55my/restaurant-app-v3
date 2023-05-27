import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/RestaurantSource';
import {
  createRestoDetailTemplate, createReviewTemplate, loader, failedLoad,
} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import formReview from '../../utils/form-review';
import '../component/review';

const Detail = {
  async render() {
    return `
      <div class="loading"></div>
      <div id="restaurant"></div>
      <review-section></review-section>
    `;
  },

  async afterRender() {
    const load = document.querySelector('.loading');
    try {
      load.innerHTML = loader();
      const url = UrlParser.parseActiveUrlWithoutCombiner();

      const restaurant = await RestaurantSource.getDetailRestaurant(url.id);
      const restoContainer = document.querySelector('#restaurant');
      restoContainer.innerHTML = createRestoDetailTemplate(restaurant);

      const reviewContainer = document.querySelector('#review');
      reviewContainer.innerHTML += createReviewTemplate(restaurant.customerReviews);

      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          pictureId: restaurant.pictureId,
          rating: restaurant.rating,
          description: restaurant.description,
          city: restaurant.city,
        },
      });

      if (navigator.onLine) {
        formReview.send(url);
      } else {
        console.log('Offline');
      }

      load.style.display = 'none';
    } catch (error) {
      load.innerHTML = failedLoad();
    }
  },
};

export default Detail;
