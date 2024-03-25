import { useState, Fragment, SyntheticEvent } from "react"
import styles from "./BookingModal.module.css"
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Modal,
  Snackbar,
  SnackbarContent,
  TextField,
  Typography
} from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import {
  bookAppointment,
  updateAppointment,
  deleteAppointment,
  openModal,
  closeModal,
} from "../../state/actions"
import { useDispatch, useSelector } from "react-redux"

export interface BookingModalProps {
  open?: boolean
}

export const BookingModal = (props: BookingModalProps) => {
  const { open } = props

  const selectedAppointmentId = useSelector(
    state => state.selectedAppointmentId,
  )
  const slots = useSelector(state => state.slots)
  const selectedSlot = slots.find(s => s.id === selectedAppointmentId)

  const [name, setName] = useState<string>(selectedSlot.name || "")
  const [phone, setPhone] = useState<string>(selectedSlot.phone || "")
  const [nameError, setNameError] = useState<boolean>(false)
  const [phoneError, setPhoneError] = useState<boolean>(false)

  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(closeModal())
  }

  const validateInputs = () => {
    setNameError(!name)
    setPhoneError(!phone)
    return !!name && !!phone
  }

  const handleBook = () => {
    if (!validateInputs()) {
      setWarningOpen(true)
      return
    }
    dispatch(bookAppointment(selectedSlot.id, name, phone))
  }

  const handleUpdate = () => {
    if (!validateInputs()) {
      setWarningOpen(true)
      return
    }
    dispatch(updateAppointment(selectedSlot.id, name, phone))
  }

  const handleDeletion = () => {
    dispatch(deleteAppointment(selectedSlot.id, name, phone))
  }

  const handleNameChange = event => {
    if (!!event.target.value) setNameError(false)
    setName(event.target.value)
  }

  const handlePhoneChange = event => {
    if (!!event.target.value) setPhoneError(false)
    setPhone(event.target.value)
  }

  const [warningOpen, setWarningOpen] = useState(false)

  const handleOpenSnackbar = () => {
    setWarningOpen(true)
  }

  const handleCloseSnackbar = (
    event: SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === "clickaway") {
      return
    }
    setWarningOpen(false)
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      className={styles.bookingModal}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Fragment>
        <Card className={styles.bookingModalCard}>
          <CardHeader
            title={
              <div className={styles.bookingModalHeaderContainer}>
                <Typography variant="h6" className={styles.bookingModalHeader}>
                  Appointment {selectedSlot?.startTime} -{" "}
                  {selectedSlot?.endTime}
                </Typography>
                <IconButton
                  size="small"
                  aria-label="close"
                  color="inherit"
                  onClick={handleClose}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </div>
            }
          />
          <CardContent>
            <div>
              Enter your information and a representative will follow up with
              you as soon as possible!
            </div>
            <div>
              <TextField
                required
                error={nameError}
                id="name-field"
                label="Name"
                variant="standard"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div>
              <TextField
                required
                error={phoneError}
                id="phone-field"
                label="Phone"
                variant="standard"
                value={phone}
                onChange={handlePhoneChange}
              />
            </div>
          </CardContent>
          <CardActions className={styles.bookingModalCardActions}>
            {!selectedSlot.booked ? (
              <Button size="medium" onClick={handleBook}>
                Book
              </Button>
            ) : (
              <>
                <Button size="medium" onClick={handleUpdate}>
                  Update
                </Button>
                <Button
                  size="medium"
                  color="error"
                  onClick={handleDeletion}
                >
                  delete
                </Button>
              </>
            )}
          </CardActions>
        </Card>
        <Snackbar
          id="warning-snackbar"
          open={warningOpen}
          autoHideDuration={200000}
          onClose={handleCloseSnackbar}
          className={styles.warningSnackbar}
        >
          <SnackbarContent
            style={{
              backgroundColor: "#ff604f",
            }}
            message="Name and Phone must not be empty"
            action={
              <Fragment>
                <IconButton
                  size="small"
                  aria-label="close"
                  color="inherit"
                  onClick={handleCloseSnackbar}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </Fragment>
            }
          />
        </Snackbar>
      </Fragment>
    </Modal>
  )
}
export default BookingModal;
