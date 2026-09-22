import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the welcome subheading', () => {
    render(<Hero />)
    expect(screen.getByText('Welcome Hibiscus')).toBeInTheDocument()
  })

  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByText(/Experience the greatest for your holidays/)).toBeInTheDocument()
  })

  it('renders booking form elements', () => {
    render(<Hero />)
    expect(screen.getByLabelText(/check in/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/check out/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/room type/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('renders room type select options', () => {
    render(<Hero />)
    expect(screen.getByRole('option', { name: 'Select Room' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Single Room' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Double Room' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Deluxe Room' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Suite' })).toBeInTheDocument()
  })

  it('renders date inputs', () => {
    render(<Hero />)
    const checkin = document.getElementById('checkin')
    const checkout = document.getElementById('checkout')
    expect(checkin).toBeInTheDocument()
    expect(checkin?.getAttribute('type')).toBe('date')
    expect(checkout).toBeInTheDocument()
    expect(checkout?.getAttribute('type')).toBe('date')
  })
})
