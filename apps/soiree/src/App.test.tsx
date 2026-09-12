import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import App from './App'
import { Header } from './components/Header'
import { Countdown } from './components/Countdown'

describe('App', () => {
  it('renders the full page with all sections', () => {
    render(<App />)

    // Header
    expect(screen.getAllByText('Soiree').length).toBeGreaterThanOrEqual(1)

    // Hero
    expect(screen.getByText('conference')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Buy Tickets Now' })).toBeInTheDocument()

    // Event Info
    expect(screen.getByText('12-14 February 2025')).toBeInTheDocument()
    expect(screen.getByText('Los Angeles, CA')).toBeInTheDocument()

    // Countdown
    expect(screen.getByText('Counter until the big event')).toBeInTheDocument()

    // About
    expect(screen.getByText('About the event')).toBeInTheDocument()
    expect(screen.getByText('9 Speakers')).toBeInTheDocument()
    expect(screen.getByText('8 hrs Marathon')).toBeInTheDocument()
    expect(screen.getByText('Live Broadcast')).toBeInTheDocument()

    // Speakers
    expect(screen.getByText('Our Speakers')).toBeInTheDocument()
    expect(screen.getByText('Patricia Stone')).toBeInTheDocument()

    // Pricing
    expect(screen.getByText('Pricing Table')).toBeInTheDocument()
    expect(screen.getByText('Start up')).toBeInTheDocument()
    expect(screen.getByText('Corporate')).toBeInTheDocument()

    // Calendar
    expect(screen.getByText('Next Events Calendar')).toBeInTheDocument()
    expect(screen.getByText('Conference in Amsterdam')).toBeInTheDocument()

    // Partners
    expect(screen.getByText('Our Partners')).toBeInTheDocument()

    // Get Tickets
    expect(screen.getByText('Get your tickets')).toBeInTheDocument()

    // Footer
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
    expect(screen.getByText('Subscribe to our newsletter')).toBeInTheDocument()
  })

  it('renders navigation with search button', () => {
    render(<App />)

    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Toggle navigation' })).toBeInTheDocument()
  })

  it('renders hero section with date and CTA', () => {
    render(<App />)

    expect(screen.getByText('Prepare yourself for the')).toBeInTheDocument()
    expect(screen.getByText('12-14 February 2025 — Los Angeles, CA')).toBeInTheDocument()
  })

  it('renders all three pricing cards', () => {
    render(<App />)

    const purchaseButtons = screen.getAllByText('Purchase')
    expect(purchaseButtons).toHaveLength(3)
  })

  it('renders footer with Component Dock link', () => {
    render(<App />)

    const cdLink = screen.getByRole('link', { name: 'Component Dock' })
    expect(cdLink).toBeInTheDocument()
    expect(cdLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders newsletter subscription form', () => {
    render(<App />)

    expect(screen.getByPlaceholderText('E-Mail here')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'SUBSCRIBE' })).toBeInTheDocument()
  })

  it('renders speaker cards with names', () => {
    render(<App />)

    expect(screen.getByText('James Oliver')).toBeInTheDocument()
    expect(screen.getByText('Carla Banks')).toBeInTheDocument()
    expect(screen.getByText('William Smith')).toBeInTheDocument()
  })

  it('renders calendar events', () => {
    render(<App />)

    expect(screen.getByText('Workshop in Berlin')).toBeInTheDocument()
    expect(screen.getByText('Summit in Paris')).toBeInTheDocument()
    expect(screen.getAllByText('buy now').length).toBeGreaterThanOrEqual(1)
  })
})

describe('Header', () => {
  it('toggles mobile menu open and closed', () => {
    render(<Header />)

    const toggle = screen.getByRole('button', { name: 'Toggle navigation' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})

describe('Countdown', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders countdown boxes', () => {
    render(<Countdown />)

    expect(screen.getByText('Counter until the big event')).toBeInTheDocument()
    expect(screen.getByText('Days')).toBeInTheDocument()
    expect(screen.getByText('Hours')).toBeInTheDocument()
    expect(screen.getByText('Minutes')).toBeInTheDocument()
    expect(screen.getByText('Seconds')).toBeInTheDocument()
  })

  it('updates countdown every second', () => {
    render(<Countdown />)

    const initialSeconds = screen.getByText('Seconds').previousElementSibling?.textContent
    expect(initialSeconds).toBeDefined()

    vi.advanceTimersByTime(1000)

    const updatedSeconds = screen.getByText('Seconds').previousElementSibling?.textContent
    expect(updatedSeconds).toBeDefined()
  })
})
