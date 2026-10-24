import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getAllByText('Unioncorp.').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Finance & Consultation')).toBeInTheDocument()
    expect(screen.getByText('Build Your Financial Plan With Our Specialists')).toBeInTheDocument()
    expect(screen.getByText('Our Exclusive Services We Offer For You')).toBeInTheDocument()
    expect(screen.getByText('Our Leadership Team')).toBeInTheDocument()
    expect(screen.getByText('Happy Customers')).toBeInTheDocument()
    expect(screen.getByText('Recent From Blog')).toBeInTheDocument()
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('Unioncorp — Finance & Consultation Template')
  })

  it('renders Component Dock link in footer', () => {
    render(<App />)
    expect(screen.getByText('Component Dock')).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
