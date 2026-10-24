import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders four columns with quick links and contact rows', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Recent posts' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Quick links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Have a question?' })).toBeInTheDocument()
    const quickLinks = screen.getAllByRole('link', { name: /About us|Our services|Recent projects/ })
    expect(quickLinks).toHaveLength(3)
    expect(quickLinks[0]).toHaveAttribute('href', '#about')
    expect(quickLinks[1]).toHaveAttribute('href', '#services')
    expect(screen.getByRole('link', { name: 'Amberline on Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '+1 234 456 78910' })).toHaveAttribute(
      'href',
      'tel:+123445678910',
    )
  })

  it('carries the Component Dock attribution and no third-party credit', () => {
    const { container } = render(<Footer />)
    const attribution = screen.getByRole('link', { name: 'Component Dock' })
    expect(attribution).toHaveAttribute('href', 'https://www.componentdock.com/')
    const externalHosts = Array.from(container.querySelectorAll('a[href^="http"]')).map(
      (anchor) => new URL(anchor.getAttribute('href') ?? '').host,
    )
    expect(externalHosts).toContain('www.componentdock.com')
    expect(externalHosts.every((host) => ['www.componentdock.com', 'twitter.com', 'facebook.com', 'instagram.com'].includes(host))).toBe(true)
  })
})
