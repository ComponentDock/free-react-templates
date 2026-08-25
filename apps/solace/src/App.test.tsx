import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Most Relaxing Place')
    expect(screen.getByText('Solace A Hotel Booking Agency')).toBeInTheDocument()
    expect(screen.getByText('Explore Our Hotel Services')).toBeInTheDocument()
    expect(screen.getByText('Find the Best Hotel in Your Next Vacation')).toBeInTheDocument()
    expect(screen.getByText('Featured Rooms')).toBeInTheDocument()
    expect(screen.getAllByText('Take A Tour').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Restaurant & Bar').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Happy Guests').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Recent Blog')).toBeInTheDocument()
  })

  it('renders the Component Dock footer link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('renders navigation', () => {
    render(<App />)
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
  })

  it('renders the booking form', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: 'Check Availability' })).toBeInTheDocument()
  })

  it('has no ColorLib references', () => {
    const { container } = render(<App />)
    expect(container.innerHTML).not.toMatch(/colorlib/i)
  })

  it('verifies section order via DOM order', () => {
    const { container } = render(<App />)

    const sections = container.querySelectorAll('section, footer')
    const sectionTexts = Array.from(sections).map((s) => s.textContent?.slice(0, 50) || '')

    const heroIdx = sectionTexts.findIndex((t) => t.includes('Most Relaxing Place'))
    const aboutIdx = sectionTexts.findIndex((t) => t.includes('Solace A Hotel Booking'))
    const roomsIdx = sectionTexts.findIndex((t) => t.includes('Featured Rooms'))
    const footerIdx = sectionTexts.findIndex((t) => t.includes('Solace Hotel Booking'))

    expect(heroIdx).toBeLessThan(aboutIdx)
    expect(aboutIdx).toBeLessThan(roomsIdx)
    expect(roomsIdx).toBeLessThan(footerIdx)
  })
})
