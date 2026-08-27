export interface ButtonVariant {
  label: string
  colorClass: string
}

export const SOLID_VARIANTS: ButtonVariant[] = [
  { label: 'Primary', colorClass: 'bg-primary text-white hover:bg-primary-hover' },
  { label: 'Secondary', colorClass: 'bg-secondary text-white hover:bg-secondary-hover' },
  { label: 'Success', colorClass: 'bg-success text-white hover:bg-success-hover' },
  { label: 'Danger', colorClass: 'bg-danger text-white hover:bg-danger-hover' },
  { label: 'Warning', colorClass: 'bg-warning text-gray-900 hover:bg-warning-hover' },
  { label: 'Info', colorClass: 'bg-info text-gray-900 hover:bg-info-hover' },
  { label: 'Light', colorClass: 'bg-light text-gray-900 hover:bg-gray-200' },
  { label: 'Dark', colorClass: 'bg-dark text-white hover:bg-dark-hover' },
]

export const OUTLINE_VARIANTS: ButtonVariant[] = [
  { label: 'Primary', colorClass: 'border-primary text-primary hover:bg-primary hover:text-white' },
  {
    label: 'Secondary',
    colorClass: 'border-secondary text-secondary hover:bg-secondary hover:text-white',
  },
  { label: 'Success', colorClass: 'border-success text-success hover:bg-success hover:text-white' },
  { label: 'Danger', colorClass: 'border-danger text-danger hover:bg-danger hover:text-white' },
  {
    label: 'Warning',
    colorClass: 'border-warning text-warning hover:bg-warning hover:text-gray-900',
  },
  { label: 'Info', colorClass: 'border-info text-info hover:bg-info hover:text-gray-900' },
  {
    label: 'Light',
    colorClass: 'border-gray-300 text-gray-700 hover:bg-light hover:text-gray-900',
  },
  { label: 'Dark', colorClass: 'border-dark text-dark hover:bg-dark hover:text-white' },
]

export type PlaygroundConfig = {
  variant: string
  size: string
  shape: string
  disabled: boolean
  loading: boolean
  iconPosition: 'none' | 'leading' | 'trailing'
}
