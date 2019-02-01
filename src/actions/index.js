import { FETCH_TODOS } from './types'

const API_URL = "https://jsonplaceholder.typicode.com/todos/"

export function fetchTodos() {
  return dispatch => {
    fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      console.log('fetchTodos Action', data);
      dispatch({ type: FETCH_TODOS, payload: data})
    })
  }
}
