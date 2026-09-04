import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StepIndicator } from './StepIndicator'
import { STEPS } from '../types'

describe('StepIndicator', () => {
  it('renders all three steps', () => {
    render(<StepIndicator steps={STEPS} currentStep={1} completedSteps={new Set()} />)
    expect(screen.getByText('Account Setup')).toBeInTheDocument()
    expect(screen.getByText('Billing Setup')).toBeInTheDocument()
    expect(screen.getByText('Agreement')).toBeInTheDocument()
  })

  it('marks the current step with aria-current', () => {
    render(<StepIndicator steps={STEPS} currentStep={2} completedSteps={new Set()} />)
    const step2 = screen.getByText('Billing Setup').closest('li')!
    expect(step2).toHaveAttribute('aria-current', 'step')
  })

  it('shows step numbers', () => {
    render(<StepIndicator steps={STEPS} currentStep={1} completedSteps={new Set()} />)
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('shows sublabels for each step', () => {
    render(<StepIndicator steps={STEPS} currentStep={1} completedSteps={new Set()} />)
    expect(screen.getByText('Account Details')).toBeInTheDocument()
    expect(screen.getByText('Billing Details')).toBeInTheDocument()
    expect(screen.getByText('Our site policy')).toBeInTheDocument()
  })

  it('applies different background for completed steps', () => {
    render(<StepIndicator steps={STEPS} currentStep={3} completedSteps={new Set([1, 2])} />)
    const step1 = screen.getByText('Account Setup').closest('li')!
    expect(step1.className).toContain('bg-brand-sky')
  })

  it('has the correct nav landmark', () => {
    render(<StepIndicator steps={STEPS} currentStep={1} completedSteps={new Set()} />)
    expect(screen.getByRole('navigation', { name: 'Wizard steps' })).toBeInTheDocument()
  })
})
