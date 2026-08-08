import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders every section in order', () => {
    render(<App />)
    // Utility bar
    expect(screen.getByText(/emergency line/i)).toBeInTheDocument()
    // Header
    // Header wordmark (navbar + footer both carry one)
    expect(screen.getAllByRole('link', { name: 'Medora' })).toHaveLength(2)
    expect(screen.getAllByRole('link', { name: 'Departments' })).toHaveLength(2)
    // Hero
    expect(screen.getByRole('heading', { level: 1, name: /quality care/i })).toBeInTheDocument()
    // Feature bar
    expect(
      screen.getByRole('link', { name: /find a doctor\s*our staff by department/i }),
    ).toBeInTheDocument()
    // Welcome
    expect(
      screen.getByRole('heading', { level: 2, name: 'Welcome to Medora Clinic' }),
    ).toBeInTheDocument()
    // Departments
    expect(screen.getByRole('heading', { level: 2, name: 'Our Departments' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Cardiology' })).toBeInTheDocument()
    // Doctors
    expect(screen.getByRole('heading', { level: 2, name: 'Meet Our Doctors' })).toBeInTheDocument()
    // Facilities
    expect(
      screen.getByRole('heading', { level: 2, name: 'Modern Medical Facilities' }),
    ).toBeInTheDocument()
    // Appointment
    expect(
      screen.getByRole('heading', { level: 2, name: 'Request an Appointment' }),
    ).toBeInTheDocument()
    // Footer
    expect(screen.getByText('recreation of ColorLib Medical Wordpress Themes')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Medora — Medical Clinic Template')
  })
})
