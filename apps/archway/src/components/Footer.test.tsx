import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand name', () => {
    render(<Footer />)
    expect(screen.getByText('Archway')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '#about')
    expect(screen.getByRole('link', { name: 'Services' })).toHaveAttribute('href', '#services')
  })

  it('renders service links', () => {
    render(<Footer />)
    expect(screen.getByText('Architectural Design')).toBeInTheDocument()
    expect(screen.getByText('Interior Design')).toBeInTheDocument()
    expect(screen.getByText('Exterior Design')).toBeInTheDocument()
    expect(screen.getByText('Lighting Design')).toBeInTheDocument()
    expect(screen.getByText('AutoCAD Service')).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Footer />)
    expect(screen.getByText(/203 Fake St\. Mountain View/)).toBeInTheDocument()
    expect(screen.getByText('+2 392 3929 210')).toBeInTheDocument()
    expect(screen.getByText('info@yourdomain.com')).toBeInTheDocument()
  })

  it('links to Component Dock in the copyright', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders copyright text', () => {
    render(<Footer />)
    expect(screen.getByText(/Archway\. All rights reserved/)).toBeInTheDocument()
  })
})
