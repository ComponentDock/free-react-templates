import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { StepIndicator } from './StepIndicator'

describe('StepIndicator', () => {
  it('renders all three step numbers', () => {
    render(<StepIndicator currentStep={1} />)
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('highlights the active step', () => {
    render(<StepIndicator currentStep={2} />)
    const step2 = screen.getByText('2')
    expect(step2).toHaveAttribute('aria-current', 'step')
  })

  it('marks completed steps as active', () => {
    render(<StepIndicator currentStep={3} />)
    const step1 = screen.getByText('1')
    const step2 = screen.getByText('2')
    const step3 = screen.getByText('3')
    expect(step1.className).toContain('bg-brand')
    expect(step2.className).toContain('bg-brand')
    expect(step3.className).toContain('bg-brand')
  })

  it('marks future steps as inactive', () => {
    render(<StepIndicator currentStep={1} />)
    const step2 = screen.getByText('2')
    const step3 = screen.getByText('3')
    expect(step2.className).toContain('bg-step-inactive')
    expect(step3.className).toContain('bg-step-inactive')
  })

  it('has accessible navigation label', () => {
    render(<StepIndicator currentStep={1} />)
    expect(screen.getByRole('navigation', { name: 'Form steps' })).toBeInTheDocument()
  })
})
