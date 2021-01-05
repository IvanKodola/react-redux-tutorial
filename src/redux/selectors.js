import { VISIBILITY_FILTERS } from '../constants';
import { createSelector } from 'reselect'

const getVisibilityFilter = (state) => state.visibilityFilter;

export const getTodosState = state => state.todos;

export const getTodoList = state =>
  getTodosState(state) ? getTodosState(state).allIds : [];

export const getTodoById = (state, id) =>
  getTodosState(state) ? { ...getTodosState(state).byIds[id], id } : {};

export const getTodos = state => getTodoList(state).map(id => getTodoById(state, id));

export const getTodosByVisibilityFilter = createSelector(
  [ getVisibilityFilter, getTodos ],
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case VISIBILITY_FILTERS.COMPLETED:
        return todos.filter(todo => todo.completed)
      case VISIBILITY_FILTERS.INCOMPLETE:
        return todos.filter(todo => !todo.completed)
      case VISIBILITY_FILTERS.ALL:
      default:
        return todos
    }
  }
);

const getKeyword = (state) => state.keyword

export const getVisibleTodosFilteredByKeyword = createSelector(
  [ getTodosByVisibilityFilter, getKeyword ],
  (visibleTodos, keyword) => visibleTodos.filter(
    todo => todo.content.includes(keyword)
  )
)
