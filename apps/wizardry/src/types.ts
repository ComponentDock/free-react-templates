export interface WizardData {
  email: string
  password: string
  confirmPassword: string
  cardName: string
  cardNumber: string
  cvc: string
  expiration: string
  agreementAccepted: boolean
}

export interface StepConfig {
  id: number
  label: string
  sublabel: string
}

export const STEPS: StepConfig[] = [
  { id: 1, label: 'Account Setup', sublabel: 'Account Details' },
  { id: 2, label: 'Billing Setup', sublabel: 'Billing Details' },
  { id: 3, label: 'Agreement', sublabel: 'Our site policy' },
]

export const INITIAL_DATA: WizardData = {
  email: '',
  password: '',
  confirmPassword: '',
  cardName: '',
  cardNumber: '',
  cvc: '',
  expiration: '',
  agreementAccepted: false,
}
