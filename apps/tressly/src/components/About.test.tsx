import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading and supporting copy', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: 'Welcome to Hair Salon' })).toBeInTheDocument()
    expect(screen.getByText(/expert stylists/i)).toBeInTheDocument()
  })

  it('renders an Opening Hours panel with weekdays and weekend hours', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: 'Opening Hours' })).toBeInTheDocument()
    expect(screen.getByText('Monday – Friday')).toBeInTheDocument()
    expect(screen.getByText('9:00 am – 6:00 pm')).toBeInTheDocument()
    expect(screen.getByText('Saturday')).toBeInTheDocument()
    expect(screen.getByText('9:00 am – 2:00 pm')).toBeInTheDocument()
    expect(screen.getByText('Sunday')).toBeInTheDocument()
    expect(screen.getByText('Closed')).toBeInTheDocument()
  })
})
