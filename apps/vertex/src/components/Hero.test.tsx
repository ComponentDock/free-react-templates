import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders headline and subtitle', () => {
    render(<Hero />)
    expect(
      screen.getByText(/We Craft Awesome Web And Graphic Design Solutions/),
    ).toBeInTheDocument()
    expect(screen.getByText(/Creative agency crafting digital experiences/)).toBeInTheDocument()
  })

  it('renders a Get Started CTA linking to contact', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: /get started/i })
    expect(cta).toHaveAttribute('href', '#contact')
  })
})
