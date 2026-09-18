import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading and subtext', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: /we provide forever/i })).toBeInTheDocument()
    expect(screen.getByText(/premium tattoo artistry/i)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /explore our work/i })).toHaveAttribute(
      'href',
      '#portfolio',
    )
  })

  it('renders slide navigation buttons', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /previous slide/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /next slide/i })).toBeInTheDocument()
  })
})
