import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand name', () => {
    render(<Footer />)
    expect(screen.getByText('Doflo')).toBeInTheDocument()
  })

  it('renders company links', () => {
    render(<Footer />)
    expect(screen.getByText('Media')).toBeInTheDocument()
    expect(screen.getByText('Carrier')).toBeInTheDocument()
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
    expect(screen.getByText('FAQ')).toBeInTheDocument()
  })

  it('renders resource links', () => {
    render(<Footer />)
    expect(screen.getByText('UI Kit')).toBeInTheDocument()
    expect(screen.getByText('WordPress Theme')).toBeInTheDocument()
    expect(screen.getByText('Illustration')).toBeInTheDocument()
  })

  it('renders contact locations', () => {
    render(<Footer />)
    expect(screen.getByText('London - UK')).toBeInTheDocument()
    expect(screen.getByText('New York - USA')).toBeInTheDocument()
  })

  it('renders the Component Dock credit', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders the contentinfo landmark', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
