import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByLabelText('Hero')).toBeInTheDocument()
    expect(screen.getByLabelText('Current Auctions')).toBeInTheDocument()
    expect(screen.getByLabelText('How It Works')).toBeInTheDocument()
    expect(screen.getByLabelText('About Us')).toBeInTheDocument()
    expect(screen.getByLabelText('Testimonials')).toBeInTheDocument()
    expect(screen.getByLabelText('Call to action')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Bidcraft — Auction Marketplace Template')
  })

  it('renders the Bidcraft brand in navbar', () => {
    render(<App />)
    expect(screen.getAllByText('Bidcraft').length).toBeGreaterThanOrEqual(1)
  })

  it('renders navigation links', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Buy' }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: 'Sell' }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Sign In / Register').length).toBeGreaterThanOrEqual(1)
  })
})
