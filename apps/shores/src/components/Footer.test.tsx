import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders Our Mission column', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /our mission/i })).toBeInTheDocument()
    expect(screen.getByText(/dedicated to making the world/i)).toBeInTheDocument()
  })

  it('renders Quick Links column', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /quick links/i })).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Causes')).toBeInTheDocument()
  })

  it('renders Gallery column', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /gallery/i })).toBeInTheDocument()
    const galleryImages = screen.getAllByRole('img', { name: /gallery/i })
    expect(galleryImages.length).toBe(6)
  })

  it('renders Contact Us column with details', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /contact us/i })).toBeInTheDocument()
    expect(screen.getByText('Head Office')).toBeInTheDocument()
    expect(screen.getByText('123, Main Street, Your City')).toBeInTheDocument()
    // Phone numbers are split across elements due to <br />, use getByText with exact false
    const phoneTexts = screen.getAllByText(/\+123 456 7890/)
    expect(phoneTexts.length).toBeGreaterThanOrEqual(1)
  })

  it('renders Component Dock link in footer bottom', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders copyright with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })
})
