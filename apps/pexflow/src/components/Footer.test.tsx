import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders logo', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /Pexflow/i })).toBeInTheDocument()
  })

  it('renders Best Services links', () => {
    render(<Footer />)
    expect(screen.getByText('Best Services')).toBeInTheDocument()
    expect(screen.getByText('Building Construction')).toBeInTheDocument()
    expect(screen.getByText('Architecture Design')).toBeInTheDocument()
  })

  it('renders gallery images', () => {
    render(<Footer />)
    const thumbnails = screen.getAllByAltText('Gallery thumbnail')
    expect(thumbnails).toHaveLength(6)
  })

  it('renders contact info', () => {
    render(<Footer />)
    expect(screen.getByText('Contact Info')).toBeInTheDocument()
    expect(screen.getByText(/42 Construction Ave/)).toBeInTheDocument()
    expect(screen.getByText('+1 (555) 987-6543')).toBeInTheDocument()
    expect(screen.getByText('info@pexflow.com')).toBeInTheDocument()
  })

  it('renders Component Dock link in copyright', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders copyright year', () => {
    render(<Footer />)
    expect(screen.getByText(new RegExp(String(new Date().getFullYear())))).toBeInTheDocument()
  })
})
