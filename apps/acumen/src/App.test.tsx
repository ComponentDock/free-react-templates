import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
    expect(screen.getByText('We Are Provide Creative Business')).toBeInTheDocument()
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('Our Services')).toBeInTheDocument()
    expect(screen.getByText('Our Skills')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Portfolio' })).toBeInTheDocument()
    expect(screen.getByText('Our Team')).toBeInTheDocument()
    expect(screen.getByText('Pricing Plans')).toBeInTheDocument()
    expect(screen.getByText('Latest Blog')).toBeInTheDocument()
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Acumen — Business Template')
  })

  it('has Component Dock footer link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('navbar links point to correct sections', () => {
    render(<App />)
    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    const servicesLink = nav.querySelector('a[href="#services"]')
    expect(servicesLink).toBeTruthy()
    const contactLink = nav.querySelector('a[href="#contact"]')
    expect(contactLink).toBeTruthy()
  })
})
