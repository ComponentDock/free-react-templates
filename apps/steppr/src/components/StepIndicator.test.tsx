import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StepIndicator } from './StepIndicator'

const steps = [
  { number: 1, text: 'Account Information', icon: 'user' as const },
  { number: 2, text: 'Payment Information', icon: 'card' as const },
  { number: 3, text: 'Confirm Details', icon: 'receipt' as const },
]

describe('StepIndicator', () => {
  it('renders all three steps', () => {
    render(<StepIndicator steps={steps} currentStep={1} />)

    expect(screen.getByText('Account Information')).toBeInTheDocument()
    expect(screen.getByText('Payment Information')).toBeInTheDocument()
    expect(screen.getByText('Confirm Details')).toBeInTheDocument()
  })

  it('marks current step with aria-current', () => {
    const { container } = render(<StepIndicator steps={steps} currentStep={2} />)

    const listItems = container.querySelectorAll('li')
    const currentLi = Array.from(listItems).find((li) => li.getAttribute('aria-current') === 'step')
    expect(currentLi).not.toBeNull()
    expect(currentLi!.querySelector('span.sr-only')?.textContent).toContain('2')
  })

  it('renders the navigation landmark', () => {
    render(<StepIndicator steps={steps} currentStep={1} />)

    expect(screen.getByRole('navigation', { name: 'Form steps' })).toBeInTheDocument()
  })

  it('shows connecting lines between steps', () => {
    const { container } = render(<StepIndicator steps={steps} currentStep={1} />)

    const lines = container.querySelectorAll('.bg-gray-200')
    expect(lines.length).toBe(2)
  })
})
