import { CHANGE_STATUS } from '../constants'

const initialState = {
  profile: 'undefined',
}

const components = (state = initialState, action) =>
{
  if (action.type === CHANGE_STATUS) {
    const newState = { ...state }
    newState[action.payload.name] = action.payload.status
    return newState
  }
  return state
}

export default components
