import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    // Navbar brand
    expect(screen.getByRole('link', { name: 'Dwellpoint' })).toBeInTheDocument()
    // Hero
    expect(screen.getByText('Find Your New Home')).toBeInTheDocument()
    // Welcome
    expect(screen.getByText('Welcome to Dwellpoint Center')).toBeInTheDocument()
    // Properties
    expect(screen.getByText('Our Top Rated Properties')).toBeInTheDocument()
    // Testimonials
    expect(screen.getByText("Client's Feedback")).toBeInTheDocument()
    // Cities
    expect(screen.getByText('Demandable Cities')).toBeInTheDocument()
    // Features
    expect(screen.getByText('Why We Are the Best')).toBeInTheDocument()
    // Clients
    expect(screen.getByText('Reliable Customers')).toBeInTheDocument()
    // Footer
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })
})
