import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all main sections', () => {
    render(<App />)
    // Navbar
    expect(screen.getByText('Liturgy')).toBeInTheDocument()
    // Hero — use getAllByRole since sermon cards also have "Arise, Shine" heading
    const headings = screen.getAllByRole('heading', { name: 'Arise, Shine' })
    expect(headings.length).toBeGreaterThanOrEqual(1)
    // Upcoming Events
    expect(screen.getByText('Upcoming Events')).toBeInTheDocument()
    // Worship Time
    expect(screen.getByText('Worship Time')).toBeInTheDocument()
    // Recent Sermons
    expect(screen.getByText('Listen Our Sermons')).toBeInTheDocument()
    // Ministries
    expect(screen.getByText('Events & Ministries')).toBeInTheDocument()
    // Footer
    expect(screen.getByText('About Liturgy')).toBeInTheDocument()
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('Liturgy — Church Website Template')
  })

  it('renders Component Dock link in footer', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('does not reference ColorLib anywhere', () => {
    render(<App />)
    const body = document.body.textContent || ''
    expect(body.toLowerCase()).not.toMatch(/colorlib/)
  })
})
