export enum ActionType {
  BOOK_ACTION = "BOOK_ACTION",
  UPDATE_ACTION = "UPDATE_ACTION",
  DELETE_ACTION = "DELETE_ACTION",
  OPEN_MODAL = "OPEN_MODAL",
  CLOSE_MODAL = "CLOSE_MODAL",
}

export interface BookAppointmentAction {
  type: ActionType.BOOK_ACTION
  payload: {
    id: string
    name: string
    phone: string
  }
}

export const bookAppointment = (
  id: string,
  name: string,
  phone: string,
): BookAppointmentAction => ({
  type: ActionType.BOOK_ACTION,
  payload: {
    id,
    name,
    phone,
  },
})

export interface UpdateAppointmentAction {
  type: ActionType.UPDATE_ACTION
  payload: {
    id: string
    name: string
    phone: string
  }
}

export const updateAppointment = (
  id: string,
  name: string,
  phone: string,
): UpdateAppointmentAction => ({
  type: ActionType.UPDATE_ACTION,
  payload: {
    id,
    name,
    phone,
  },
})

export interface DeleteAppointmentAction {
  type: ActionType.DELETE_ACTION
  payload: string
}

export const deleteAppointment = (id: string): DeleteAppointmentAction => ({
  type: ActionType.DELETE_ACTION,
  payload: id,
})

export interface OpenModalAction {
  type: ActionType.OPEN_MODAL
  payload: string
}

export const openModal = (id: string): OpenModalAction => ({
  type: ActionType.OPEN_MODAL,
  payload: id,
})

export interface CloseModalAction {
  type: ActionType.CLOSE_MODAL
}

export const closeModal = (): CloseModalAction => ({
  type: ActionType.CLOSE_MODAL,
})

export type AppAction =
  | BookAppointmentAction
  | UpdateAppointmentAction
  | DeleteAppointmentAction
  | OpenModalAction
  | CloseModalAction
