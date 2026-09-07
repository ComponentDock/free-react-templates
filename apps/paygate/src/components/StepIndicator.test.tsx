import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StepIndicator } from './StepIndicator'

const steps = [
  { number: 1, text: 'Personal Information' },
  { number: 2, text: 'Bank Information' },
  { number: 3, text: 'Confirmation' },
]

describe('StepIndicator', () => {
  it('renders all three steps', () => {
    render(<StepIndicator steps={steps} currentStep={1} />)

    expect(screen.getByText('Personal Information')).toBeInTheDocument()
    expect(screen.getByText('Bank Information')).toBeInTheDocument()
    expect(screen.getByText('Confirmation')).toBeInTheDocument()
  })

  it('renders the navigation landmark', () => {
    render(<StepIndicator steps={steps} currentStep={1} />)

    expect(screen.getByRole('navigation', { name: 'Form steps' })).toBeInTheDocument()
  })

  it('marks current step with aria-current', () => {
    const { container } = render(<StepIndicator steps={steps} currentStep={2} />)

    const listItems = container.querySelectorAll('li')
    const currentLi = Array.from(listItems).find((li) => li.getAttribute('aria-current') === 'step')
    expect(currentLi).not.toBeNull()
  })

  it('shows step numbers for active and inactive steps', () => {
    render(<StepIndicator steps={steps} currentStep={1} />)

    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('shows checkmark for completed steps', () => {
    const { container } = render(<StepIndicator steps={steps} currentStep={2} />)

    const svgs = container.querySelectorAll('svg')
    expect(svgs.length).toBeGreaterThanOrEqual(1)
  })

  it('shows connecting lines between steps', () => {
    const { container } = render(<StepIndicator steps={steps} currentStep={1} />)

    const lines = container.querySelectorAll('[class*="absolute"]')
    expect(lines.length).toBe(2)
  })

  it('shows step labels below circles', () => {
    render(<StepIndicator steps={steps} currentStep={1} />)

    expect(screen.getByText('Step 1')).toBeInTheDocument()
    expect(screen.getByText('Step 2')).toBeInTheDocument()
    expect(screen.getByText('Step 3')).toBeInTheDocument()
  })
})
