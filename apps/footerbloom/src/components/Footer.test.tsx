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

  it('applies green background to footer', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer.className).toContain('bg-footer-bg')
  })

  it('renders the brand heading with subtitle', () => {
    render(<Footer />)
    const headings = screen.getAllByText('FooterBloom')
    expect(headings.length).toBeGreaterThanOrEqual(1)
    const h2 = headings.find((el) => el.tagName === 'H2')
    expect(h2).toBeDefined()
    expect(h2!.className).toContain('text-[28px]')
    const subtitle = screen.getByText('Free Templates')
    expect(subtitle).toBeInTheDocument()
  })

  it('renders the contact list with address', () => {
    render(<Footer />)
    expect(screen.getByText(/203 Fake St\. Mountain View/)).toBeInTheDocument()
  })

  it('renders the phone number link', () => {
    render(<Footer />)
    const phone = screen.getByText('+2 392 3929 210')
    expect(phone).toBeInTheDocument()
    expect(phone.closest('a')).toHaveAttribute('href', '#')
  })

  it('renders the email link', () => {
    render(<Footer />)
    const email = screen.getByText('info@yourdomain.com')
    expect(email).toBeInTheDocument()
    expect(email.closest('a')).toHaveAttribute('href', '#')
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
  })

  it('renders subscribe button with correct styling', () => {
    render(<Footer />)
    const button = screen.getByRole('button', { name: 'Subscribe' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('type', 'submit')
    expect(button.className).toContain('bg-footer-subscribe-bg')
    expect(button.className).toContain('w-[52px]')
    expect(button.className).toContain('h-[52px]')
  })

  it('renders Latest News heading', () => {
    render(<Footer />)
    expect(screen.getByText('Latest News')).toBeInTheDocument()
  })

  it('renders two blog post cards', () => {
    render(<Footer />)
    const headings = screen.getAllByText(/Even the all-powerful Pointing/)
    expect(headings).toHaveLength(2)
  })

  it('renders blog post metadata (date, author, comments)', () => {
    render(<Footer />)
    const dates = screen.getAllByText('Oct. 16, 2019')
    expect(dates.length).toBe(2)
    const authors = screen.getAllByText('Admin')
    expect(authors.length).toBe(2)
    const comments = screen.getAllByText('19')
    expect(comments.length).toBe(2)
  })

  it('renders Best Sellers heading', () => {
    render(<Footer />)
    expect(screen.getByText('Best Sellers')).toBeInTheDocument()
  })

  it('renders product name with star rating', () => {
    render(<Footer />)
    expect(screen.getByText('Grilled Beef with potatoes')).toBeInTheDocument()
    // 5 stars for the product
    const starSvgs = document.querySelectorAll('.fill-footer-link')
    expect(starSvgs.length).toBe(5)
  })

  it('renders Instagram heading', () => {
    render(<Footer />)
    expect(screen.getByText('Instagram')).toBeInTheDocument()
  })

  it('renders 6 Instagram image links', () => {
    render(<Footer />)
    // Instagram section has 6 image links
    const footer = screen.getByRole('contentinfo')
    const instagramGrid = footer.querySelector('.grid.grid-cols-3')
    expect(instagramGrid).not.toBeNull()
    expect(instagramGrid!.children.length).toBe(6)
  })

  it('renders social media icons (Twitter, Facebook, Instagram)', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })

  it('renders social icons with circular border styling', () => {
    render(<Footer />)
    const twitter = screen.getByLabelText('Twitter')
    expect(twitter.className).toContain('rounded-full')
    expect(twitter.className).toContain('border-footer-social-border')
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

  it('renders four-column responsive grid', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    const grid = footer.querySelector('.grid.lg\\:grid-cols-4')
    expect(grid).not.toBeNull()
  })

  it('renders top row with border-bottom', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    const topRow = footer.querySelector('.border-b.border-footer-border')
    expect(topRow).not.toBeNull()
  })

  it('renders copyright bar with border-top', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    const copyrightBar = footer.querySelector('.border-t.border-footer-border')
    expect(copyrightBar).not.toBeNull()
  })

  it('renders subscribe input with square corners', () => {
    render(<Footer />)
    const input = screen.getByRole('textbox', { name: /Email address/i })
    // Input has no rounded class - square corners matching the original
    expect(input.className).not.toMatch(/rounded/)
  })

  it('renders contact list with icons', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    const svgs = footer.querySelectorAll('svg')
    expect(svgs.length).toBeGreaterThan(0)
  })

  it('renders brand column heading as h3', () => {
    render(<Footer />)
    const h3s = screen.getAllByText('FooterBloom')
    const h3 = h3s.find((el) => el.tagName === 'H3')
    expect(h3).toBeDefined()
    expect(h3!.className).toContain('text-[20px]')
  })
})
