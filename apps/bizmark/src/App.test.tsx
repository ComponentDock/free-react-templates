import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    // Navbar
    expect(screen.getByText('Bizmark')).toBeInTheDocument()
    // Banner
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    // About
    expect(screen.getByText(/24 Years Experience/i)).toBeInTheDocument()
    // Services
    expect(screen.getByText(/We Provide Best Services/i)).toBeInTheDocument()
    // Testimonials
    expect(screen.getByText(/Customer Are Saying/i)).toBeInTheDocument()
    // Portfolio
    expect(screen.getByText(/Explore Our Best Practice Area/i)).toBeInTheDocument()
    // Advisory
    expect(screen.getByText(/adviser service/i)).toBeInTheDocument()
    // Blog
    expect(screen.getByText(/Update From Blog/i)).toBeInTheDocument()
    // Footer
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
  })

  it('renders footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('has no ColorLib references', () => {
    render(<App />)
    const body = document.body.textContent || ''
    expect(body.toLowerCase()).not.toContain('colorlib')
  })
})
