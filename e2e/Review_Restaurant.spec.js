const assert = require('assert');

Feature('Review Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Review one restaurant', async ({ I }) => {
  I.seeElement('.card a');
  const firstRestaurant = await locate('.card a').first();
  I.click(firstRestaurant);
  const name = 'Hilmy';
  const review = 'Automation test review';

  I.seeElement('#name');
  I.fillField('#name', name);

  I.seeElement('#text');
  I.fillField('#text', review);

  I.click('#submit');

  I.seeElement(locate('#review .review-container:nth-last-of-type(1)'));
  const reviewerName = await I.grabTextFrom(locate('#review .review-container:nth-last-of-type(1) .name'));
  const reviewerReview = await I.grabTextFrom(locate('#review .review-container:nth-last-of-type(1) .review-body'));

  assert.strictEqual(name, reviewerName);
  assert.strictEqual(review, reviewerReview);
});
