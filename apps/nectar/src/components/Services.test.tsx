import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /experience great services/i })).toBeInTheDocument()
  })

  it('renders 3 service cards', () => {
    render(<Services />)
    expect(screen.getByText('Building Construction')).toBeInTheDocument()
    expect(screen.getByText('Interior Design')).toBeInTheDocument()
    expect(screen.getByText('24/7 Support')).toBeInTheDocument()
  })

  it('renders the description for each service', () => {
    render(<Services />)
    expect(screen.getByText(/From foundation to finish/)).toBeInTheDocument()
    expect(screen.getByText(/Transform your spaces/)).toBeInTheDocument()
    expect(screen.getByText(/dedicated support team/)).toBeInTheDocument()
  })

  it('renders social link icons for each service', () => {
    render(<Services />)
    const socialLinks = screen.getAllByRole('link', { name: /follow us on/i })
    // 3 services × 4 social icons = 12
    expect(socialLinks).toHaveLength(12)
  })

  it('renders social links with correct hrefs', () => {
    render(<Services />)
    const fbLinks = screen.getAllByRole('link', { name: /follow us on facebook/i })
    fbLinks.forEach((link) => {
      expect(link).toHaveAttribute('href', '#facebook')
    })
    const twLinks = screen.getAllByRole('link', { name: /follow us on twitter/i })
    twLinks.forEach((link) => {
      expect(link).toHaveAttribute('href', '#twitter')
    })
  })

  it('renders social link first letter', () => {
    render(<Services />)
    const facebookLinks = screen.getAllByText('F')
    expect(facebookLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('renders service icons with aria-hidden', () => {
    const { container } = render(<Services />)
    const hiddenIcons = container.querySelectorAll('[aria-hidden="true"]')
    expect(hiddenIcons.length).toBeGreaterThanOrEqual(3)
  })

  it('renders all social icon labels for all services', () => {
    render(<Services />)
    expect(screen.getAllByRole('link', { name: /follow us on facebook/i })).toHaveLength(3)
    expect(screen.getAllByRole('link', { name: /follow us on twitter/i })).toHaveLength(3)
    expect(screen.getAllByRole('link', { name: /follow us on linkedin/i })).toHaveLength(3)
    expect(screen.getAllByRole('link', { name: /follow us on instagram/i })).toHaveLength(3)
  })

  it('renders the decorative brand divider', () => {
    const { container } = render(<Services />)
    const dividers = container.querySelectorAll('[aria-hidden="true"]')
    expect(dividers.length).toBeGreaterThanOrEqual(1)
  })
})
