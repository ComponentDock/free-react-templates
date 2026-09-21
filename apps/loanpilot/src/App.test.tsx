import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getByRole('navigation', { name: 'Primary' })).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Loanpilot — Loan & Finance Template')
  })

  it('renders the TopBar', () => {
    render(<App />)
    expect(screen.getByText('info@yoursite.com')).toBeInTheDocument()
  })

  it('renders the Navbar', () => {
    render(<App />)
    expect(screen.getAllByRole('link', { name: 'Home' }).length).toBeGreaterThanOrEqual(1)
  })

  it('renders the Hero section', () => {
    render(<App />)
    expect(screen.getByText(/Find The Best Monthly Payment/i)).toBeInTheDocument()
  })

  it('renders the About section', () => {
    render(<App />)
    expect(screen.getByText(/Thousands Of Customers Trust/i)).toBeInTheDocument()
  })

  it('renders the LoanServices section', () => {
    render(<App />)
    expect(screen.getByText('Personal Loan')).toBeInTheDocument()
    expect(screen.getByText('Business Loan')).toBeInTheDocument()
  })

  it('renders the Choose section', () => {
    render(<App />)
    expect(screen.getByText(/Why People Choose Us/i)).toBeInTheDocument()
  })

  it('renders the Testimonial section', () => {
    render(<App />)
    expect(screen.getByText(/What Customers Are Saying/i)).toBeInTheDocument()
  })

  it('renders the Counter section', () => {
    render(<App />)
    expect(screen.getByText('2100')).toBeInTheDocument()
    expect(screen.getByText('99%')).toBeInTheDocument()
  })

  it('renders the CallToAction section', () => {
    render(<App />)
    expect(screen.getByText(/Are You Looking For A Loan/i)).toBeInTheDocument()
  })

  it('renders the Blog section', () => {
    render(<App />)
    expect(screen.getByText(/Latest Post/i)).toBeInTheDocument()
  })

  it('renders the ContactWidget section', () => {
    render(<App />)
    expect(screen.getByText('New York')).toBeInTheDocument()
    expect(screen.getByText('New Jersey')).toBeInTheDocument()
  })

  it('renders the Footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /Component Dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
