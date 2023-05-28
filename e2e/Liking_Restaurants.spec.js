/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorites');
});

const likingRestaurant = async ({ I }) => {
  I.see('No Favorite Restaurant', '.title');

  I.amOnPage('/');
  I.seeElement('.card a');
  const firstRestaurant = await locate('.card a').first();
  I.click(firstRestaurant);
  const firstRestaurantTitle = await I.grabTextFrom('.resto-name');

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.seeElement('.card');
  const likedRestaurant = await I.grabTextFrom('.card-title');
  assert.strictEqual(firstRestaurantTitle, likedRestaurant);
};

Scenario('showing empty liked restaurant', ({ I }) => {
  I.see('No Favorite Restaurant', '.title');
});

Scenario('liking one restaurant', async ({ I }) => {
  await likingRestaurant({ I });
});

Scenario('unliking one restaurant', async ({ I }) => {
  await likingRestaurant({ I });

  I.amOnPage('/#/favorites');
  I.seeElement('.card');
  I.click('.card a');

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.see('No Favorite Restaurant', '.title');
});
