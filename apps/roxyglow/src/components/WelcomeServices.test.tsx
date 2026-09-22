import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WelcomeServices } from './WelcomeServices'

describe('WelcomeServices', () => {
  it('renders the section heading', () => {
    render(<WelcomeServices />)
    expect(screen.getByText('Welcome to RoxyGlow Hotel')).toBeInTheDocument()
    expect(screen.getByText('A New Vision of Luxury Hotel')).toBeInTheDocument()
  })

  it('renders all five feature cards', () => {
    render(<WelcomeServices />)
    expect(screen.getByText('Friendly Service')).toBeInTheDocument()
    expect(screen.getByText('Get Breakfast')).toBeInTheDocument()
    expect(screen.getByText('Transfer Services')).toBeInTheDocument()
    expect(screen.getByText('Suits & SPA')).toBeInTheDocument()
    expect(screen.getByText('Cozy Rooms')).toBeInTheDocument()
  })
})
