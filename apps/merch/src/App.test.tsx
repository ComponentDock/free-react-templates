import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the Merch title in the document', () => {
    render(<App />)
    expect(document.title).toBe('Merch — E-Commerce Fashion Store')
  })

  it('renders the Navbar with logo', () => {
    render(<App />)
    expect(screen.getByText('Merch')).toBeInTheDocument()
  })

  it('renders the Hero section', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { name: /the new way to display product/i }),
    ).toBeInTheDocument()
  })

  it('renders the Features section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Worldwide Delivery' })).toBeInTheDocument()
  })

  it('renders the New Arrivals section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'New Arrivals' })).toBeInTheDocument()
  })

  it('renders the Deal of the Week section', () => {
    render(<App />)
    const headings = screen.getAllByRole('heading', { name: /hodina watch/i })
    expect(headings.length).toBeGreaterThanOrEqual(1)
  })

  it('renders the Popular Items section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Popular Items' })).toBeInTheDocument()
  })

  it('renders the Newsletter section', () => {
    render(<App />)
    const headings = screen.getAllByRole('heading', { name: /join our list/i })
    expect(headings.length).toBeGreaterThanOrEqual(1)
  })

  it('renders the Footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /component dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
