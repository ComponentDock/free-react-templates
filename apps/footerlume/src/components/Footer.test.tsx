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

  it('applies dark background to footer', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer.className).toContain('bg-footer-bg')
  })

  it('renders navigation menu links', () => {
    render(<Footer />)
    const links = ['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact']
    for (const label of links) {
      const link = screen.getByRole('link', { name: label })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', '#')
    }
  })

  it('renders navigation links with muted white text', () => {
    render(<Footer />)
    const homeLink = screen.getByRole('link', { name: 'Home' })
    expect(homeLink.className).toContain('text-footer-text')
  })

  it('renders navigation links with hover brightening', () => {
    render(<Footer />)
    const homeLink = screen.getByRole('link', { name: 'Home' })
    expect(homeLink.className).toContain('hover:text-footer-heading')
  })

  it('renders social media icons with accessible labels', () => {
    render(<Footer />)
    const socialNames = ['Facebook', 'Twitter', 'Instagram', 'LinkedIn', 'YouTube']
    for (const name of socialNames) {
      const link = screen.getByRole('link', { name })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', '#')
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noreferrer')
      expect(link).toHaveAttribute('aria-label', name)
    }
  })

  it('renders social icons as circular elements', () => {
    render(<Footer />)
    const facebook = screen.getByRole('link', { name: 'Facebook' })
    expect(facebook.className).toContain('rounded-full')
    expect(facebook.className).toContain('h-10')
    expect(facebook.className).toContain('w-10')
  })

  it('renders social icons with hover color change', () => {
    render(<Footer />)
    const facebook = screen.getByRole('link', { name: 'Facebook' })
    expect(facebook.className).toContain('text-footer-text')
    expect(facebook.className).toContain('hover:text-footer-heading')
  })

  it('renders copyright bar', () => {
    render(<Footer />)
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })

  it('renders copyright with top border separator', () => {
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

  it('renders footer headings as uppercase with letter-spacing', () => {
    render(<Footer />)
    const heading = screen.getByRole('heading', { name: 'Menu' })
    expect(heading.className).toContain('uppercase')
    expect(heading.className).toContain('tracking-[2px]')
  })

  it('renders footer headings with white color', () => {
    render(<Footer />)
    const heading = screen.getByRole('heading', { name: 'Menu' })
    expect(heading.className).toContain('text-footer-heading')
  })

  it('renders social icons list with flex layout', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    const lists = footer.querySelectorAll('ul')
    const socialList = lists[1]
    expect(socialList).toBeDefined()
    expect(socialList!.className).toContain('flex')
  })
})
