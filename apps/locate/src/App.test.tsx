import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { App } from './App'

describe('App', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('sets the page title', () => {
    render(<App />)
    expect(document.title).toBe('Locate — Directory Listing Template')
  })

  it('renders the navbar', () => {
    render(<App />)
    expect(screen.getByText('Scout')).toBeInTheDocument()
  })

  it('renders the hero heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Find Nearby')
  })

  it('renders the Most Visited Places section', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Most Visited Places' }),
    ).toBeInTheDocument()
  })

  it('renders the Popular Categories section', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Popular Categories' }),
    ).toBeInTheDocument()
  })

  it('renders the Why Us section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2, name: 'Why Us' })).toBeInTheDocument()
  })

  it('renders the How It Works section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2, name: 'How It Works' })).toBeInTheDocument()
  })

  it('renders the Testimonials section', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Satisfied Customers' }),
    ).toBeInTheDocument()
  })

  it('renders the Blog section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2, name: /Tips & Articles/ })).toBeInTheDocument()
  })

  it('renders the CTA banner', () => {
    render(<App />)
    expect(screen.getByText(/Let's get started/)).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Component Dock' })).toBeInTheDocument()
  })
})
