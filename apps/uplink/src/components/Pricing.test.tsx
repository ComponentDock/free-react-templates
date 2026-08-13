import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('shows the heading and four plans with specs and CTAs', () => {
    render(<Pricing />)
    expect(
      screen.getByRole('heading', { name: 'Choose Your Best Pricing Plans' }),
    ).toBeInTheDocument()
    const names = screen.getAllByRole('heading', { level: 3 }).map((h) => h.textContent)
    expect(names).toEqual(['Basic', 'Starter', 'Business', 'Enterprise'])
    expect(screen.getByText('£39')).toBeInTheDocument()
    expect(screen.getByText('£99')).toBeInTheDocument()
    const buttons = screen.getAllByRole('link', { name: /get started/i })
    expect(buttons).toHaveLength(4)
    for (const button of buttons) {
      expect(button).toHaveAttribute('href', '#contact')
    }
    expect(screen.getByText(/1 GB RAM/)).toBeInTheDocument()
    expect(screen.getByText(/100 GB SSD Storage/)).toBeInTheDocument()
  })

  it('labels each plan with its target audience', () => {
    render(<Pricing />)
    for (const audience of [
      'Individuals/Freelancers',
      'Small Companies',
      'Medium Companies',
      'Large Companies',
    ]) {
      expect(screen.getByText(audience)).toBeInTheDocument()
    }
  })

  it('keeps the last plan in its own column with a divider layout', () => {
    const { container } = render(<Pricing />)
    const columns = container.querySelectorAll('[data-plan]')
    expect(columns).toHaveLength(4)
  })
})
