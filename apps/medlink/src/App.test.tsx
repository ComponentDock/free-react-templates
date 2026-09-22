import { describe, expect, it, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  beforeEach(() => {
    render(<App />)
  })

  it('sets the document title', () => {
    expect(document.title).toBe('MedLink — Medical & Healthcare')
  })

  it('renders the TopBar with BOOK APPOINTMENT link', () => {
    expect(screen.getByRole('link', { name: /book appointment/i })).toBeInTheDocument()
  })

  it('renders the Navbar with brand name', () => {
    expect(screen.getAllByText('MedLink').length).toBeGreaterThanOrEqual(1)
  })

  it('renders the HeroBanner heading', () => {
    expect(
      screen.getByRole('heading', { level: 1, name: /we care for your health/i }),
    ).toBeInTheDocument()
  })

  it('renders the ServicingHours section', () => {
    expect(screen.getByRole('heading', { level: 2, name: /servicing hours/i })).toBeInTheDocument()
  })

  it('renders the AppointmentForm section', () => {
    expect(
      screen.getByRole('heading', { level: 2, name: /book an appointment/i }),
    ).toBeInTheDocument()
  })

  it('renders the Doctors section', () => {
    expect(screen.getByRole('heading', { level: 2, name: /meet our doctors/i })).toBeInTheDocument()
  })

  it('renders the Departments section', () => {
    expect(screen.getByRole('heading', { level: 2, name: /our departments/i })).toBeInTheDocument()
  })

  it('renders the Blog section', () => {
    expect(screen.getByRole('heading', { level: 2, name: /from our blog/i })).toBeInTheDocument()
  })

  it('renders the Footer with Component Dock link', () => {
    expect(screen.getByRole('link', { name: /component dock/i })).toBeInTheDocument()
  })
})
