import { render, screen } from '@testing-library/react'
import Hero from './Hero'

describe('Hero', () => {
  it('renders the main headline', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /learn languages easily/i }),
    ).toBeInTheDocument()
  })

  it('renders subtitle text', () => {
    render(<Hero />)
    expect(screen.getByText(/master a new language/i)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /get started/i })).toBeInTheDocument()
  })

  it('CTA links to courses section', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: /get started/i })
    expect(cta).toHaveAttribute('href', '#courses')
  })
})
