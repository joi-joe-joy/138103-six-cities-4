import * as React from "react";
import * as renderer from "react-test-renderer";
import Review from "./review";

const review = {
  comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  date: `2019-05-08T14:13:56.569Z`,
  id: 1,
  rating: 4,
  user: {
    avatarUrl: `img/1.png`,
    id: 4,
    isPro: false,
    name: `Max`
  }
};


describe(`Render Review`, () => {
  it(`Render Review correctly`, () => {
    const tree = renderer
      .create(<Review review={review}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

