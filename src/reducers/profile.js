import { CHANGE_PROFILE } from '../constants'

const initialState = {
  name: '',
  surname: '',
}

const profile = (state = initialState, action) =>
{
  switch (action.type) {
    case CHANGE_PROFILE:
      const newState = { ...state }
      newState[action.payload.name] = action.payload.value
      return newState
    default:
      return state
  }
}

export default profile
