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

  it('renders with white background and subtle top border', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(footer.className).toContain('bg-white')
    expect(footer.className).toContain('border-t')
    expect(footer.className).toContain('border-[#efefef]')
  })

  it('renders the email subscribe input', () => {
    render(<Footer />)

    const input = screen.getByRole('textbox', { name: /email/i })
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'email')
    expect(input).toHaveAttribute('placeholder', 'Enter your email')
  })

  it('renders the subscribe button', () => {
    render(<Footer />)

    const button = screen.getByRole('button', { name: /subscribe/i })
    expect(button).toBeInTheDocument()
  })

  it('renders navigation links centered', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Features' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'Blog' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'Pricing' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'Services' })).toHaveAttribute('href', '#')
  })

  it('renders social media icon links', () => {
    render(<Footer />)

    const twitter = screen.getByRole('link', { name: 'Twitter' })
    expect(twitter).toHaveAttribute('href', '#')
    expect(twitter).toHaveAttribute('target', '_blank')
    expect(twitter).toHaveAttribute('rel', 'noreferrer')

    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Pinterest' })).toBeInTheDocument()
  })

  it('renders divider between top and bottom sections', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    // The top section has border-b border-[#efefef]
    expect(footer.innerHTML).toContain('border-b')
    expect(footer.innerHTML).toContain('border-[#efefef]')
  })

  it('renders the logo centered in bottom bar', () => {
    render(<Footer />)

    const logo = screen.getByRole('link', { name: 'Cairn' })
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveTextContent('Cairn')
    expect(logo.className).toContain('text-[30px]')
    expect(logo.className).toContain('font-black')
    expect(logo.className).toContain('text-[#3e64ff]')
  })

  it('renders legal links in bottom bar', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Terms' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'Privacy' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#')
  })

  it('renders copyright text', () => {
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

  it('renders email input with grey background', () => {
    render(<Footer />)

    const input = screen.getByRole('textbox', { name: /email/i })
    expect(input.className).toContain('bg-[#e6e6e6]')
  })

  it('renders subscribe button with blue background', () => {
    render(<Footer />)

    const button = screen.getByRole('button', { name: /subscribe/i })
    expect(button.className).toContain('bg-[#3e64ff]')
  })

  it('renders nav links with grey text that transitions to blue on hover', () => {
    render(<Footer />)

    const features = screen.getByRole('link', { name: 'Features' })
    expect(features.className).toContain('text-[#777]')
    expect(features.className).toContain('hover:text-[#3e64ff]')
    expect(features.className).toContain('transition-colors')
  })

  it('renders social icons with grey color', () => {
    render(<Footer />)

    const twitter = screen.getByRole('link', { name: 'Twitter' })
    expect(twitter.className).toContain('text-[#777]')
    expect(twitter.className).toContain('hover:text-[#3e64ff]')
  })

  it('handles email form submission', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByRole('textbox', { name: /email/i })
    const button = screen.getByRole('button', { name: /subscribe/i })

    await user.type(input, 'test@example.com')
    await user.click(button)

    expect(input).toHaveValue('test@example.com')
  })

  it('renders footer navigation landmark', () => {
    render(<Footer />)

    expect(screen.getByRole('navigation', { name: /footer navigation/i })).toBeInTheDocument()
  })

  it('renders all expected link counts', () => {
    render(<Footer />)

    // 4 nav + 4 social + 4 legal + 1 logo + 1 component dock = 14
    const allLinks = screen.getAllByRole('link')
    expect(allLinks.length).toBe(14)
  })

  it('renders the Poppins font family', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(footer.className).toContain("font-['Poppins',sans-serif]")
  })
})
