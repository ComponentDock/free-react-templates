import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Casamora — Luxury Hotel Template')
  })

  it('composes banner, main, and contentinfo landmarks', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders hero content', () => {
    render(<App />)
    expect(screen.getByText('Enjoy A Luxury Experience')).toBeInTheDocument()
  })

  it('renders booking bar', () => {
    render(<App />)
    expect(screen.getByLabelText('Check In')).toBeInTheDocument()
    expect(screen.getByLabelText('Check Out')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Check Availability' })).toBeInTheDocument()
  })

  it('renders about section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /Welcome/ })).toBeInTheDocument()
  })

  it('renders rooms', () => {
    render(<App />)
    expect(screen.getByText('Classic Room')).toBeInTheDocument()
    expect(screen.getByText('Deluxe Suite')).toBeInTheDocument()
    expect(screen.getByText('$199')).toBeInTheDocument()
    expect(screen.getByText('$299')).toBeInTheDocument()
  })

  it('renders testimonials', () => {
    render(<App />)
    expect(screen.getByText('Jean Smith')).toBeInTheDocument()
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('Jane Doe')).toBeInTheDocument()
  })

  it('renders events', () => {
    render(<App />)
    expect(screen.getByText('Summer Gala Night')).toBeInTheDocument()
    expect(screen.getByText('Wine & Dine Evening')).toBeInTheDocument()
    expect(screen.getByText('Beach Party')).toBeInTheDocument()
  })

  it('renders CTA banner', () => {
    render(<App />)
    expect(screen.getByText(/Make Yourself Comfortable/)).toBeInTheDocument()
    expect(screen.getByText('Reserve Now')).toBeInTheDocument()
  })

  it('renders footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
