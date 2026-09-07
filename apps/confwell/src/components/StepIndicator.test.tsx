import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { StepIndicator } from './StepIndicator'

describe('StepIndicator', () => {
  it('renders all three steps', () => {
    render(<StepIndicator currentStep={1} />)
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('highlights current step', () => {
    render(<StepIndicator currentStep={2} />)
    const step2 = screen.getByText('2')
    expect(step2).toHaveAttribute('aria-current', 'step')
  })

  it('does not highlight non-current steps', () => {
    render(<StepIndicator currentStep={1} />)
    const step2 = screen.getByText('2')
    expect(step2).not.toHaveAttribute('aria-current')
  })

  it('renders navigation landmark', () => {
    render(<StepIndicator currentStep={1} />)
    expect(screen.getByRole('navigation', { name: /registration steps/i })).toBeInTheDocument()
  })
})
