import { render, screen } from '@testing-library/react'
import { App } from './App'
import { describe, expect, it } from 'vitest'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getAllByText('Kinectwell').length).toBeGreaterThan(0)
    expect(screen.getByText(/We Help People to Recover/)).toBeInTheDocument()
    expect(screen.getByText(/About Us/)).toBeInTheDocument()
    expect(screen.getByText(/Our Services/)).toBeInTheDocument()
    expect(screen.getByText(/Why Choose Us/)).toBeInTheDocument()
    expect(screen.getByText(/Book Your Appointment/)).toBeInTheDocument()
    expect(screen.getByText(/What Our Patients Say/)).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Kinectwell — Physical Therapy Template')
  })

  it('renders skip link', () => {
    render(<App />)
    expect(screen.getByText('Skip to main content')).toHaveAttribute('href', '#main')
  })
})
