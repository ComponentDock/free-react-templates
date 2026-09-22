import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
    expect(screen.getByText('Welcome To Opulux')).toBeInTheDocument()
    expect(screen.getByText('Check Availability')).toBeInTheDocument()
    expect(screen.getByText('Welcome To Our Hotel')).toBeInTheDocument()
    expect(screen.getByText('Our Rooms')).toBeInTheDocument()
    expect(screen.getByText('Happy Guests')).toBeInTheDocument()
    expect(screen.getByText('Recent Blog')).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })
})
