import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the navbar', () => {
    render(<App />)
    const headings = screen.getAllByText('Dwelling')
    expect(headings.length).toBeGreaterThanOrEqual(1)
  })

  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByText('Riverside Haven')).toBeInTheDocument()
    expect(screen.getByText('Where would you rather live?')).toBeInTheDocument()
    expect(screen.getByText('Latest')).toBeInTheDocument()
    expect(screen.getByText('Why Choose Us')).toBeInTheDocument()
    expect(screen.getAllByText('Featured').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Our')).toBeInTheDocument()
    expect(screen.getAllByText('Apartment').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('What Our Clients Say')).toBeInTheDocument()
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
