import { describe, expect, it } from 'vitest'
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
    expect(footer.className).toContain('bg-footer-bg')
  })

  it('renders brand heading', () => {
    render(<Footer />)
    const heading = screen.getByRole('heading', { name: 'FooterDash' })
    expect(heading).toBeInTheDocument()
    expect(heading.className).toContain('text-footer-heading')
  })

  describe('Subscription form', () => {
    it('renders the subscription form', () => {
      render(<Footer />)
      const form = screen.getByRole('form', { name: 'Newsletter subscription' })
      expect(form).toBeInTheDocument()
    })

    it('renders email input with placeholder', () => {
      render(<Footer />)
      const input = screen.getByPlaceholderText('Enter your email')
      expect(input).toBeInTheDocument()
      expect(input).toHaveAttribute('type', 'email')
    })

    it('renders subscribe button with accent color', () => {
      render(<Footer />)
      const button = screen.getByRole('button', { name: 'Subscribe' })
      expect(button).toBeInTheDocument()
      expect(button.className).toContain('bg-footer-accent')
      expect(button.className).toContain('text-white')
    })

    it('renders subscribe button with hover state', () => {
      render(<Footer />)
      const button = screen.getByRole('button', { name: 'Subscribe' })
      expect(button.className).toContain('hover:bg-footer-accent-hover')
    })

    it('updates email value on input', async () => {
      const user = userEvent.setup()
      render(<Footer />)
      const input = screen.getByPlaceholderText('Enter your email')
      await user.type(input, 'test@example.com')
      expect(input).toHaveValue('test@example.com')
    })

    it('prevents default form submission', async () => {
      const user = userEvent.setup()
      render(<Footer />)
      const form = screen.getByRole('form', { name: 'Newsletter subscription' })
      let submitted = false
      form.addEventListener('submit', (e) => {
        e.preventDefault()
        submitted = true
      })
      const button = screen.getByRole('button', { name: 'Subscribe' })
      await user.click(button)
      expect(submitted).toBe(true)
    })

    it('has accessible label for email input', () => {
      render(<Footer />)
      const input = screen.getByLabelText('Email address for subscription')
      expect(input).toBeInTheDocument()
    })
  })

  describe('Navigation links', () => {
    it('renders all navigation menu links', () => {
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

    it('renders nav links as uppercase with letter-spacing', () => {
      render(<Footer />)
      const homeLink = screen.getByRole('link', { name: 'Home' })
      expect(homeLink.className).toContain('uppercase')
      expect(homeLink.className).toContain('tracking-[1px]')
    })
  })

  describe('Social media icons', () => {
    it('renders all social media icons with accessible labels', () => {
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

    it('renders social icons with dark background', () => {
      render(<Footer />)
      const facebook = screen.getByRole('link', { name: 'Facebook' })
      expect(facebook.className).toContain('bg-footer-icon-bg')
    })

    it('renders social icons with border', () => {
      render(<Footer />)
      const facebook = screen.getByRole('link', { name: 'Facebook' })
      expect(facebook.className).toContain('border-footer-border')
    })

    it('renders social icons with hover color change', () => {
      render(<Footer />)
      const facebook = screen.getByRole('link', { name: 'Facebook' })
      expect(facebook.className).toContain('text-footer-text')
      expect(facebook.className).toContain('hover:text-footer-heading')
    })
  })

  describe('Copyright section', () => {
    it('renders copyright text', () => {
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

    it('renders copyright with muted text color', () => {
      render(<Footer />)
      const copyright = screen.getByText(/All rights reserved/)
      expect(copyright.className).toContain('text-footer-muted')
    })
  })

  describe('Footer padding and spacing', () => {
    it('renders footer with generous vertical padding', () => {
      render(<Footer />)
      const footer = screen.getByRole('contentinfo')
      expect(footer.className).toContain('py-20')
    })

    it('centers all content within footer', () => {
      render(<Footer />)
      const footer = screen.getByRole('contentinfo')
      const inner = footer.querySelector('.text-center')
      expect(inner).not.toBeNull()
    })
  })
})
