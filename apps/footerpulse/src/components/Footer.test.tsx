import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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
    expect(footer.className).toContain('bg-footer-dark')
  })

  it('renders About nav column', () => {
    render(<Footer />)
    expect(screen.getByText('About')).toBeInTheDocument()
    const links = ['Our Story', 'Awards', 'Our Team', 'Career']
    for (const label of links) {
      const link = screen.getByRole('link', { name: label })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', '#')
    }
  })

  it('renders Company nav column', () => {
    render(<Footer />)
    expect(screen.getByText('Company')).toBeInTheDocument()
    const links = ['Our Services', 'Clients', 'Contact', 'Press']
    for (const label of links) {
      const link = screen.getByRole('link', { name: label })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', '#')
    }
  })

  it('renders Resources nav column', () => {
    render(<Footer />)
    expect(screen.getByText('Resources')).toBeInTheDocument()
    const links = ['Blog', 'Newsletter', 'Privacy Policy']
    for (const label of links) {
      const link = screen.getByRole('link', { name: label })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', '#')
    }
  })

  it('renders three nav column headings', () => {
    render(<Footer />)
    const navHeadings = ['About', 'Company', 'Resources']
    for (const heading of navHeadings) {
      const el = screen.getByText(heading)
      expect(el).toBeInTheDocument()
      expect(el.tagName).toBe('H2')
    }
  })

  it('renders the Subscribe form', () => {
    render(<Footer />)
    const form = screen.getByRole('form', { name: /newsletter subscription/i })
    expect(form).toBeInTheDocument()
  })

  it('renders email input with placeholder', () => {
    render(<Footer />)
    const input = screen.getByRole('textbox', { name: /email address/i })
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('placeholder', 'Enter email address')
  })

  it('renders subscribe button', () => {
    render(<Footer />)
    const button = screen.getByRole('button', { name: 'Subscribe' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('type', 'submit')
    expect(button.className).toContain('bg-card-blue')
    expect(button.className).toContain('text-white')
  })

  it('renders subscribe subtext', () => {
    render(<Footer />)
    expect(screen.getByText('Get digital marketing updates in your mailbox')).toBeInTheDocument()
  })

  it('renders copyright line with dynamic year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })

  it('renders Component Dock attribution link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noreferrer')
  })

  it('renders social links with aria-labels', () => {
    render(<Footer />)
    const socials = ['Twitter', 'Facebook', 'Instagram']
    for (const name of socials) {
      const link = screen.getByRole('link', { name })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('aria-label', name)
    }
  })

  it('renders social link icons with aria-hidden', () => {
    render(<Footer />)
    const socialLinks = screen.getAllByRole('link', {
      name: /twitter|facebook|instagram/i,
    })
    for (const link of socialLinks) {
      const svg = link.querySelector('svg')
      expect(svg).not.toBeNull()
      expect(svg!.getAttribute('aria-hidden')).toBe('true')
    }
  })

  it('renders copyright bar with border-top separator', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    const borderEl = footer.querySelector('.border-t')
    expect(borderEl).not.toBeNull()
    expect(borderEl!.className).toContain('border-white/10')
  })

  it('renders footer four-column responsive grid', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    const grid = footer.querySelector('.grid')
    expect(grid).not.toBeNull()
    expect(grid!.className).toContain('lg:grid-cols-4')
  })

  it('handles subscribe form submission', async () => {
    const user = userEvent.setup()
    const preventDefault = vi.fn()
    render(<Footer />)
    const form = screen.getByRole('form', { name: /newsletter subscription/i })
    form.addEventListener('submit', (e) => {
      e.preventDefault = preventDefault
    })
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(preventDefault).toHaveBeenCalled()
  })

  it('renders nav links with muted text color', () => {
    render(<Footer />)
    const storyLink = screen.getByRole('link', { name: 'Our Story' })
    expect(storyLink.className).toContain('text-footer-muted')
  })

  it('renders social links with muted color', () => {
    render(<Footer />)
    const twitterLink = screen.getByRole('link', { name: 'Twitter' })
    expect(twitterLink.className).toContain('text-footer-muted')
  })

  it('renders copyright with footer-copyright color', () => {
    render(<Footer />)
    const copyright = screen.getByText(/All rights reserved/)
    expect(copyright.className).toContain('text-footer-copyright')
  })

  it('renders three social links total', () => {
    render(<Footer />)
    const socials = screen.getAllByRole('link', {
      name: /^(Twitter|Facebook|Instagram)$/,
    })
    expect(socials).toHaveLength(3)
  })
})
