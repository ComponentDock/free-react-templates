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

  it('applies dark navy background to footer', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer.className).toContain('bg-footer-bg')
  })

  it('renders the brand heading "Bedrock"', () => {
    render(<Footer />)
    const headings = screen.getAllByRole('heading', { level: 2 })
    expect(headings[0]).toHaveTextContent('Bedrock')
  })

  it('renders the brand description', () => {
    render(<Footer />)
    expect(screen.getByText(/A small river named Duden/)).toBeInTheDocument()
  })

  it('renders social media icons with accessible labels', () => {
    render(<Footer />)
    const socialNames = ['Twitter', 'Facebook', 'Instagram']
    for (const name of socialNames) {
      const link = screen.getByRole('link', { name })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', '#')
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noreferrer')
      expect(link).toHaveAttribute('aria-label', name)
    }
  })

  it('renders Latest News section heading', () => {
    render(<Footer />)
    expect(screen.getByText('Latest News')).toBeInTheDocument()
  })

  it('renders two blog post cards', () => {
    render(<Footer />)
    const titles = screen.getAllByText(/Even the all-powerful/)
    expect(titles).toHaveLength(2)
  })

  it('renders blog post metadata (date, author, comments)', () => {
    render(<Footer />)
    expect(screen.getAllByText(/Oct\. 16, 2019/).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Admin').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('19').length).toBeGreaterThanOrEqual(1)
  })

  it('renders Quick Links heading and navigation', () => {
    render(<Footer />)
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    const links = ['Home', 'About', 'Services', 'Works', 'Blog', 'Contact']
    for (const label of links) {
      const link = screen.getByRole('link', { name: label })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', '#')
    }
  })

  it('renders Have a Questions section', () => {
    render(<Footer />)
    expect(screen.getByText('Have a Questions?')).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Footer />)
    expect(screen.getByText(/203 Fake St\. Mountain View/)).toBeInTheDocument()
    expect(screen.getByText('+2 392 3929 210')).toBeInTheDocument()
    expect(screen.getByText('info@yourdomain.com')).toBeInTheDocument()
  })

  it('renders the copyright bar', () => {
    render(<Footer />)
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })

  it('renders Component Dock attribution link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noreferrer')
  })

  it('renders four-column responsive grid', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    const grid = footer.querySelector('.grid')
    expect(grid).not.toBeNull()
    expect(grid!.className).toContain('md:grid-cols-4')
  })

  it('renders social icons with purple accent background', () => {
    render(<Footer />)
    const twitter = screen.getByRole('link', { name: 'Twitter' })
    expect(twitter.className).toContain('bg-accent')
    expect(twitter.className).toContain('text-white')
  })

  it('renders footer heading with purple underline accent', () => {
    render(<Footer />)
    const headings = screen.getAllByRole('heading', { level: 2 })
    expect(headings[0]?.className).toContain('text-white')
  })

  it('renders copyright with top border styling', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    const borderDiv = footer.querySelector('.border-t')
    expect(borderDiv).not.toBeNull()
    expect(borderDiv!.className).toContain('border-white/10')
  })

  it('renders nav links with text styling', () => {
    render(<Footer />)
    const homeLink = screen.getByRole('link', { name: 'Home' })
    expect(homeLink.className).toContain('text-footer-text')
  })
})
