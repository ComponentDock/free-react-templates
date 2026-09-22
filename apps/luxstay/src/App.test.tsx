import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getAllByText('LuxStay').length).toBeGreaterThan(0)
  })

  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByText('Discover Your Perfect Stay')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Rooms & Suites')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Dining & Bar' })).toBeInTheDocument()
    expect(screen.getByText('Recent Blog')).toBeInTheDocument()
    expect(screen.getByText('Our Satisfied Guests Say')).toBeInTheDocument()
    expect(screen.getByText('Sign Up for a Newsletter')).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })
})
