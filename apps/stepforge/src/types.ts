export interface BookingData {
  firstName: string
  lastName: string
  phone: string
  email: string
  dobDay: string
  dobMonth: string
  dobYear: string
  address: string
  room: string
  day: string
  time: string
}

export interface StepConfig {
  id: number
  label: string
}

export const STEPS: StepConfig[] = [
  { id: 1, label: 'Personal Info' },
  { id: 2, label: 'Booking' },
  { id: 3, label: 'Confirm' },
]

export const INITIAL_DATA: BookingData = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  dobDay: '15',
  dobMonth: 'Jan',
  dobYear: '2024',
  address: '',
  room: 'Conference Room A',
  day: '',
  time: '8:00am - 10:00am',
}

export const ROOM_OPTIONS = ['Conference Room A', 'Meeting Room B', 'Single', 'Double']

export const TIME_OPTIONS = [
  '8:00am - 10:00am',
  '9:00am - 21:00pm',
  '10:00am - 22:00pm',
  '12:00am - 24:00pm',
]

export const DAY_OPTIONS = Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, '0'))

export const MONTH_OPTIONS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

export const YEAR_OPTIONS = Array.from({ length: 10 }, (_, i) => String(2024 - i))
