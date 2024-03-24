export const BOOK_ACTION = "BOOK_ACTION";
export const UPDATE_ACTION = "UPDATE_ACTION";
export const CANCEL_ACTION = "CANCEL_ACTION";
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const bookAppointment = (id: string, name: string, phone: string) => ({
  type: BOOK_ACTION,
  payload: {
    id,
    name,
    phone
  }
})

export const updateAppointment = (id: string, name: string, phone: string) => ({
  type: UPDATE_ACTION,
  payload: {
    id,
    name,
    phone
  }
})

export const cancelAppointment = (id: string) => ({
  type: CANCEL_ACTION,
  payload: id
})

export const openModal = (id: string) => ({
  type: OPEN_MODAL,
  payload: id
});

export const closeModal = () => ({
  type: CLOSE_MODAL
});
