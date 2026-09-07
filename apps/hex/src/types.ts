export interface HexData {
  email: string
  username: string
  password: string
  confirmPassword: string
  firstName: string
  lastName: string
  gender: string
  day: string
  month: string
  year: string
  phone: string
  address: string
  paymentMethod: string
  holderName: string
  cardNumber: string
  cvc: string
  expiryMonth: string
  expiryYear: string
}

export interface StepConfig {
  id: number
  label: string
}

export const STEPS: StepConfig[] = [
  { id: 1, label: 'About' },
  { id: 2, label: 'Personal' },
  { id: 3, label: 'Payment' },
]

export const INITIAL_DATA: HexData = {
  email: '',
  username: '',
  password: '',
  confirmPassword: '',
  firstName: '',
  lastName: '',
  gender: '',
  day: '',
  month: '',
  year: '',
  phone: '',
  address: '',
  paymentMethod: '',
  holderName: '',
  cardNumber: '',
  cvc: '',
  expiryMonth: '',
  expiryYear: '',
}
