import { render, screen } from '@testing-library/react'
import { StepIndicator } from './StepIndicator'

describe('StepIndicator', () => {
  it('displays the current step number', () => {
    render(<StepIndicator currentStep={0} totalSteps={3} />)
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('/ 3')).toBeInTheDocument()
  })

  it('updates when on step 2', () => {
    render(<StepIndicator currentStep={1} totalSteps={3} />)
    expect(screen.getByText('2')).toBeInTheDocument()
  })

  it('updates when on step 3', () => {
    render(<StepIndicator currentStep={2} totalSteps={3} />)
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('has accessible label', () => {
    render(<StepIndicator currentStep={0} totalSteps={3} />)
    expect(screen.getByLabelText('Step 1 of 3')).toBeInTheDocument()
  })
})
