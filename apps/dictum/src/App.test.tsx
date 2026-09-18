import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    // Navbar
    expect(screen.getByText('Dictum')).toBeInTheDocument()
    // Hero
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'We Are The Best Consulting Agency',
    )
    // About
    expect(screen.getByText('Welcome To Dictum')).toBeInTheDocument()
    // Team heading
    expect(screen.getByRole('heading', { name: 'Our Team' })).toBeInTheDocument()
    // How It Works
    expect(screen.getByText('How It Works')).toBeInTheDocument()
    // Testimonials (nav link + heading — just check it renders)
    expect(screen.getAllByText('Testimonials').length).toBeGreaterThanOrEqual(1)
    // Blog
    expect(screen.getByText('Our Blog Posts')).toBeInTheDocument()
    // Contact
    expect(screen.getByText('Contact Form')).toBeInTheDocument()
    // CTA Banner
    expect(screen.getByText("Let's Get Started")).toBeInTheDocument()
    // Footer
    expect(screen.getByText('Subscribe Newsletter')).toBeInTheDocument()
    // Component Dock link
    expect(screen.getByText('Component Dock')).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
