import { render, screen } from '@testing-library/react'
import { StepIndicator } from './StepIndicator'
import { STEPS } from '../types'

describe('StepIndicator', () => {
  it('renders all step labels', () => {
    render(<StepIndicator steps={STEPS} currentStep={1} />)
    expect(screen.getByText('Account Setup')).toBeInTheDocument()
    expect(screen.getByText('Social Profiles')).toBeInTheDocument()
    expect(screen.getByText('Personal Details')).toBeInTheDocument()
  })

  it('renders step numbers', () => {
    render(<StepIndicator steps={STEPS} currentStep={1} />)
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('marks current step with aria-current', () => {
    render(<StepIndicator steps={STEPS} currentStep={2} />)
    const step2Number = screen.getByText('2')
    expect(step2Number.closest('li')).toHaveAttribute('aria-current', 'step')
  })

  it('does not mark non-current steps with aria-current', () => {
    render(<StepIndicator steps={STEPS} currentStep={1} />)
    const step2Number = screen.getByText('2')
    expect(step2Number.closest('li')).not.toHaveAttribute('aria-current')
  })

  it('renders nav with accessible label', () => {
    render(<StepIndicator steps={STEPS} currentStep={1} />)
    expect(screen.getByLabelText('Wizard steps')).toBeInTheDocument()
  })
})
