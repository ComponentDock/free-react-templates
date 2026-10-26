import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PlanCta } from './PlanCta'

describe('PlanCta', () => {
  it('is a full-width block anchor with the plan-cta skin', () => {
    render(<PlanCta href="#plans" label="Start free trial" />)

    const cta = screen.getByRole('link', { name: 'Start free trial' })
    expect(cta).toHaveClass('plan-cta')
    expect(cta).toHaveAttribute('href', '#plans')
  })

  it('never ships a bare # target', () => {
    render(<PlanCta href="#plans" label="Talk to sales" />)

    expect(screen.getByRole('link', { name: 'Talk to sales' }).getAttribute('href')).not.toBe('#')
  })

  it('carries its label as text, not as a title or aria-label', () => {
    render(<PlanCta href="#plans" label="Start free trial" />)

    const cta = screen.getByRole('link', { name: 'Start free trial' })
    expect(cta.textContent).toBe('Start free trial')
    expect(cta).not.toHaveAttribute('aria-label')
  })
})
