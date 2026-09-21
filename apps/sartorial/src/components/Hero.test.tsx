import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders hero heading', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Bespoke Tailoring/i }),
    ).toBeInTheDocument()
  })

  it('renders CTA buttons', () => {
    render(<Hero />)
    const ctas = screen.getAllByRole('link', { name: /explore|book/i })
    expect(ctas.length).toBeGreaterThanOrEqual(1)
  })

  it('renders hero subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/Discover true personalization/i)).toBeInTheDocument()
  })
})
