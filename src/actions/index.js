import { createAction } from 'redux-actions';
import { Actions } from '../constants';


/**
 * this variable holds unique incremental ID for every todo item.
 */
let nextTodoId = 0;
let componentId = 0;

const payload = {
  getAddTodo: (text) => {
    return {
      id: nextTodoId++,
      text
    };
  },
  getMoveTodo: (sourceTodo, targetTodo) => {
    return {
      id: sourceTodo.id,
      text: sourceTodo.text,
      completed: sourceTodo.completed,
      target_id: targetTodo.id
    }
  },
  getVisibilityFilter: (filter) => {
    return {
      filter
    }
  },
  getToggleTodo: (id) => {
    return {
      id
    }
  },
  getAddComponent: (component) => {
    return {
      id: componentId++,
      component
    }
  }
};
export const addCompnent = createAction(Actions.addComponent, payload.getAddComponent);

export const addTodo = createAction(Actions.addTodo, payload.getAddTodo);

export const moveTodo = createAction(Actions.moveTodo, payload.getMoveTodo);

export const toggleTodo = createAction(Actions.toggleTodo, payload.getToggleTodo);

export const setVisibilityFilter = createAction(Actions.visibilityFilter, payload.getVisibilityFilter);
