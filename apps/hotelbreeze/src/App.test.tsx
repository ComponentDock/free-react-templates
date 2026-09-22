import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Hotelbreeze — Luxury Hotel Template')
  })

  it('composes banner, main, and contentinfo landmarks', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders hero content', () => {
    render(<App />)
    expect(screen.getByText('Simple & Elegant')).toBeInTheDocument()
    expect(screen.getByText('Welcome')).toBeInTheDocument()
    expect(screen.getByText('Learn More')).toBeInTheDocument()
  })

  it('renders booking bar', () => {
    render(<App />)
    expect(screen.getByLabelText('Check In')).toBeInTheDocument()
    expect(screen.getByLabelText('Check Out')).toBeInTheDocument()
    expect(screen.getByText('Check Availability')).toBeInTheDocument()
  })

  it('renders services', () => {
    render(<App />)
    expect(screen.getByText('Restaurant')).toBeInTheDocument()
    expect(screen.getByText('Free Wi-Fi')).toBeInTheDocument()
    expect(screen.getByText('Airport Transfer')).toBeInTheDocument()
  })

  it('renders rooms', () => {
    render(<App />)
    expect(screen.getByText('Standard Room')).toBeInTheDocument()
    expect(screen.getByText('Deluxe Suite')).toBeInTheDocument()
    expect(screen.getByText('Premium Suite')).toBeInTheDocument()
  })

  it('renders testimonials', () => {
    render(<App />)
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
  })

  it('renders contact section', () => {
    render(<App />)
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
    expect(screen.getByText('info@hotelbreeze.com')).toBeInTheDocument()
  })

  it('renders footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
