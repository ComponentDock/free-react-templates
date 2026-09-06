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

  it('applies dark purple-charcoal background to footer', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer.className).toContain('bg-footer-bg')
  })

  it('renders the newsletter subheading', () => {
    render(<Footer />)
    expect(screen.getByText('Subscribe to our')).toBeInTheDocument()
  })

  it('renders the newsletter heading', () => {
    render(<Footer />)
    const heading = screen.getByText('Newsletter')
    expect(heading).toBeInTheDocument()
    expect(heading.tagName).toBe('H3')
    expect(heading.className).toContain('uppercase')
    expect(heading.className).toContain('text-heading')
  })

  it('renders newsletter left column with correct background', () => {
    render(<Footer />)
    const subheading = screen.getByText('Subscribe to our')
    // The bg-newsletter-left class is on the grandparent div (the column wrapper)
    const leftCol = subheading.closest('[class*="bg-newsletter-left"]')
    expect(leftCol).not.toBeNull()
    expect(leftCol!.className).toContain('bg-newsletter-left')
  })

  it('renders newsletter right column with correct background', () => {
    render(<Footer />)
    const form = screen.getByRole('form', { name: /Email subscription/i })
    const rightCol = form.closest('[class*="bg-newsletter-right"]')
    expect(rightCol).not.toBeNull()
    expect(rightCol!.className).toContain('bg-newsletter-right')
  })

  it('renders the subscribe form', () => {
    render(<Footer />)
    const form = screen.getByRole('form', { name: /Email subscription/i })
    expect(form).toBeInTheDocument()
    expect(form.className).toContain('rounded-[40px]')
    expect(form.className).toContain('bg-white')
  })

  it('renders email input with placeholder', () => {
    render(<Footer />)
    const input = screen.getByRole('textbox', { name: /Email address/i })
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('placeholder', 'Enter email address')
    expect(input).toHaveAttribute('type', 'email')
  })

  it('renders submit button with correct styling', () => {
    render(<Footer />)
    const button = screen.getByRole('button', { name: 'Submit' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('type', 'submit')
    expect(button.className).toContain('bg-submit-btn')
    expect(button.className).toContain('text-white')
    expect(button.className).toContain('w-[150px]')
    expect(button.className).toContain('h-[56px]')
    expect(button.className).toContain('uppercase')
    expect(button.className).toContain('tracking-[1px]')
  })

  it('renders Information column heading', () => {
    render(<Footer />)
    const heading = screen.getByText('Information')
    expect(heading).toBeInTheDocument()
    expect(heading.tagName).toBe('H2')
  })

  it('renders Information column links', () => {
    render(<Footer />)
    const links = ['Our Company', 'Data', 'Pricing', 'Contact Us', 'Support']
    for (const label of links) {
      const link = screen.getByRole('link', { name: label })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', '#')
    }
  })

  it('renders Application column heading', () => {
    render(<Footer />)
    const heading = screen.getByText('Application')
    expect(heading).toBeInTheDocument()
    expect(heading.tagName).toBe('H2')
  })

  it('renders Application column links', () => {
    render(<Footer />)
    const links = ['Download', 'Bike Provider', 'How to Used']
    for (const label of links) {
      const link = screen.getByRole('link', { name: label })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', '#')
    }
  })

  it('renders API column heading', () => {
    render(<Footer />)
    const heading = screen.getByText('API')
    expect(heading).toBeInTheDocument()
    expect(heading.tagName).toBe('H2')
  })

  it('renders API column links', () => {
    render(<Footer />)
    const links = ['Documentation', 'Credential', 'Developer info']
    for (const label of links) {
      const link = screen.getByRole('link', { name: label })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', '#')
    }
  })

  it('renders checkmark-circle icons on link items', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Our Company' })
    const svg = link.querySelector('svg')
    expect(svg).not.toBeNull()
    expect(svg!.getAttribute('aria-hidden')).toBe('true')
  })

  it('renders link items with correct text color class', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Our Company' })
    expect(link.className).toContain('text-link')
  })

  it('renders brand heading with logo link', () => {
    render(<Footer />)
    const logo = screen.getByRole('link', { name: 'Footercrest' })
    expect(logo).toBeInTheDocument()
    expect(logo.className).toContain('text-heading')
  })

  it('renders copyright text with dynamic year', () => {
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

  it('renders hearts symbol in copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/made with/)).toBeInTheDocument()
  })

  it('handles subscribe form submission', async () => {
    const user = userEvent.setup()
    const preventDefault = vi.fn()
    render(<Footer />)
    const form = screen.getByRole('form', { name: /Email subscription/i })
    form.addEventListener('submit', (e) => {
      e.preventDefault = preventDefault
    })
    await user.click(screen.getByRole('button', { name: 'Submit' }))
    expect(preventDefault).toHaveBeenCalled()
  })

  it('renders three link column headings', () => {
    render(<Footer />)
    const headings = ['Information', 'Application', 'API']
    for (const heading of headings) {
      const el = screen.getByText(heading)
      expect(el).toBeInTheDocument()
      expect(el.tagName).toBe('H2')
    }
  })

  it('renders all 11 link items with checkmark icons', () => {
    render(<Footer />)
    const allLinks = [
      'Our Company',
      'Data',
      'Pricing',
      'Contact Us',
      'Support',
      'Download',
      'Bike Provider',
      'How to Used',
      'Documentation',
      'Credential',
      'Developer info',
    ]
    for (const label of allLinks) {
      const link = screen.getByRole('link', { name: label })
      const svg = link.querySelector('svg')
      expect(svg).not.toBeNull()
    }
  })

  it('renders submit button with pill shape', () => {
    render(<Footer />)
    const button = screen.getByRole('button', { name: 'Submit' })
    expect(button.className).toContain('rounded-[40px]')
  })

  it('renders subscribe form with pill shape', () => {
    render(<Footer />)
    const form = screen.getByRole('form', { name: /Email subscription/i })
    expect(form.className).toContain('rounded-[40px]')
  })

  it('renders newsletter section as flex row on desktop', () => {
    render(<Footer />)
    // The newsletter section wrapper has md:flex-row
    const newsletterRow = screen.getByText('Subscribe to our').closest('[class*="md:flex-row"]')
    expect(newsletterRow).not.toBeNull()
    expect(newsletterRow!.className).toContain('md:flex-row')
  })
})
