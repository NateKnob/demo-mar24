import {
  BOOK_ACTION,
  UPDATE_ACTION,
  CANCEL_ACTION,
  OPEN_MODAL,
  CLOSE_MODAL,
} from "../actions"

export interface SlotDefinition {
  id: string
  startTime: string
  endTime: string
  booked?: boolean
  name?: string
  phone?: string
}

export interface appState {
  slots: SlotDefinition[]
  selectedAppointmentId?: string
}

export const initialState: appState = {
  slots: [
    { id: "a", startTime: "9 AM", endTime: "10 AM" },
    { id: "b", startTime: "10 AM", endTime: "11 AM" },
    { id: "c", startTime: "11 AM", endTime: "12 PM" },
    { id: "d", startTime: "12 PM", endTime: "1 PM" },
    { id: "e", startTime: "1 PM", endTime: "2 PM" },
    { id: "f", startTime: "2 PM", endTime: "3 PM" },
    { id: "g", startTime: "3 PM", endTime: "4 PM" },
    { id: "h", startTime: "4 PM", endTime: "5 PM" },
  ],
}

const mainReducer = (state: appState, action) => {
  switch (action.type) {
    case BOOK_ACTION:
      return {
        ...state,
        slots: state.slots.map(oldSlot => {
          if (oldSlot.id === action.payload.id) {
            return {
              ...oldSlot,
              booked: true,
              name: action.payload.name,
              phone: action.payload.phone,
            }
          } else {
            return oldSlot
          }
        }),
        selectedAppointmentId: undefined,
      }
    case UPDATE_ACTION:
      return {
        ...state,
        slots: state.slots.map(oldSlot => {
          if (oldSlot.id === action.payload.id) {
            return {
              ...oldSlot,
              booked: true,
              name: action.payload.name,
              phone: action.payload.phone,
            }
          } else {
            return oldSlot
          }
        }),
        selectedAppointmentId: undefined,
      }
    case CANCEL_ACTION:
      return {
        ...state,
        slots: state.slots.map(oldSlot => {
          if (oldSlot.id === action.payload) {
            return {
              ...oldSlot,
              booked: false,
              name: undefined,
              phone: undefined,
            }
          } else {
            return oldSlot
          }
        }),
        selectedAppointmentId: undefined,
      }
    case OPEN_MODAL:
      return {
        ...state,
        selectedAppointmentId: action.payload,
      }
    case CLOSE_MODAL:
      return {
        ...state,
        selectedAppointmentId: undefined,
      }
    default:
      return state
  }
}

export default mainReducer
