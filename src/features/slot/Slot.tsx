import { useState } from "react"
import styles from "./Slot.module.css"
// import { useGetQuotesQuery } from "./quotesApiSlice"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardHeader from "@mui/material/CardHeader"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { openModal } from "../../state/actions"
import { useDispatch } from "react-redux"

export interface SlotProps {
  id: string
  startTime: string
  endTime: string
  booked?: boolean
  name?: string
  phone?: string
}

export const Slot = (props: SlotProps) => {
  const {
    id = "",
    startTime = 1,
    endTime = 2,
    booked = false,
    name = "",
    phone = "",
  } = props
  const [numberOfQuotes, setNumberOfQuotes] = useState(10)

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(openModal(id))
  }

  return (
    <Card
      variant="outlined"
      className={styles.slot}
      sx={
        booked && {
          border: "1px solid red",
          backgroundColor: "#ffefef",
        }
      }
    >
      <CardHeader
        sx={{
          display: "flex",
          flex: "1",
        }}
        title={
          <Typography className={styles.slotHeader}>
            {startTime} - {endTime}
            {booked && `: ${name}`}
          </Typography>
        }
      />
      <CardActions>
        <Button size="small" onClick={handleClick}>
          {booked ? "Update" : "Book"}
        </Button>
      </CardActions>
    </Card>
  )
}
