import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand name', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Trowel' })).toBeInTheDocument()
  })

  it('renders service links', () => {
    render(<Footer />)
    expect(screen.getByText('General Contracting')).toBeInTheDocument()
    expect(screen.getByText('Architecture Design')).toBeInTheDocument()
    expect(screen.getByText('Material Supply')).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Footer />)
    expect(screen.getByText(/123 Builder Avenue/)).toBeInTheDocument()
    expect(screen.getByText('+1 (555) 987-6543')).toBeInTheDocument()
    expect(screen.getByText('info@trowel.com')).toBeInTheDocument()
  })

  it('renders business hours', () => {
    render(<Footer />)
    expect(screen.getByText('Monday – Friday: 9am to 8pm')).toBeInTheDocument()
    expect(screen.getByText('Saturday: 9am to 5pm')).toBeInTheDocument()
    expect(screen.getByText('Sunday: Closed')).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/Trowel\. All rights reserved/)).toBeInTheDocument()
  })
})
