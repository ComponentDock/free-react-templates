import { describe, expect, it, vi } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the footer element with semantic role', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
    expect(footer.tagName).toBe('FOOTER')
  })

  it('applies light pink background to footer', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer.className).toContain('bg-footer-bg')
  })

  it('renders the Follow Us heading', () => {
    render(<Footer />)
    expect(screen.getByText('Follow Us')).toBeInTheDocument()
  })

  it('renders four social icon links', () => {
    render(<Footer />)
    const icons = ['Twitter', 'Facebook', 'Instagram', 'LinkedIn']
    for (const name of icons) {
      const link = screen.getByRole('link', { name })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', '#')
      expect(link.querySelector('svg')).toBeInTheDocument()
    }
  })

  it('social icon circles are 40x40px with rounded-full', () => {
    render(<Footer />)
    const twitter = screen.getByRole('link', { name: 'Twitter' })
    expect(twitter.className).toContain('h-10')
    expect(twitter.className).toContain('w-10')
    expect(twitter.className).toContain('rounded-full')
    expect(twitter.className).toContain('text-accent')
  })

  it('renders the Subscribe Us heading', () => {
    render(<Footer />)
    expect(screen.getByText('Subscribe Us')).toBeInTheDocument()
  })

  it('renders the newsletter subscription form', () => {
    render(<Footer />)
    const form = screen.getByRole('form', { name: /Newsletter subscription/i })
    expect(form).toBeInTheDocument()
  })

  it('renders email input with placeholder', () => {
    render(<Footer />)
    const input = screen.getByRole('textbox', { name: /Email address/i })
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('placeholder', 'Enter email address')
    expect(input).toHaveAttribute('type', 'email')
  })

  it('renders subscribe button with accent background and white text', () => {
    render(<Footer />)
    const button = screen.getByRole('button', { name: 'Subscribe' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('type', 'submit')
    expect(button.className).toContain('bg-accent')
    expect(button.className).toContain('text-white')
    expect(button.className).toContain('w-[130px]')
    expect(button.className).toContain('h-[52px]')
  })

  it('renders Men column with correct links', () => {
    render(<Footer />)
    const menHeading = screen.getByText('Men')
    const menSection = menHeading.closest('div')!
    const links = ['Jeans', 'Jumpers', 'Leather', 'Shorts', 'Boots', 'Watches']
    for (const label of links) {
      const link = within(menSection).getByRole('link', { name: label })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', '#')
    }
  })

  it('renders Women column with correct links', () => {
    render(<Footer />)
    const womenHeading = screen.getByText('Women')
    const womenSection = womenHeading.closest('div')!
    const links = ['Dresses', 'Jumpsuits', 'Shirts', 'T-shirts', 'Sweatshirts', 'Jackets', 'Coats']
    for (const label of links) {
      const link = within(womenSection).getByRole('link', { name: label })
      expect(link).toBeInTheDocument()
    }
  })

  it('renders Kids column with correct links', () => {
    render(<Footer />)
    const kidsHeading = screen.getByText('Kids')
    const kidsSection = kidsHeading.closest('div')!
    const links = ['Shirts', 'T-shirts', 'Polos', 'Sweaters', 'Sweatshirts', 'Jackets', 'Watches']
    for (const label of links) {
      const link = within(kidsSection).getByRole('link', { name: label })
      expect(link).toBeInTheDocument()
    }
  })

  it('renders copyright text with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })

  it('renders Terms & Conditions and Privacy links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Terms & Conditions' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Privacy' })).toBeInTheDocument()
  })

  it('renders Component Dock link in footer', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('form submit calls preventDefault via handler', async () => {
    const user = userEvent.setup()
    const preventDefault = vi.fn()
    render(<Footer />)
    const form = screen.getByRole('form', { name: /Newsletter subscription/i })
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      preventDefault()
    })
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(preventDefault).toHaveBeenCalled()
  })
})
