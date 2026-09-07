export interface WizardData {
  email: string
  password: string
  confirmPassword: string
  twitter: string
  facebook: string
  google: string
  name: string
  phone: string
  address: string
}

export interface StepConfig {
  id: number
  label: string
}

export const STEPS: StepConfig[] = [
  { id: 1, label: 'Account Setup' },
  { id: 2, label: 'Social Profiles' },
  { id: 3, label: 'Personal Details' },
]

export const INITIAL_DATA: WizardData = {
  email: '',
  password: '',
  confirmPassword: '',
  twitter: '',
  facebook: '',
  google: '',
  name: '',
  phone: '',
  address: '',
}
