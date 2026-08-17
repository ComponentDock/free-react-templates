import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import {
  brandName,
  componentDockLabel,
  componentDockUrl,
  contactPhone,
  copyrightLine,
  footerAddress,
  footerBlurb,
  footerServices,
  recentPosts,
  tagline,
} from '../data'

describe('Footer', () => {
  it('renders the dark four-widget footer with brand, services, recent posts, and questions', () => {
    const { container } = render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveClass('bg-ink')
    expect(screen.getByRole('link', { name: brandName })).toBeInTheDocument()
    expect(screen.getByText(tagline)).toBeInTheDocument()
    expect(screen.getByText(footerBlurb)).toBeInTheDocument()

    for (const service of footerServices) {
      expect(screen.getByText(service)).toBeInTheDocument()
    }
    for (const post of recentPosts) {
      expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument()
      expect(screen.getByText(post.date)).toBeInTheDocument()
    }
    expect(screen.getByText(footerAddress)).toBeInTheDocument()
    expect(screen.getByText(contactPhone)).toBeInTheDocument()
    expect(screen.getByText('@info@email.com')).toBeInTheDocument()
    expect(container.querySelectorAll('.footer-social svg').length).toBe(3)
  })

  it('links the copyright bar to Component Dock', () => {
    render(<Footer />)
    expect(screen.getByText(copyrightLine)).toBeInTheDocument()
    const dock = screen.getByRole('link', { name: componentDockLabel })
    expect(dock).toHaveAttribute('href', componentDockUrl)
    expect(dock).toHaveAttribute('target', '_blank')
  })
})
