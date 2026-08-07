import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the heading and all four plans with prices and CTA buttons', () => {
    render(<Pricing />)

    expect(screen.getByRole('heading', { level: 2, name: /Our Best Pricing/i })).toBeInTheDocument()

    for (const plan of ['Free', 'Startup', 'Premium', 'Pro']) {
      expect(screen.getByRole('heading', { level: 3, name: plan })).toBeInTheDocument()
    }

    for (const price of ['$0', '$19', '$49', '$99']) {
      expect(screen.getByText(price)).toBeInTheDocument()
    }

    expect(screen.getAllByRole('link', { name: 'Get Started' })).toHaveLength(4)
  })
})
