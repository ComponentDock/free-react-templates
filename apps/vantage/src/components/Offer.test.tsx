import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Offer } from './Offer'

describe('Offer', () => {
  it('renders the kicker, subtitle, and three offer cards', () => {
    const { container } = render(<Offer />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'What we offer for you' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/From planning to execution, we help businesses/)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 3, name: 'Financial Consulting' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Investment Strategy' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Business Analytics' }),
    ).toBeInTheDocument()

    expect(container.querySelectorAll('img')).toHaveLength(3)
    // Each card carries a gradient overlay that fills the text block on hover.
    expect(container.querySelectorAll('div.bg-brand-gradient')).toHaveLength(3)
  })
})
