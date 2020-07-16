import {combineReducers} from "redux";
import {reducer as data} from "./data/data.js";
import {reducer as place} from "./place/place.js";
import {reducer as user} from "./user/user.js";
import {reducer as comments} from "./comments/comments.js";
import {reducer as favorite} from "./favorite/favorite.js";
import {NameSpace} from "./name-space.js";

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.PLACE]: place,
  [NameSpace.USER]: user,
  [NameSpace.COMMENTS]: comments,
  [NameSpace.FAVORITE]: favorite,
});
