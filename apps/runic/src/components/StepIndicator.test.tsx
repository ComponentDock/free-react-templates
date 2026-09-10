import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StepIndicator } from './StepIndicator'

describe('StepIndicator', () => {
  it('renders correct number of step dots', () => {
    render(<StepIndicator totalSteps={3} currentStep={0} />)
    const tabs = screen.getAllByRole('tab')
    expect(tabs).toHaveLength(3)
  })

  it('marks the current step as selected', () => {
    render(<StepIndicator totalSteps={3} currentStep={1} />)
    const tabs = screen.getAllByRole('tab')
    expect(tabs[1]).toHaveAttribute('aria-selected', 'true')
    expect(tabs[0]).toHaveAttribute('aria-selected', 'false')
    expect(tabs[2]).toHaveAttribute('aria-selected', 'false')
  })

  it('has accessible labels', () => {
    render(<StepIndicator totalSteps={3} currentStep={0} />)
    expect(screen.getByRole('tab', { name: /step 1/i })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /step 2/i })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /step 3/i })).toBeInTheDocument()
  })
})
