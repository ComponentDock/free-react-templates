import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { BRAND, FOOTER, SOCIALS } from '../data'

describe('Footer', () => {
  it('renders the brand, tagline, and social icon links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: BRAND })).toBeInTheDocument()
    expect(screen.getByText(FOOTER.tagline)).toBeInTheDocument()
    for (const social of SOCIALS) {
      expect(screen.getByRole('link', { name: social })).toBeInTheDocument()
    }
  })

  it('renders the Services, Navigation, and Contact columns', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Services' })).toBeInTheDocument()
    for (const item of FOOTER.services) {
      expect(screen.getByRole('link', { name: item })).toBeInTheDocument()
    }
    expect(screen.getByRole('heading', { name: 'Navigation' })).toBeInTheDocument()
    for (const item of FOOTER.navigation) {
      expect(screen.getByRole('link', { name: item })).toBeInTheDocument()
    }
    expect(screen.getByRole('heading', { name: 'Contact us' })).toBeInTheDocument()
    expect(screen.getByText(FOOTER.contact.email)).toBeInTheDocument()
    expect(screen.getByText(FOOTER.contact.address)).toBeInTheDocument()
    expect(screen.getByText(FOOTER.contact.phone)).toBeInTheDocument()
  })

  it('links the copyright bar to Component Dock', () => {
    render(<Footer />)
    const credit = screen.getByRole('link', { name: FOOTER.credit })
    expect(credit).toHaveAttribute('href', FOOTER.creditUrl)
  })
})
