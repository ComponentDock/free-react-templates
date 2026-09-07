import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StepIndicator } from './StepIndicator'

describe('StepIndicator', () => {
  it('renders all step circles', () => {
    render(<StepIndicator currentStep={1} totalSteps={3} />)
    expect(screen.getAllByRole('listitem')).toHaveLength(3)
  })

  it('highlights the current step', () => {
    render(<StepIndicator currentStep={2} totalSteps={3} />)
    const items = screen.getAllByRole('listitem')
    expect(items[1]).toHaveAttribute('aria-current', 'step')
  })

  it('marks previous steps as completed with checkmark', () => {
    render(<StepIndicator currentStep={3} totalSteps={3} />)
    const items = screen.getAllByRole('listitem')
    expect(items[0]).not.toHaveAttribute('aria-current')
    expect(items[1]).not.toHaveAttribute('aria-current')
    expect(items[2]).toHaveAttribute('aria-current', 'step')
  })

  it('renders connecting lines between steps', () => {
    render(<StepIndicator currentStep={1} totalSteps={3} />)
    const nav = screen.getByRole('navigation', { name: /booking progress/i })
    const lines = nav.querySelectorAll('[aria-hidden="true"]')
    expect(lines.length).toBe(3)
  })

  it('has accessible step labels', () => {
    render(<StepIndicator currentStep={1} totalSteps={3} />)
    expect(screen.getByText('Step 1')).toBeInTheDocument()
    expect(screen.getByText('Step 2')).toBeInTheDocument()
    expect(screen.getByText('Step 3')).toBeInTheDocument()
  })
})
