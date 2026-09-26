import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the FRAMECAST logo in the navbar', () => {
    render(<App />)
    const logos = screen.getAllByText('FRAMECAST')
    expect(logos.length).toBeGreaterThanOrEqual(1)
  })

  it('renders the hero section', () => {
    render(<App />)
    expect(screen.getByText('Welcome to Framecast')).toBeInTheDocument()
  })

  it('renders the portfolio grid section', () => {
    render(<App />)
    const items = screen.getAllByText('Brand Identity')
    expect(items.length).toBeGreaterThanOrEqual(1)
  })

  it('renders the services section', () => {
    render(<App />)
    const headings = screen.getAllByRole('heading', { name: 'Services' })
    expect(headings.length).toBeGreaterThanOrEqual(1)
  })

  it('renders the blog section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Our Creative Articles' })).toBeInTheDocument()
  })

  it('renders the testimonials section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Testimonials' })).toBeInTheDocument()
  })

  it('renders the CTA section', () => {
    render(<App />)
    expect(screen.getByText(/Let's Discuss Your Projects/)).toBeInTheDocument()
  })

  it('renders the footer with componentdock link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
