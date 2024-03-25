export const BOOK_ACTION = "BOOK_ACTION"
export const UPDATE_ACTION = "UPDATE_ACTION"
export const DELETE_ACTION = "DELETE_ACTION"
export const OPEN_MODAL = "OPEN_MODAL"
export const CLOSE_MODAL = "CLOSE_MODAL"

export const bookAppointment = (id: string, name: string, phone: string) => ({
  type: BOOK_ACTION,
  payload: {
    id,
    name,
    phone,
  },
})

export const updateAppointment = (id: string, name: string, phone: string) => ({
  type: UPDATE_ACTION,
  payload: {
    id,
    name,
    phone,
  },
})

export const deleteAppointment = (id: string) => ({
  type: DELETE_ACTION,
  payload: id,
})

export const openModal = (id: string) => ({
  type: OPEN_MODAL,
  payload: id,
})

export const closeModal = () => ({
  type: CLOSE_MODAL,
})
