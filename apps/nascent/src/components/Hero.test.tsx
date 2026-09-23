import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders tagline, heading, subtext, and CTA', () => {
    render(<Hero />)
    expect(screen.getByText('We are new but doing great')).toBeInTheDocument()
    expect(screen.getByText('We give the power back to the user')).toBeInTheDocument()
    expect(screen.getByText('Explore Us')).toBeInTheDocument()
    expect(screen.getByText(/Empowering startups/)).toBeInTheDocument()
  })

  it('uses peach background', () => {
    render(<Hero />)
    const section = screen.getByTestId('hero')
    expect(section.className).toContain('bg-peach')
  })

  it('renders hero image', () => {
    render(<Hero />)
    const img = screen.getByRole('img', { name: /startup team/i })
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('nascent-hero'))
  })
})
