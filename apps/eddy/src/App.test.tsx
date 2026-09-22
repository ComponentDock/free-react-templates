import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)

    // Navbar
    expect(screen.getByRole('link', { name: 'EDDY' })).toBeInTheDocument()

    // Hero
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Beach Resort')

    // Features
    expect(screen.getByText('Phone Booking')).toBeInTheDocument()

    // Gallery
    expect(screen.getByRole('heading', { name: 'Our Gallery' })).toBeInTheDocument()

    // About
    expect(screen.getByText('10 years of excellence')).toBeInTheDocument()

    // Testimonials
    expect(screen.getByText('Samantha Brown')).toBeInTheDocument()

    // Booking
    expect(screen.getByRole('button', { name: 'CHECK AVAILABILITY' })).toBeInTheDocument()

    // Blog
    expect(screen.getByRole('heading', { name: 'Latest News' })).toBeInTheDocument()

    // Footer
    expect(screen.getByRole('link', { name: 'Component Dock' })).toBeInTheDocument()
  })
})
