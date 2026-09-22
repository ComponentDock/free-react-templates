import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { WelcomeServices } from './WelcomeServices'

describe('WelcomeServices', () => {
  it('renders the welcome heading', () => {
    render(<WelcomeServices />)
    expect(screen.getByText('Welcome to RoxyGlow Hotel')).toBeDefined()
  })

  it('renders the subheading', () => {
    render(<WelcomeServices />)
    expect(screen.getByText('A New Vision of Luxury Hotel')).toBeDefined()
  })

  it('renders all five feature cards', () => {
    render(<WelcomeServices />)
    expect(screen.getByText('Friendly Service')).toBeDefined()
    expect(screen.getByText('Get Breakfast')).toBeDefined()
    expect(screen.getByText('Transfer Services')).toBeDefined()
    expect(screen.getByText('Suits & SPA')).toBeDefined()
    expect(screen.getByText('Cozy Rooms')).toBeDefined()
  })
})
