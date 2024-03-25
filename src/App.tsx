import "./App.css"
import logo from "./assets/cox_automotive_logo.jpg"
import { useAppSelector } from "./app/hooks"
import Slot from "./components/slot"
import type { SlotDefinition } from "./state/reducers"
import BookingModal from "./components/booking-modal"
import { Typography } from "@mui/material"

import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

const App = () => {
  const selectedAppointmentId = useAppSelector(
    state => state?.selectedAppointmentId,
  )
  const slots = useAppSelector(state => state?.slots)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Typography variant="h5" sx={{ margin: "20px" }}>
          <b>Today's Appointments</b>
        </Typography>
        {slots?.map((slot: SlotDefinition) => {
          return <Slot {...slot} key={slot.id} />
        })}
        {selectedAppointmentId && <BookingModal open={true} />}
      </header>
    </div>
  )
}

export default App
