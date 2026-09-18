import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByText('Constructo')).toBeInTheDocument()
    expect(screen.getByText(/Welcome to our/)).toBeInTheDocument()
    expect(screen.getByText(/Professional Builder/)).toBeInTheDocument()
    expect(screen.getByText(/About Us/)).toBeInTheDocument()
    expect(screen.getByText(/What We Offer/)).toBeInTheDocument()
    expect(screen.getByText(/Why Choose Us/)).toBeInTheDocument()
    expect(screen.getByText(/Our Services/)).toBeInTheDocument()
    expect(screen.getByText(/Our Team/)).toBeInTheDocument()
    expect(screen.getByText(/Our Achievements/)).toBeInTheDocument()
    expect(screen.getByText(/Our Testimonials/)).toBeInTheDocument()
    expect(screen.getByText(/Our Featured Works/)).toBeInTheDocument()
    expect(screen.getByText(/Our Latest Blog/)).toBeInTheDocument()
    expect(screen.getByText(/Our Partners/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /book now/i })).toBeInTheDocument()
    expect(screen.getByText(/Component Dock/)).toBeInTheDocument()
  })

  it('sets the page title', () => {
    render(<App />)
    expect(document.title).toBe('Constructo — Construction Company Landing Template')
  })
})
