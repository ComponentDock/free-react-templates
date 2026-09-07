import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StepIndicator } from './StepIndicator'

describe('StepIndicator', () => {
  it('renders all four steps', () => {
    render(<StepIndicator currentStep={1} />)

    expect(screen.getByText('username')).toBeInTheDocument()
    expect(screen.getByText('email')).toBeInTheDocument()
    expect(screen.getByText('password')).toBeInTheDocument()
    expect(screen.getByText('confirm password')).toBeInTheDocument()
  })

  it('renders the navigation landmark', () => {
    render(<StepIndicator currentStep={1} />)

    expect(screen.getByRole('navigation', { name: 'Wizard steps' })).toBeInTheDocument()
  })

  it('marks current step with aria-current', () => {
    const { container } = render(<StepIndicator currentStep={2} />)

    const items = container.querySelectorAll('nav[aria-label="Wizard steps"] > div')
    expect(items[1]).toHaveAttribute('aria-current', 'step')
  })

  it('does not mark inactive steps with aria-current', () => {
    const { container } = render(<StepIndicator currentStep={1} />)

    const items = container.querySelectorAll('nav[aria-label="Wizard steps"] > div')
    expect(items[0]).toHaveAttribute('aria-current', 'step')
    expect(items[1]).not.toHaveAttribute('aria-current')
    expect(items[2]).not.toHaveAttribute('aria-current')
    expect(items[3]).not.toHaveAttribute('aria-current')
  })

  it('shows step numbers', () => {
    render(<StepIndicator currentStep={1} />)

    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByText('4')).toBeInTheDocument()
  })

  it('marks completed steps with active styling', () => {
    const { container } = render(<StepIndicator currentStep={3} />)

    const items = container.querySelectorAll('nav[aria-label="Wizard steps"] > div')
    const item0 = items[0]
    const item3 = items[3]
    expect(item0).toBeDefined()
    expect(item3).toBeDefined()
    // Active/done tabs get #3155cc (rgb(49, 85, 204))
    expect(item0!.getAttribute('style')).toContain('rgb(49, 85, 204)')
    // Inactive tabs get #999999 (rgb(153, 153, 153))
    expect(item3!.getAttribute('style')).toContain('rgb(153, 153, 153)')
  })

  it('renders step circles with correct colors for active vs inactive', () => {
    const { container } = render(<StepIndicator currentStep={1} />)

    const circles = container.querySelectorAll(
      'nav[aria-label="Wizard steps"] span[class*="rounded-full"]',
    )
    const activeCircle = circles[0]
    const inactiveCircle = circles[1]
    expect(activeCircle).toBeDefined()
    expect(inactiveCircle).toBeDefined()
    // Active circle gets #3d6aff (rgb(61, 106, 255))
    expect(activeCircle!.getAttribute('style')).toContain('rgb(61, 106, 255)')
    // Inactive circle gets #666666 (rgb(102, 102, 102))
    expect(inactiveCircle!.getAttribute('style')).toContain('rgb(102, 102, 102)')
  })
})
