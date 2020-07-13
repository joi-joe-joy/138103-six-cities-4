import {reducer, ActionType, ActionCreator} from "./user.js";
import {AuthStatus} from "../../const.js";

const userInfo = {
  avatarUrl: `/static/avatar/7.jpg`,
  email: `joi.joe.joy@mail.ru`,
  id: 1,
  isPro: false,
  name: `joi.joe.joy`
};

describe(`Reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      authorizationStatus: AuthStatus.NO_AUTH,
      authInfo: null
    });
  });

  it(`Reducer should change auth status by given value`, () => {
    expect(reducer({
      authorizationStatus: AuthStatus.NO_AUTH,
      authInfo: null
    }, {
      type: ActionType.REQUIRE_AUTH_STATUS,
      payload: AuthStatus.AUTH
    })).toEqual({
      authorizationStatus: AuthStatus.AUTH,
      authInfo: null
    });
  });

  it(`Reducer should not change auth status by the same given value`, () => {
    expect(reducer({
      authorizationStatus: AuthStatus.NO_AUTH,
      authInfo: null
    }, {
      type: ActionType.REQUIRE_AUTH_STATUS,
      payload: AuthStatus.NO_AUTH
    })).toEqual({
      authorizationStatus: AuthStatus.NO_AUTH,
      authInfo: null
    });
  });

  it(`Reducer should change auth info by given value`, () => {
    expect(reducer({
      authorizationStatus: AuthStatus.NO_AUTH,
      authInfo: null
    }, {
      type: ActionType.GET_AUTH_INFO,
      payload: userInfo
    })).toEqual({
      authorizationStatus: AuthStatus.NO_AUTH,
      authInfo: userInfo
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for change auth status returns correct action`, () => {
    expect(ActionCreator.requireAuthStatus(`AUTH`)).toEqual({
      type: ActionType.REQUIRE_AUTH_STATUS,
      payload: `AUTH`,
    });
  });

  it(`Action creator for change auth info returns correct action`, () => {
    expect(ActionCreator.getAuthInfo(userInfo)).toEqual({
      type: ActionType.GET_AUTH_INFO,
      payload: userInfo,
    });
  });
});
