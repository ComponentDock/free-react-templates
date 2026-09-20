import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Eduforge')
  })

  it('renders CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /get started/i })).toBeInTheDocument()
  })

  it('renders lead text', () => {
    render(<Hero />)
    expect(screen.getByText(/discover thousands/i)).toBeInTheDocument()
  })
})
