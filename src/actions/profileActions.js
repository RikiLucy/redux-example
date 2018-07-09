import { CHANGE_PROFILE } from '../constants'

export const changeProfile = (data) => {
  return {
    type: CHANGE_PROFILE,
    payload: data,
  }
}