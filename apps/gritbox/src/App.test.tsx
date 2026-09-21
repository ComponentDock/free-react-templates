import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    // Navbar
    expect(screen.getAllByText('Grit').length).toBeGreaterThanOrEqual(1)
    // Hero
    expect(screen.getByText('Welcome To GritBox')).toBeInTheDocument()
    // Popular Program
    expect(screen.getByText('Popular Program')).toBeInTheDocument()
    // The Club
    expect(screen.getAllByText('The Club').length).toBeGreaterThanOrEqual(1)
    // Featured Trainer
    expect(screen.getByText('Shane Green')).toBeInTheDocument()
    // Crossfit Exercises
    expect(screen.getByText('Crossfit Exercises')).toBeInTheDocument()
    // Testimonies
    expect(screen.getByText('Testimonies')).toBeInTheDocument()
    // Footer
    expect(screen.getByText(/Component Dock/)).toBeInTheDocument()
  })
})
