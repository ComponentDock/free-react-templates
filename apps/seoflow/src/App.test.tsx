import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the full template with all sections', () => {
    render(<App />)
    // Navbar - SeoFlow logo appears in both navbar and footer
    expect(screen.getAllByRole('link', { name: 'SeoFlow' }).length).toBeGreaterThanOrEqual(1)
    // Hero
    expect(screen.getByText(/BoostUp your Business/i)).toBeInTheDocument()
    // Services
    expect(screen.getByText('SEO/SEM')).toBeInTheDocument()
    // About
    expect(screen.getByText(/We are an SEO company/i)).toBeInTheDocument()
    // Case Studies
    expect(screen.getByText('Our Selected Case Study')).toBeInTheDocument()
    // FAQ
    expect(screen.getByText('Why Choose Us')).toBeInTheDocument()
    // Features
    expect(screen.getByText('Custom design')).toBeInTheDocument()
    // Testimonials
    expect(screen.getByText('Robert Thomson')).toBeInTheDocument()
    // Footer CTA
    expect(screen.getByText(/Let's Start your project/i)).toBeInTheDocument()
  })

  it('renders the Component Dock link in footer', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
