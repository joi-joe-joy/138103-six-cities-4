import React from "react";
import renderer from "react-test-renderer";
import PlacesList from "./places-list.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

const offers = [
  {
    id: 1,
    title: `Canal View Prinsengracht`,
    premium: true,
    pictures: [
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/studio-photos.jpg`
    ],
    price: 280,
    rating: 3.8,
    type: `house`,
    bedrooms: 3,
    amenities: [`Indoor fireplace`, `Kitchen`, `Wifi`, `Washer`],
    maxGuestsNumber: `Max 2 adults, 1 children`,
    description: `The apartment has a Queen size bed and a very wide modern couch that turns into a bed for a single person by moving the single portion of the couch to the bottom part of the love seat portion of the couch to create a long comfortable bed for a 3rd person. I hope you will enjoy the decor, it has a european feel towards the French side. You will be in the heart of the East Village in Manhattan, considered to be one of the most exciting and dynamic neighborhoods of the world.`,
    host: {
      photo: ``,
      name: `John Donn`,
      super: true
    }
  },
  {
    id: 5,
    title: `Nice, cozy, warm big bed apartment`,
    premium: false,
    pictures: [
      `img/apartment-01.jpg`,
    ],
    price: 80,
    rating: 4.2,
    type: `room`,
    bedrooms: 1,
    amenities: [`Iron`, `TV`, `Hangers`, `Hair dryer`],
    maxGuestsNumber: `Max 1 adult`,
    description: `This apartment is flooded with light. It is 2 blocks from the 6 train and 6 from the q train. It is is a opulent area, 5 minute walk from Central Park. It's a 5 floor walk up, but stairs are easy and wide. There is an eat-in kitchen plus small dining room table. Beautiful, clean, lovely apartment.`,
    host: {
      photo: ``,
      name: `Alicia Bell`,
      super: false
    }
  }
];

describe(`Render PlacesList`, () => {
  it(`render PlacesList correctly`, () => {
    const store = mockStore({
      card: {}
    });

    const tree = renderer.create(
        <Provider store={store}>
          <PlacesList
            onCardHover={()=>{}}
            onCardHoverOut={()=>{}}
            type={`cities`}
            offers={offers}
          />
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`render PlacesList correctly type Cities`, () => {
    const store = mockStore({
      card: {}
    });

    const tree = renderer.create(
        <Provider store={store}>
          <PlacesList
            onCardHover={()=>{}}
            onCardHoverOut={()=>{}}
            type={`cities`}
            offers={offers}
          />
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`render PlacesList correctly Near`, () => {
    const store = mockStore({
      card: {}
    });

    const tree = renderer.create(
        <Provider store={store}>
          <PlacesList
            onCardHover={()=>{}}
            onCardHoverOut={()=>{}}
            type={`near`}
            offers={offers}
          />
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
