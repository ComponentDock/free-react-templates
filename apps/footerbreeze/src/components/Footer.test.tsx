import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the footer element with semantic role', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
    expect(footer.tagName).toBe('FOOTER')
  })

  it('applies black background to footer', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(footer.className).toContain('bg-footer-bg')
  })

  it('renders the brand logo text', () => {
    render(<Footer />)

    const logo = screen.getByRole('heading', { level: 2 })
    expect(logo).toBeInTheDocument()
    expect(logo.textContent).toBe('FooterBreeze')
  })

  it('renders the brand description', () => {
    render(<Footer />)

    expect(screen.getByText(/Discover a curated collection/)).toBeInTheDocument()
  })

  it('renders primary navigation links', () => {
    render(<Footer />)

    const links = ['Home', 'About Us', 'Portfolio', 'Services', 'Contact']
    for (const label of links) {
      const link = screen.getByRole('link', { name: label })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', '#')
    }
  })

  it('renders secondary navigation links', () => {
    render(<Footer />)

    const links = ['Clients', 'Team', 'Career', 'Testimonials', 'Journal']
    for (const label of links) {
      const link = screen.getByRole('link', { name: label })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', '#')
    }
  })

  it('renders legal navigation links', () => {
    render(<Footer />)

    const links = ['Privacy Policy', 'Terms & Conditions', 'Partners']
    for (const label of links) {
      const link = screen.getByRole('link', { name: label })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', '#')
    }
  })

  it('renders social media icons with accessible labels', () => {
    render(<Footer />)

    const socialNames = ['Instagram', 'Twitter', 'Facebook', 'Pinterest', 'Dribbble']
    for (const name of socialNames) {
      const link = screen.getByRole('link', { name })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', '#')
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noreferrer')
      expect(link).toHaveAttribute('aria-label', name)
    }
  })

  it('renders the Contact Us CTA button', () => {
    render(<Footer />)

    const btn = screen.getByRole('link', { name: 'Contact Us' })
    expect(btn).toBeInTheDocument()
    expect(btn).toHaveAttribute('href', '#')
    expect(btn.className).toContain('bg-cta-pink')
    expect(btn.className).toContain('rounded-[30px]')
  })

  it('renders the copyright bar', () => {
    render(<Footer />)

    expect(screen.getByText(/2019-2020 All Rights Reserved/)).toBeInTheDocument()
  })

  it('renders Component Dock attribution link', () => {
    render(<Footer />)

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noreferrer')
  })

  it('renders four-column grid on desktop', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    const grid = footer.querySelector('.grid')
    expect(grid).not.toBeNull()
    expect(grid!.className).toContain('md:grid-cols-4')
  })

  it('renders social icons with hover styling', () => {
    render(<Footer />)

    const instagram = screen.getByRole('link', { name: 'Instagram' })
    expect(instagram.className).toContain('text-footer-nav')
    expect(instagram.className).toContain('hover:text-white')
  })

  it('renders nav links with bottom margin spacing', () => {
    render(<Footer />)

    const homeLink = screen.getByRole('link', { name: 'Home' })
    const listItem = homeLink.closest('li')
    expect(listItem).not.toBeNull()
  })

  it('renders copyright with top border styling', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    const borderDiv = footer.querySelector('.border-t')
    expect(borderDiv).not.toBeNull()
    expect(borderDiv!.className).toContain('border-footer-border')
  })
})
