import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { App } from './App'

describe('App', () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true })
  })

  it('renders without crashing', () => {
    render(<App />)
  })

  it('renders the TopBar with contact info', () => {
    render(<App />)
    const emails = screen.getAllByText('info@healix.com')
    expect(emails.length).toBeGreaterThanOrEqual(1)
  })

  it('renders the Navbar', () => {
    render(<App />)
    expect(screen.getAllByText('Healix').length).toBeGreaterThan(0)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('renders the HeroBanner', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: /most valuable thing/i }),
    ).toBeInTheDocument()
  })

  it('renders the AppointmentSection', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /welcome to/i })).toBeInTheDocument()
  })

  it('renders the StatsCounter', () => {
    render(<App />)
    expect(screen.getByText('Happy Patients')).toBeInTheDocument()
  })

  it('renders the AboutSection', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /your health is our/i })).toBeInTheDocument()
  })

  it('renders the Departments', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /our departments/i })).toBeInTheDocument()
  })

  it('renders the Doctors', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /our qualified doctors/i })).toBeInTheDocument()
  })

  it('renders the BlogSection', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /latest blog updates/i })).toBeInTheDocument()
  })

  it('renders the Testimonials', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /our patient says/i })).toBeInTheDocument()
  })

  it('renders the Footer', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
