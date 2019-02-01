import { combineReducers } from 'redux';
import { FETCH_TODOS } from '../actions/types'


const initialState = {
  todos: []
}

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS:
    console.log('fetchTodos Reducer', action);
      return action.payload


    default:
      return state;
  }
}



const rootReducer = combineReducers({
  todos: todosReducer,
})

export default rootReducer;
