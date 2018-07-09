const initialState = {
  stat: 'initial stat',
}

const statistics = (state = initialState, action) =>
{
  if (action.type === 'CHANGE_STATISTICS') {
    const newState = { ...state }
    newState[action.payload.name] = action.payload.value
    return newState
  }
  return state
}

export default statistics
