import { render, screen } from '@testing-library/react'
import { App } from './App'
import { describe, expect, it } from 'vitest'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getAllByText('Loanworks').length).toBeGreaterThan(0)
    expect(screen.getByText(/Get Loan for your Business growth/)).toBeInTheDocument()
    expect(screen.getByText('What we offer for you')).toBeInTheDocument()
    expect(screen.getByText('Why Choose Us?')).toBeInTheDocument()
    expect(screen.getAllByText('How it Works').length).toBeGreaterThan(0)
    expect(screen.getByText('Frequently ask')).toBeInTheDocument()
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
    expect(screen.getByText(/Apply for a Loan for your startup/)).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Loanworks — Finance & Payday Loan Landing')
  })
})
