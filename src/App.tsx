import "./App.css"
import logo from "./assets/cox_automotive_logo.jpg"
import { useSelector } from "react-redux"
import Slot from "./components/slot";
import BookingModal from "./components/booking-modal";
import { Typography } from "@mui/material"

import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

const App = () => {
  const selectedAppointmentId = useSelector(
    state => state.selectedAppointmentId,
  )
  const slots = useSelector(state => state.slots)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Typography variant="h5" sx={{ margin: "20px" }}>
          <b>Today's Appointments</b>
        </Typography>
        {slots.map(slotDef => {
          return <Slot {...slotDef} key={slotDef.id} />
        })}
        {selectedAppointmentId && <BookingModal open={true} />}
      </header>
    </div>
  )
}

export default App
