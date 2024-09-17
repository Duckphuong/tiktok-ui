import { SET_TODO_INPUT, ADD_TODO_INPUT } from './constants';

export const setTodoInput = (payload) => ({
    type: SET_TODO_INPUT,
    payload,
});

export const addTodoInput = (payload) => ({
    type: ADD_TODO_INPUT,
    payload,
});
