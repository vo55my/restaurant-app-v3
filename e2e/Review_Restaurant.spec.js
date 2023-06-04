const assert = require('assert');

Feature('Review Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Review one restaurant', async ({ I }) => {
  I.wait(5);
  I.seeElement('.card a');
  const firstRestaurant = await locate('.card a').first();
  I.wait(5);
  I.click(firstRestaurant);
  const name = 'Hilmy';
  const review = 'Automation test review';

  I.wait(5);
  I.seeElement('#name');
  I.fillField('#name', name);

  I.wait(5);
  I.seeElement('#text');
  I.fillField('#text', review);

  I.wait(5);
  I.click('#submit');

  I.wait(5);
  I.seeElement(locate('#review .review-container:nth-last-of-type(1)'));
  const reviewerName = (await I.grabTextFrom(locate('#review .review-container:nth-last-of-type(1) .review-head .name'))).split(',')[0];
  const reviewerReview = await I.grabTextFrom(locate('#review .review-container:nth-last-of-type(1) .review-body'));

  assert.strictEqual(name, reviewerName);
  assert.strictEqual(review, reviewerReview);
});
