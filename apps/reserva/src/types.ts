export interface BookingData {
  email: string
  country: string
  password: string
  budget: string
  newsletter: boolean
  roomType: 'single' | 'family' | 'business'
  roomDescription: string
}

export interface StepConfig {
  id: number
  label: string
}

export const STEPS: StepConfig[] = [
  { id: 1, label: 'Account' },
  { id: 2, label: 'Room type' },
  { id: 3, label: 'Extra details' },
]

export const INITIAL_DATA: BookingData = {
  email: '',
  country: '',
  password: '',
  budget: '',
  newsletter: false,
  roomType: 'business',
  roomDescription: '',
}
