import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the wordmark, blurb and the two link columns', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Exposure' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Navigation' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Useful Links' })).toBeInTheDocument()
    for (const link of ['Home', 'Events', 'Testimonial', 'Categories', 'Contacts']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
    for (const link of ['Registration', 'Login', 'Policy', 'Terms & Conditions']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('renders the Instagram Feed grid with six thumbnails', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Instagram Feed' })).toBeInTheDocument()
    expect(document.querySelectorAll('footer img').length).toBe(6)
  })

  it('renders the copyright bar with a neutral credit and the Follow Us social row', () => {
    render(<Footer />)
    expect(screen.getByText(/Copyright ©/)).toBeInTheDocument()
    expect(screen.getByText(/Made with/)).toBeInTheDocument()
    expect(screen.getByText('Follow Us')).toBeInTheDocument()
    for (const social of ['X', 'Facebook', 'Globe', 'Instagram']) {
      expect(screen.getByRole('link', { name: social })).toBeInTheDocument()
    }
  })

  it('links to Component Dock in the bottom bar', () => {
    render(<Footer />)
    const dock = screen.getByRole('link', { name: /Component Dock/i })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(dock).toHaveAttribute('target', '_blank')
  })
})
