import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading', () => {
    render(<Hero />)
    expect(screen.getByText(/Change Your Mind/)).toBeInTheDocument()
  })

  it('renders the date', () => {
    render(<Hero />)
    expect(screen.getByText(/5 to 9 May 2025/)).toBeInTheDocument()
  })

  it('renders Buy Ticket button', () => {
    render(<Hero />)
    expect(screen.getByText('Buy Ticket')).toBeInTheDocument()
  })
})
