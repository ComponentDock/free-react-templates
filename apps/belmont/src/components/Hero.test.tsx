import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/luxury resort/i)).toBeInTheDocument()
  })

  it('renders the heading', () => {
    render(<Hero />)
    expect(screen.getByText(/Amazing Services, Location & Facilities/i)).toBeInTheDocument()
  })

  it('renders the Book Your Stay CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /book your stay/i })).toBeInTheDocument()
  })
})
