import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the hero headline', () => {
    render(<Hero />)
    expect(screen.getByText(/Feel the Future/)).toBeInTheDocument()
    expect(screen.getByText(/on Your Wrist/)).toBeInTheDocument()
  })

  it('renders the Shop Now CTA', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /shop now/i })).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<Hero />)
    expect(screen.getByText(/Smart technology meets elegant design/)).toBeInTheDocument()
  })
})
