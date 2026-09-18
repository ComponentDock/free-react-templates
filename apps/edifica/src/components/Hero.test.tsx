import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the hero heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Home Builder')
  })

  it('renders the subheading text', () => {
    render(<Hero />)
    expect(screen.getByText(/we're here to help you/i)).toBeInTheDocument()
  })
})
