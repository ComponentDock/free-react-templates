import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Enamel — Dental Clinic Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('navigation', { name: 'Primary' })).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Helping Your Stay Happy One/i }),
    ).toBeInTheDocument()
    expect(screen.getByText('Welcome to Enamel')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Dental Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Clinic Services' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /We promised to take care our patients/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Qualified Doctors' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Patients Says About Us' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'We Provide Free Dental Care Consultation' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Pricing' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Have a Questions?' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Opening Hours' })).toBeInTheDocument()
  })
})
