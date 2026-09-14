import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Crave — Restaurant Landing')
  })

  it('renders the header (banner) and footer (contentinfo) landmarks', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders the main content area', () => {
    render(<App />)
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('composes all section headings', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Foods the most precious things',
    )
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('Featured Food')).toBeInTheDocument()
    expect(screen.getByText('Italian Pizza Offer')).toBeInTheDocument()
    expect(screen.getByText('Food Menu')).toBeInTheDocument()
    expect(screen.getByText('Our Chef')).toBeInTheDocument()
    // "Reservation" appears in both CTA button and ReservationForm heading
    expect(screen.getAllByText('Reservation').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Our Blog')).toBeInTheDocument()
  })

  it('has the Crave logo in the header', () => {
    render(<App />)
    expect(screen.getByText('Crave')).toBeInTheDocument()
  })
})
