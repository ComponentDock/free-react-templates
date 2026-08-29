export interface ButtonVariant {
  label: string
  colorClass: string
}

export const SOLID_VARIANTS: ButtonVariant[] = [
  { label: 'Primary', colorClass: 'bg-primary text-white hover:bg-primary-hover' },
  { label: 'Secondary', colorClass: 'bg-secondary text-white hover:bg-secondary-hover' },
  { label: 'Success', colorClass: 'bg-success text-white hover:bg-success-hover' },
  { label: 'Info', colorClass: 'bg-info text-gray-900 hover:bg-info-hover' },
  { label: 'Warning', colorClass: 'bg-warning text-gray-900 hover:bg-warning-hover' },
  { label: 'Danger', colorClass: 'bg-danger text-white hover:bg-danger-hover' },
  { label: 'Light', colorClass: 'bg-light text-gray-900 hover:bg-gray-200' },
  { label: 'Orange', colorClass: 'bg-orange-500 text-white hover:bg-orange-600' },
  { label: 'Indigo', colorClass: 'bg-indigo-600 text-white hover:bg-indigo-700' },
  { label: 'Pink', colorClass: 'bg-pink-500 text-white hover:bg-pink-600' },
  { label: 'Deep Orange', colorClass: 'bg-amber-600 text-white hover:bg-amber-700' },
  { label: 'Aqua', colorClass: 'bg-cyan-400 text-gray-900 hover:bg-cyan-500' },
  { label: 'Dark', colorClass: 'bg-dark text-white hover:bg-dark-hover' },
  { label: 'Black', colorClass: 'bg-black text-white hover:bg-gray-800' },
  { label: 'Purple', colorClass: 'bg-purple-600 text-white hover:bg-purple-700' },
  { label: 'Blue', colorClass: 'bg-blue-600 text-white hover:bg-blue-700' },
  { label: 'Brown', colorClass: 'bg-stone-700 text-white hover:bg-stone-800' },
  { label: 'Blue Gray', colorClass: 'bg-slate-600 text-white hover:bg-slate-700' },
]

export const OUTLINE_VARIANTS: ButtonVariant[] = [
  { label: 'Primary', colorClass: 'border-primary text-primary hover:bg-primary hover:text-white' },
  {
    label: 'Secondary',
    colorClass: 'border-secondary text-secondary hover:bg-secondary hover:text-white',
  },
  { label: 'Success', colorClass: 'border-success text-success hover:bg-success hover:text-white' },
  { label: 'Info', colorClass: 'border-info text-info hover:bg-info hover:text-gray-900' },
  {
    label: 'Warning',
    colorClass: 'border-warning text-warning hover:bg-warning hover:text-gray-900',
  },
  { label: 'Danger', colorClass: 'border-danger text-danger hover:bg-danger hover:text-white' },
  {
    label: 'Light',
    colorClass: 'border-gray-300 text-gray-700 hover:bg-light hover:text-gray-900',
  },
  {
    label: 'Orange',
    colorClass: 'border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white',
  },
  {
    label: 'Indigo',
    colorClass: 'border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white',
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
