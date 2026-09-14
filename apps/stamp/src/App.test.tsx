import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders the Stamp brand name', () => {
    render(<App />)
    expect(screen.getAllByText('Stamp').length).toBeGreaterThan(0)
  })

  it('renders the hero section', () => {
    render(<App />)
    expect(screen.getByText('Real Solutions!')).toBeInTheDocument()
    expect(screen.getByText(/Since/)).toBeInTheDocument()
    expect(screen.getByText('1990')).toBeInTheDocument()
  })

  it('renders 4 service cards', () => {
    render(<App />)
    expect(screen.getByText('Advance Technology')).toBeInTheDocument()
    expect(screen.getByText('World Quality Service')).toBeInTheDocument()
    expect(screen.getByText('Competitive Pricing')).toBeInTheDocument()
    expect(screen.getByText('Lifetime Support')).toBeInTheDocument()
  })

  it('renders the about section', () => {
    render(<App />)
    expect(screen.getByText(/We Are Committed To Customer Satisfaction/)).toBeInTheDocument()
  })

  it('renders 3 industries', () => {
    render(<App />)
    expect(screen.getByText('Mechanical Engineering')).toBeInTheDocument()
    expect(screen.getAllByText('Chemical Research').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Industrial Construction')).toBeInTheDocument()
  })

  it('renders the FAQ section', () => {
    render(<App />)
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument()
  })

  it('renders the portfolio section', () => {
    render(<App />)
    expect(screen.getByText(/Recent Completed/)).toBeInTheDocument()
  })

  it('renders the team section', () => {
    render(<App />)
    expect(screen.getByText('Meet Experienced Professional')).toBeInTheDocument()
  })

  it('renders the blog section', () => {
    render(<App />)
    expect(screen.getByText('Latest From Our Blog Page')).toBeInTheDocument()
  })

  it('renders the newsletter section', () => {
    render(<App />)
    expect(screen.getByText('Do You Have a Question?')).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /Component Dock/ })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
