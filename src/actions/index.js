import { FETCH_TODOS, POST_TODO } from './types'

// const API_URL = "https://jsonplaceholder.typicode.com/todos/"
const API_URL = "http://localhost:3001/api/todos"

export function fetchTodos() {
  return dispatch => {
    fetch(API_URL, {
      method: 'GET',
      // headers: {
      //   'Access-Control-Allow-Origin':'*',
      // }
    })
    .then(res => res.json())
    .then(data => {
      console.log('fetchTodos Action', data);
      dispatch({ type: FETCH_TODOS, payload: data})
    })
  }
}

export function postTodo(data) {
  return (dispatch, getState) => {
    // console.log('Posting', data);
    fetch(API_URL, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {

      console.log('postTodo Action', data);
      dispatch(fetchTodos())
      // dispatch({ type: POST_TODO, payload: data})
    })
  }
}
