import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByText('Find Your Dream Car')).toBeInTheDocument()
    expect(screen.getByText('Rental A Cars')).toBeInTheDocument()
    expect(screen.getByText('We Are a Trusted Name In Auto')).toBeInTheDocument()
    expect(screen.getByText('Best Vehicle Offers')).toBeInTheDocument()
    expect(screen.getByText('Why People Choose Us')).toBeInTheDocument()
    expect(screen.getByText('Latest News Updates')).toBeInTheDocument()
    expect(screen.getByText('Contact Us Now!')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('AeroWorks — Car Dealership & Rental Template')
  })

  it('renders the header with logo', () => {
    render(<App />)
    expect(screen.getByText('AeroWorks')).toBeInTheDocument()
  })

  it('renders the Component Dock footer link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /more templates at component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
