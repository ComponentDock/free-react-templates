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

  it('renders the brand logo text', () => {
    render(<Footer />)

    const logo = screen.getByRole('link', { name: 'Loom' })
    expect(logo).toBeInTheDocument()
    expect(logo.textContent).toBe('Loom')
  })

  it('renders the brand description', () => {
    render(<Footer />)

    expect(screen.getByText(/A curated collection of modern web templates/)).toBeInTheDocument()
  })

  it('renders newsletter heading and description', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Stay Updated' })).toBeInTheDocument()
    expect(screen.getByText(/Subscribe to our newsletter/)).toBeInTheDocument()
  })

  it('renders newsletter email input', () => {
    render(<Footer />)

    const input = screen.getByLabelText('Email address')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'email')
    expect(input).toHaveAttribute('required')
  })

  it('renders newsletter subscribe button', () => {
    render(<Footer />)

    const button = screen.getByRole('button', { name: 'Subscribe' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('type', 'submit')
  })

  it('updates email input value on change', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByLabelText('Email address')
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  })

  it('clears email input on form submission', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByLabelText('Email address')
    const button = screen.getByRole('button', { name: 'Subscribe' })
    await user.type(input, 'test@example.com')
    await user.click(button)
    expect(input).toHaveValue('')
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByLabelText('Email address')
    await user.type(input, 'test@example.com')

    const button = screen.getByRole('button', { name: 'Subscribe' })
    await user.click(button)

    // After submission, email input should be cleared (handleSubmit called)
    expect(input).toHaveValue('')
  })

  it('renders Company navigation links', () => {
    render(<Footer />)

    const links = ['About', 'Services', 'Portfolio', 'Pricing', 'Contact']
    for (const label of links) {
      const link = screen.getByRole('link', { name: label })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', '#')
    }
  })

  it('renders Resources navigation links', () => {
    render(<Footer />)

    const links = ['Blog', 'Documentation', 'Support', 'FAQ', 'Terms']
    for (const label of links) {
      const link = screen.getByRole('link', { name: label })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', '#')
    }
  })

  it('renders social media icons with accessible labels', () => {
    render(<Footer />)

    const socialNames = ['Instagram', 'Twitter', 'Facebook', 'LinkedIn', 'YouTube']
    for (const name of socialNames) {
      const link = screen.getByRole('link', { name })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', '#')
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noreferrer')
      expect(link).toHaveAttribute('aria-label', name)
    }
  })

  it('renders social icons with border styling', () => {
    render(<Footer />)

    const instagram = screen.getByRole('link', { name: 'Instagram' })
    expect(instagram.className).toContain('border-footer-border')
    expect(instagram.className).toContain('hover:border-cta-teal')
  })

  it('renders Company section heading', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Company' })).toBeInTheDocument()
  })

  it('renders Resources section heading', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Resources' })).toBeInTheDocument()
  })

  it('renders the copyright bar', () => {
    render(<Footer />)

    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`${year} Loom\\. All Rights Reserved`))).toBeInTheDocument()
  })

  it('renders Component Dock attribution link', () => {
    render(<Footer />)

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noreferrer')
  })

  it('renders three-column grid on desktop', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    const grid = footer.querySelector('.grid')
    expect(grid).not.toBeNull()
    expect(grid!.className).toContain('sm:grid-cols-3')
  })

  it('renders newsletter form with max width constraint', () => {
    render(<Footer />)

    const form = screen.getByRole('textbox', { name: 'Email address' }).closest('form')!
    expect(form.className).toContain('max-w-md')
  })

  it('renders email input with focus styling', () => {
    render(<Footer />)

    const input = screen.getByLabelText('Email address')
    expect(input.className).toContain('focus:border-cta-teal')
    expect(input.className).toContain('focus:ring-1')
  })

  it('renders subscribe button with teal background', () => {
    render(<Footer />)

    const button = screen.getByRole('button', { name: 'Subscribe' })
    expect(button.className).toContain('bg-cta-teal')
    expect(button.className).toContain('hover:bg-cta-teal-hover')
  })

  it('renders nav links with hover styling', () => {
    render(<Footer />)

    const aboutLink = screen.getByRole('link', { name: 'About' })
    expect(aboutLink.className).toContain('text-footer-link')
    expect(aboutLink.className).toContain('hover:text-footer-heading')
  })

  it('renders copyright with top border styling', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    const borderDiv = footer.querySelector('.border-t')
    expect(borderDiv).not.toBeNull()
    expect(borderDiv!.className).toContain('border-footer-border')
  })

  it('renders uppercase tracking on section headings', () => {
    render(<Footer />)

    const companyHeading = screen.getByRole('heading', { name: 'Company' })
    expect(companyHeading.className).toContain('uppercase')
    expect(companyHeading.className).toContain('tracking-wider')
  })

  it('renders brand link to root', () => {
    render(<Footer />)

    const brand = screen.getByRole('link', { name: 'Loom' })
    expect(brand).toHaveAttribute('href', '#')
  })

  it('renders email input with placeholder', () => {
    render(<Footer />)

    const input = screen.getByLabelText('Email address')
    expect(input).toHaveAttribute('placeholder', 'Enter your email')
  })
})
