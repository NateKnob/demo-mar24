import styles from "./Slot.module.css"
import {
  Button,
  Card,
  CardActions,
  CardHeader,
  Typography,
} from "@mui/material"
import { openModal } from "../../state/actions"
import { useAppDispatch } from "../../app/hooks"
import type { SlotDefinition as SlotProps } from "../../state/reducers"

export const Slot = (props: SlotProps) => {
  const {
    id = "",
    startTime = 1,
    endTime = 2,
    booked = false,
    name = "",
  } = props

  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(openModal(id))
  }

  return (
    <Card
      variant="outlined"
      className={styles.slot}
      sx={
        booked
          ? {
              border: "1px solid red",
              backgroundColor: "#ffefef",
            }
          : {}
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
export default Slot
