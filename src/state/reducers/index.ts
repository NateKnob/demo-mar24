import type { AppAction } from "../actions";
import { ActionType } from "../actions"

export interface SlotDefinition {
  id: string
  startTime: string
  endTime: string
  booked?: boolean
  name?: string
  phone?: string
  email?: string
}

export interface RootState {
  slots: SlotDefinition[]
  selectedAppointmentId?: string
}

export const initialState: RootState = {
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

const mainReducer = (
  state: RootState | Partial<RootState> | undefined,
  action: AppAction,
) => {
  switch (action.type) {
    case ActionType.BOOK_ACTION:
    case ActionType.UPDATE_ACTION:
      return {
        ...state,
        slots: state?.slots?.map((oldSlot: SlotDefinition) => {
          if (oldSlot.id === action.payload.id) {
            return {
              ...oldSlot,
              booked: true,
              name: action.payload.name,
              phone: action.payload.phone,
              email: action.payload.email,
            }
          } else {
            return oldSlot
          }
        }),
        selectedAppointmentId: undefined,
      }
    case ActionType.DELETE_ACTION:
      return {
        ...state,
        slots: state?.slots?.map((oldSlot: SlotDefinition) => {
          if (oldSlot.id === action.payload) {
            return {
              ...oldSlot,
              booked: false,
              name: undefined,
              phone: undefined,
              email: undefined
            }
          } else {
            return oldSlot
          }
        }),
        selectedAppointmentId: undefined,
      }
    case ActionType.OPEN_MODAL:
      return {
        ...state,
        selectedAppointmentId: action.payload,
      }
    case ActionType.CLOSE_MODAL:
      return {
        ...state,
        selectedAppointmentId: undefined,
      }
    default:
      return state
  }
}

export default mainReducer
