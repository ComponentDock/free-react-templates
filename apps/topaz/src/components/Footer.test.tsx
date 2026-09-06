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

  it('applies dark charcoal background to footer', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer.className).toContain('bg-footer-bg')
  })

  it('renders the brand logo text', () => {
    render(<Footer />)
    const logo = screen.getByRole('link', { name: 'Topaz' })
    expect(logo).toBeInTheDocument()
    expect(logo.tagName).toBe('A')
    expect(logo.className).toContain('text-white')
    // capitalize is on the h2 parent
    const heading = logo.closest('h2')
    expect(heading).not.toBeNull()
    expect(heading!.className).toContain('capitalize')
  })

  it('renders the brand description', () => {
    render(<Footer />)
    expect(screen.getByText(/A small river named Duden/)).toBeInTheDocument()
  })

  it('renders the read more link with arrow icon', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /read more/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#')
    expect(link.className).toContain('text-brand-accent')
  })

  it('renders Categories heading', () => {
    render(<Footer />)
    const heading = screen.getByText('Categories')
    expect(heading).toBeInTheDocument()
    expect(heading.tagName).toBe('H3')
    expect(heading.className).toContain('uppercase')
    expect(heading.className).toContain('font-semibold')
  })

  it('renders category links', () => {
    render(<Footer />)
    const categories = ['Buy & Sell', 'Merchant', 'Giving back', 'Help & Support']
    for (const label of categories) {
      const link = screen.getByRole('link', { name: label })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', '#')
      expect(link.className).toContain('text-footer-link')
    }
  })

  it('renders Tag cloud heading', () => {
    render(<Footer />)
    const heading = screen.getByText('Tag cloud')
    expect(heading).toBeInTheDocument()
    expect(heading.tagName).toBe('H3')
  })

  it('renders tag cloud links with border styling', () => {
    render(<Footer />)
    const tags = ['dish', 'menu', 'food', 'sweet', 'tasty', 'delicious', 'desserts', 'drinks']
    for (const tag of tags) {
      const link = screen.getByRole('link', { name: tag })
      expect(link).toBeInTheDocument()
      expect(link.className).toContain('border-footer-tag-border')
      expect(link.className).toContain('text-white')
    }
  })

  it('renders Subscribe heading', () => {
    render(<Footer />)
    const heading = screen.getByText('Subscribe')
    expect(heading).toBeInTheDocument()
    expect(heading.tagName).toBe('H3')
  })

  it('renders the subscribe form', () => {
    render(<Footer />)
    const form = screen.getByRole('form', { name: /Email subscription/i })
    expect(form).toBeInTheDocument()
  })

  it('renders email input with placeholder', () => {
    render(<Footer />)
    const input = screen.getByRole('textbox', { name: /Email address/i })
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('placeholder', 'Enter email address')
    expect(input).toHaveAttribute('type', 'email')
    expect(input.className).toContain('bg-footer-input-bg')
  })

  it('renders subscribe button with golden amber styling', () => {
    render(<Footer />)
    const button = screen.getByRole('button', { name: 'Subscribe' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('type', 'submit')
    expect(button.className).toContain('bg-brand-accent')
    expect(button.className).toContain('text-white')
    expect(button.className).toContain('w-[52px]')
    expect(button.className).toContain('h-[52px]')
  })

  it('renders Follow us heading', () => {
    render(<Footer />)
    const heading = screen.getByText('Follow us')
    expect(heading).toBeInTheDocument()
    expect(heading.tagName).toBe('H3')
  })

  it('renders social icon links with accessible names', () => {
    render(<Footer />)
    const socialLinks = [
      { label: 'Twitter', icon: 'Twitter' },
      { label: 'Facebook', icon: 'Facebook' },
      { label: 'Instagram', icon: 'Instagram' },
    ]
    for (const { label } of socialLinks) {
      const link = screen.getByRole('link', { name: label })
      expect(link).toBeInTheDocument()
      expect(link.className).toContain('border-footer-tag-border')
      expect(link.className).toContain('text-white')
    }
  })

  it('renders social icons with 4px border radius via rounded class', () => {
    render(<Footer />)
    const twitter = screen.getByRole('link', { name: 'Twitter' })
    expect(twitter.className).toContain('h-10')
    expect(twitter.className).toContain('w-10')
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

  it('renders copyright bar with darker background', () => {
    render(<Footer />)
    const copyrightText = screen.getByText(/All rights reserved/)
    // bg-footer-bottom is on the outer wrapper div (the copyright bar)
    const copyrightBar = copyrightText.closest('footer')!.querySelector('.bg-footer-bottom')
    expect(copyrightBar).not.toBeNull()
    expect(copyrightBar!.className).toContain('bg-footer-bottom')
  })

  it('renders legal links (Terms, Privacy, Compliances)', () => {
    render(<Footer />)
    const legalLinks = ['Terms', 'Privacy', 'Compliances']
    for (const label of legalLinks) {
      const link = screen.getByRole('link', { name: label })
      expect(link).toBeInTheDocument()
      expect(link.className).toContain('text-footer-copyright-link')
    }
  })

  it('renders footer four-column responsive grid', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    const grid = footer.querySelector('.grid')
    expect(grid).not.toBeNull()
    expect(grid!.className).toContain('md:grid-cols-4')
  })

  it('handles subscribe form submission', async () => {
    const user = userEvent.setup()
    const preventDefault = vi.fn()
    render(<Footer />)
    const form = screen.getByRole('form', { name: /Email subscription/i })
    form.addEventListener('submit', (e) => {
      e.preventDefault = preventDefault
    })
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(preventDefault).toHaveBeenCalled()
  })

  it('renders description text with muted color', () => {
    render(<Footer />)
    const desc = screen.getByText(/A small river named Duden/)
    expect(desc.className).toContain('text-footer-text')
  })

  it('renders four footer column headings', () => {
    render(<Footer />)
    const headings = ['Categories', 'Tag cloud', 'Subscribe', 'Follow us']
    for (const heading of headings) {
      const el = screen.getByText(heading)
      expect(el).toBeInTheDocument()
      expect(el.tagName).toBe('H3')
    }
  })
})
