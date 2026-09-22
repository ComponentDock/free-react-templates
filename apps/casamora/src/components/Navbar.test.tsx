import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Casamora')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Rooms')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Events')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders Reservation Form button', () => {
    render(<Navbar />)
    expect(screen.getByText('Reservation Form')).toBeInTheDocument()
  })

  it('has an accessible navigation landmark', () => {
    render(<Navbar />)
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<Navbar className="custom-class" />)
    expect(screen.getByText('Casamora').closest('header')).toHaveClass('custom-class')
  })
})
