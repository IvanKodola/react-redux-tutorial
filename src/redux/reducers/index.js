import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import todos from "./todos";
import keyword from './keyword';

export default combineReducers({ todos, visibilityFilter, keyword });
