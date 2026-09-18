import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    // TopBar
    expect(screen.getAllByText('+10 367 267 2678').length).toBeGreaterThanOrEqual(1)
    // Navbar brand link
    const techwiseLinks = screen.getAllByRole('link', { name: /Techwise/i })
    expect(techwiseLinks.length).toBeGreaterThanOrEqual(2) // Navbar + Footer
    // Hero
    expect(screen.getByRole('heading', { name: /Welcome To Techwise/i })).toBeInTheDocument()
    // Services
    expect(screen.getByRole('heading', { name: /We Provide Effective/i })).toBeInTheDocument()
    // About
    expect(screen.getByRole('heading', { name: /We Are Techwise/i })).toBeInTheDocument()
    // Team
    expect(screen.getByRole('heading', { name: /Our Team/i })).toBeInTheDocument()
    // Portfolio
    expect(
      screen.getByRole('heading', { name: /Our Exceptional Quality Work/i }),
    ).toBeInTheDocument()
    // WhyChooseUs
    expect(screen.getByRole('heading', { name: /Why Choose Us/i })).toBeInTheDocument()
    // FAQ
    expect(screen.getByRole('heading', { name: /Frequently Ask/i })).toBeInTheDocument()
    // Testimonials
    expect(screen.getByRole('heading', { name: /What Are Clients Says/i })).toBeInTheDocument()
    // Blog
    expect(screen.getByRole('heading', { name: /Recent Post/i })).toBeInTheDocument()
    // Newsletter
    expect(
      screen.getByRole('heading', { name: /Subscribe to our Newsletter/i }),
    ).toBeInTheDocument()
    // Footer contact
    expect(screen.getAllByText('info@techwise.com').length).toBeGreaterThanOrEqual(1)
    // FooterBottom
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
