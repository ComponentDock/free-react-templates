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

  it('applies dark background styling to footer', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(footer.className).toContain('bg-footer-bg')
  })

  it('renders the background image overlay', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    const overlays = footer.querySelectorAll('[aria-hidden="true"]')
    expect(overlays.length).toBeGreaterThanOrEqual(2)
  })

  it('renders the brand logo text', () => {
    render(<Footer />)

    const logo = screen.getByRole('link', { name: 'Cornerstone' })
    expect(logo).toBeInTheDocument()
    expect(logo.textContent).toBe('Cornerstone')
  })

  it('renders the brand description', () => {
    render(<Footer />)

    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
  })

  it('renders Discover navigation links', () => {
    render(<Footer />)

    const links = ['Home', 'About Us', 'Portfolio', 'Services', 'Contact']
    for (const label of links) {
      const link = screen.getByRole('link', { name: label })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', '#')
    }
  })

  it('renders About navigation links', () => {
    render(<Footer />)

    const links = ['Clients', 'Team', 'Career', 'Testimonials', 'Journal']
    for (const label of links) {
      const link = screen.getByRole('link', { name: label })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', '#')
    }
  })

  it('renders Help navigation links', () => {
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

  it('renders social icons with hover styling', () => {
    render(<Footer />)

    const instagram = screen.getByRole('link', { name: 'Instagram' })
    expect(instagram.className).toContain('text-footer-link')
    expect(instagram.className).toContain('hover:text-white')
  })

  it('renders nav links with hover styling', () => {
    render(<Footer />)

    const homeLink = screen.getByRole('link', { name: 'Home' })
    expect(homeLink.className).toContain('text-footer-link')
    expect(homeLink.className).toContain('hover:text-white')
    expect(homeLink.className).toContain('duration-300')
  })

  it('renders column headings as white bold text', () => {
    render(<Footer />)

    const headings = screen.getAllByRole('heading', { level: 3 })
    expect(headings.length).toBe(4)

    for (const heading of headings) {
      expect(heading.className).toContain('text-footer-heading')
      expect(heading.className).toContain('font-bold')
    }
  })

  it('renders copyright bar with centered text', () => {
    render(<Footer />)

    expect(screen.getByText(/2019—2020 All Rights Reserved/)).toBeInTheDocument()
  })

  it('renders copyright with top border styling', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    const borderDiv = footer.querySelector('.border-t')
    expect(borderDiv).not.toBeNull()
    expect(borderDiv!.className).toContain('border-footer-border')
  })

  it('renders Component Dock attribution link', () => {
    render(<Footer />)

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noreferrer')
  })

  it('renders five-column grid on desktop', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    const grid = footer.querySelector('.grid')
    expect(grid).not.toBeNull()
    expect(grid!.className).toContain('md:grid-cols-5')
  })

  it('renders footer with 7rem vertical padding', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(footer.className).toContain('py-[7rem]')
  })

  it('renders navigation lists with proper spacing', () => {
    render(<Footer />)

    const lists = screen.getAllByRole('list')
    expect(lists.length).toBeGreaterThanOrEqual(4)
  })
})
