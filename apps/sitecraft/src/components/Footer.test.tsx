import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the footer element', () => {
    render(<Footer />)

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders contact information in the bar and footer', () => {
    render(<Footer />)

    // Contact bar has address text
    const addresses = screen.getAllByText(/291 South 21th Street/)
    expect(addresses.length).toBeGreaterThanOrEqual(2)

    expect(screen.getByText('info@example.com')).toBeInTheDocument()
    expect(screen.getByText('(001) 2345 6789')).toBeInTheDocument()
  })

  it('renders the About section with brand name', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { level: 4, name: 'About Sitecraft' })).toBeInTheDocument()
  })

  it('renders Information links', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { level: 4, name: 'Information' })).toBeInTheDocument()
    expect(screen.getByText('Our Company')).toBeInTheDocument()
    expect(screen.getByText('FAQ')).toBeInTheDocument()
  })

  it('renders Instagram grid', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { level: 4, name: 'Instagram' })).toBeInTheDocument()
    const instagramImages = screen.getAllByRole('img', { name: /instagram post/i })
    expect(instagramImages.length).toBe(6)
  })

  it('renders Contact Info section', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { level: 4, name: 'Contact Info' })).toBeInTheDocument()
    expect(screen.getByText('+ 1235 2355 98')).toBeInTheDocument()
    expect(screen.getByText('info@yoursite.com')).toBeInTheDocument()
  })

  it('renders copyright with Component Dock link', () => {
    render(<Footer />)

    expect(screen.getByText(/Sitecraft\. All rights reserved/)).toBeInTheDocument()

    const cdLink = screen.getByRole('link', { name: /component dock/i })
    expect(cdLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders social links', () => {
    render(<Footer />)

    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByLabelText('Dribbble')).toBeInTheDocument()
  })
})
