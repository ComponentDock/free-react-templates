import { render, screen } from '@testing-library/react'
import { Stepper } from './Stepper'

describe('Stepper', () => {
  it('renders all step labels', () => {
    render(<Stepper currentStep={0} totalSteps={4} />)
    expect(screen.getAllByText('Basic Details').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Account')).toBeInTheDocument()
    expect(screen.getByText('Shipping')).toBeInTheDocument()
    expect(screen.getByText('Payment')).toBeInTheDocument()
  })

  it('marks current step with aria-current', () => {
    render(<Stepper currentStep={2} totalSteps={4} />)
    const step = screen.getByText('Shipping').closest('li')!.querySelector('[aria-current="step"]')
    expect(step).toBeInTheDocument()
  })

  it('does not mark non-current steps with aria-current', () => {
    render(<Stepper currentStep={0} totalSteps={4} />)
    const accountStep = screen.getByText('Account').closest('li')!
    const circles = accountStep.querySelectorAll('[aria-current]')
    expect(circles).toHaveLength(0)
  })
})
