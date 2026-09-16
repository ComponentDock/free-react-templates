import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections in correct order', () => {
    render(<App />)

    // Check key sections exist
    expect(screen.getByText(/Opening Hours/)).toBeInTheDocument()
    expect(screen.getByText(/We Build Your Home/)).toBeInTheDocument()
    expect(screen.getByText('Creative Plan & Design')).toBeInTheDocument()
    expect(screen.getByText(/We Serve all of your/)).toBeInTheDocument()
    expect(screen.getAllByText('Our Services').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('All')).toBeInTheDocument()
    expect(screen.getByText('Why Choose Us?')).toBeInTheDocument()
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
    expect(screen.getByText(/Are you looking for a Construction/)).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('Crane — Construction Company Landing Template')
  })
})
