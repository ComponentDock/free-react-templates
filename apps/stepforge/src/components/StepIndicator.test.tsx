import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { StepIndicator } from './StepIndicator'

describe('StepIndicator', () => {
  it('renders all three steps', () => {
    render(<StepIndicator currentStep={1} />)
    expect(screen.getAllByText('Personal Info').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Booking').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Confirm').length).toBeGreaterThanOrEqual(1)
  })

  it('renders step numbers', () => {
    render(<StepIndicator currentStep={1} />)
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('marks current step with aria-current', () => {
    render(<StepIndicator currentStep={2} />)
    expect(screen.getByText('2').closest('[aria-current="step"]')).toBeTruthy()
  })

  it('applies teal accent to active step', () => {
    render(<StepIndicator currentStep={1} />)
    const step1 = screen.getByText('1')
    expect(step1.className).toContain('bg-brand-accent')
  })

  it('applies inactive styling to future steps', () => {
    render(<StepIndicator currentStep={1} />)
    const step3 = screen.getByText('3')
    expect(step3.className).toContain('bg-brand-step-inactive')
  })
})
