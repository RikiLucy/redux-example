import { CHANGE_STATUS } from '../constants'

export const changeStatus = (data) => {
  return {
    type: CHANGE_STATUS,
    payload: data,
  }
}