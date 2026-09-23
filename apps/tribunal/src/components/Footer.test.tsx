import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders About Tribunal heading', () => {
    render(<Footer />)
    expect(screen.getByText('About Tribunal')).toBeInTheDocument()
  })

  it('renders about links', () => {
    render(<Footer />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('Lawyers')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders Communities section', () => {
    render(<Footer />)
    expect(screen.getByText('Communities')).toBeInTheDocument()
    expect(screen.getByText('Support')).toBeInTheDocument()
    expect(screen.getByText('Practice Areas')).toBeInTheDocument()
  })

  it('renders Contact Information', () => {
    render(<Footer />)
    expect(screen.getByText('Contact Information')).toBeInTheDocument()
    expect(screen.getByText(/198 West 21th Street/)).toBeInTheDocument()
    expect(screen.getByText('+ 1235 2355 98')).toBeInTheDocument()
    expect(screen.getByText('info@yoursite.com')).toBeInTheDocument()
  })

  it('renders Opening Hours', () => {
    render(<Footer />)
    expect(screen.getByText('Opening Hours')).toBeInTheDocument()
    expect(screen.getByText('Mon - Thu: 9:00 - 21:00')).toBeInTheDocument()
    expect(screen.getByText('Fri: 8:00 - 21:00')).toBeInTheDocument()
    expect(screen.getByText('Sat: 9:30 - 15:00')).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/tribunal.*all rights reserved/i)).toBeInTheDocument()
  })
})
