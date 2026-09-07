export interface StepConfig {
  id: number
  label: string
  placeholder: string
}

export const STEPS: StepConfig[] = [
  { id: 1, label: 'username', placeholder: 'Username here' },
  { id: 2, label: 'email', placeholder: 'ex: example@email.com' },
  { id: 3, label: 'password', placeholder: 'Password' },
  { id: 4, label: 'confirm password', placeholder: 'Password' },
]

export interface WizardData {
  username: string
  email: string
  password: string
  confirmPassword: string
}

export const INITIAL_DATA: WizardData = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
}
