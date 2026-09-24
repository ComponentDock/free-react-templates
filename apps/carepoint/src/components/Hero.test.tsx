import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Medicine made with care')
  })

  it('renders the description text', () => {
    render(<Hero />)
    expect(screen.getByText(/providing quality healthcare services/i)).toBeInTheDocument()
  })

  it('renders the appointment button', () => {
    render(<Hero />)
    expect(screen.getByText('Make an Appointment')).toHaveAttribute('href', '#appointment')
  })
})
