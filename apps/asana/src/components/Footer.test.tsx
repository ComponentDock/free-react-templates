import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the studio name', () => {
    render(<Footer />)
    expect(screen.getByText('Asana Studio')).toBeInTheDocument()
  })

  it('renders Quick Links section', () => {
    render(<Footer />)
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    expect(screen.getAllByText('Classes').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Schedule').length).toBeGreaterThanOrEqual(1)
  })

  it('renders Navigation section', () => {
    render(<Footer />)
    expect(screen.getByText('Navigation')).toBeInTheDocument()
    expect(screen.getAllByText('Home').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Events').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument()
  })

  it('renders contact info', () => {
    render(<Footer />)
    expect(screen.getByText('123 Yoga Lane, Wellness City')).toBeInTheDocument()
    expect(screen.getByText('+1 234 567 8910')).toBeInTheDocument()
    expect(screen.getByText('info@asana.com')).toBeInTheDocument()
  })

  it('renders Component Dock attribution link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders the Made with text', () => {
    render(<Footer />)
    expect(screen.getByText('Made with')).toBeInTheDocument()
  })
})
