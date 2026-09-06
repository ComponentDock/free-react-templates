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

  it('renders the brand heading', () => {
    render(<Footer />)
    const heading = screen.getByText('FooterWell')
    expect(heading).toBeInTheDocument()
    expect(heading.tagName).toBe('SPAN')
    expect(heading.className).toContain('uppercase')
  })

  it('renders the brand description', () => {
    render(<Footer />)
    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
  })

  it('renders the read more link with arrow icon', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Read more/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#')
    expect(link.className).toContain('text-accent')
  })

  it('renders the floating subscribe form', () => {
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

  it('renders subscribe button with correct styling', () => {
    render(<Footer />)
    const button = screen.getByRole('button', { name: 'Subscribe' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('type', 'submit')
    expect(button.className).toContain('bg-accent-light')
    expect(button.className).toContain('text-white')
    expect(button.className).toContain('w-[150px]')
    expect(button.className).toContain('h-[56px]')
    expect(button.className).toContain('uppercase')
    expect(button.className).toContain('tracking-[1px]')
  })

  it('renders Discover nav column', () => {
    render(<Footer />)
    expect(screen.getByText('Discover')).toBeInTheDocument()
    const links = ['Investment', 'Marketing', 'Services', 'Insurance']
    for (const label of links) {
      const link = screen.getByRole('link', { name: label })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', '#')
    }
  })

  it('renders About nav column', () => {
    render(<Footer />)
    expect(screen.getByText('About')).toBeInTheDocument()
    const links = ['Help Line Number', 'About Us', 'Community', 'Events']
    for (const label of links) {
      const link = screen.getByRole('link', { name: label })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', '#')
    }
  })

  it('renders Resources nav column', () => {
    render(<Footer />)
    expect(screen.getByText('Resources')).toBeInTheDocument()
    const links = ['Sign Up', 'Press', 'Career', 'Team']
    for (const label of links) {
      const link = screen.getByRole('link', { name: label })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', '#')
    }
  })

  it('renders Social nav column', () => {
    render(<Footer />)
    expect(screen.getByText('Social')).toBeInTheDocument()
    const links = ['Twitter', 'Facebook', 'Instagram', 'LinkedIn']
    for (const label of links) {
      const link = screen.getByRole('link', { name: label })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', '#')
    }
  })

  it('renders four nav column headings', () => {
    render(<Footer />)
    const navHeadings = ['Discover', 'About', 'Resources', 'Social']
    for (const heading of navHeadings) {
      const el = screen.getByText(heading)
      expect(el).toBeInTheDocument()
      expect(el.tagName).toBe('H3')
    }
  })

  it('renders partner strip with heading', () => {
    render(<Footer />)
    expect(screen.getByText('Our Partner:')).toBeInTheDocument()
  })

  it('renders partner company links', () => {
    render(<Footer />)
    const partners = [
      'Envato',
      'ThemeForest',
      'CodeCanyon',
      'GraphicRiver',
      'PhotoDune',
      '3D Ocean',
    ]
    for (const partner of partners) {
      const link = screen.getByRole('link', { name: partner })
      expect(link).toBeInTheDocument()
      expect(link.className).toContain('uppercase')
      expect(link.className).toContain('text-[13px]')
    }
  })

  it('renders See All partner link', () => {
    render(<Footer />)
    const seeAll = screen.getByRole('link', { name: /See All/i })
    expect(seeAll).toBeInTheDocument()
    expect(seeAll.className).toContain('text-accent')
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

  it('renders legal links (Terms, Privacy, Compliances)', () => {
    render(<Footer />)
    const legalLinks = ['Terms', 'Privacy', 'Compliances']
    for (const label of legalLinks) {
      const link = screen.getByRole('link', { name: label })
      expect(link).toBeInTheDocument()
      expect(link.className).toContain('text-accent')
    }
  })

  it('renders nav links with muted text color', () => {
    render(<Footer />)
    const investmentLink = screen.getByRole('link', { name: 'Investment' })
    expect(investmentLink.className).toContain('text-footer-muted')
  })

  it('renders footer five-column responsive grid', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    const grid = footer.querySelector('.grid')
    expect(grid).not.toBeNull()
    expect(grid!.className).toContain('md:grid-cols-5')
  })

  it('renders partner strip with border styling', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    const partnerStrip = footer.querySelector('.border-y')
    expect(partnerStrip).not.toBeNull()
    expect(partnerStrip!.className).toContain('border-divider')
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

  it('renders subscribe form with pill shape shadow', () => {
    render(<Footer />)
    const form = screen.getByRole('form', { name: /Email subscription/i })
    expect(form.className).toContain('shadow-')
  })
})
