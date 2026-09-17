import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the heading, subtitle, and three pricing cards', () => {
    render(<Pricing />)

    expect(screen.getByRole('heading', { level: 2, name: 'Pricing Plans' })).toBeInTheDocument()
    expect(screen.getByText(/Pick the plan that matches your team/)).toBeInTheDocument()

    for (const plan of ['Basic', 'Standard', 'Premium']) {
      expect(screen.getByRole('heading', { level: 3, name: plan })).toBeInTheDocument()
    }

    expect(screen.getByText('$9')).toBeInTheDocument()
    expect(screen.getByText('$29')).toBeInTheDocument()
    expect(screen.getByText('$49')).toBeInTheDocument()
  })

  it('renders feature lists and CTA buttons for each plan', () => {
    render(<Pricing />)

    expect(screen.getAllByText('5 GB Free Storage').length).toBeGreaterThanOrEqual(1)

    const buttons = screen.getAllByRole('link', { name: 'Get Started' })
    expect(buttons).toHaveLength(3)
  })
})
