import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Brightoral — Dental Clinic Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    // Hero
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Your New Smile/)

    // ServicesIntro
    expect(screen.getByRole('heading', { name: 'Periodontics' })).toBeInTheDocument()

    // EquipmentStrip
    expect(screen.getAllByText('Tooth Whitening').length).toBeGreaterThanOrEqual(1)

    // AppointmentForm
    expect(
      screen.getByRole('heading', { name: /Online.*Appointment.*Request Form/i }),
    ).toBeInTheDocument()

    // ServicesGrid
    expect(screen.getByRole('heading', { name: /Our.*Services/i })).toBeInTheDocument()

    // SuccessStories
    expect(screen.getByRole('heading', { name: /Success.*Stories/i })).toBeInTheDocument()

    // Testimonials
    expect(screen.getByRole('heading', { name: /People.*Says/i })).toBeInTheDocument()
  })
})
