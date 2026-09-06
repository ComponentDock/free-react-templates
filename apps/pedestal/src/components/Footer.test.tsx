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

  it('renders the About Us section', () => {
    render(<Footer />)

    expect(screen.getByText('About Us')).toBeInTheDocument()
    // About Us paragraph is inside a <p> tag
    const paragraphs = screen.getAllByText(/Laboriosam itaque unde facere/)
    expect(paragraphs.length).toBeGreaterThanOrEqual(1)
  })

  it('renders the phone number link', () => {
    render(<Footer />)

    const phone = screen.getByRole('link', { name: /\+1 291 3912 329/ })
    expect(phone).toBeInTheDocument()
    expect(phone).toHaveAttribute('href', '#')
  })

  it('renders the email address link', () => {
    render(<Footer />)

    const email = screen.getByRole('link', { name: /info@gmail\.com/ })
    expect(email).toBeInTheDocument()
    expect(email).toHaveAttribute('href', '#')
  })

  it('renders the subscribe form with email input', () => {
    render(<Footer />)

    const input = screen.getByPlaceholderText('Enter your e-mail')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'email')
  })

  it('renders the subscribe Send button', () => {
    render(<Footer />)

    const btn = screen.getByRole('button', { name: 'Send' })
    expect(btn).toBeInTheDocument()
  })

  it('allows typing in the email input', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByPlaceholderText('Enter your e-mail')
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  })

  it('submits the subscribe form without page reload', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByPlaceholderText('Enter your e-mail')
    const submitBtn = screen.getByRole('button', { name: 'Send' })
    await user.type(input, 'test@example.com')
    await user.click(submitBtn)
    // Form should not navigate (onSubmit prevents default)
    expect(input).toHaveValue('test@example.com')
  })

  it('renders the Latest Tweet section', () => {
    render(<Footer />)

    expect(screen.getByText('Latest Tweet')).toBeInTheDocument()
  })

  it('renders 3 tweet items', () => {
    render(<Footer />)

    // Tweets are in <li> elements inside the Latest Tweet section
    const tweetSection = screen.getByText('Latest Tweet').closest('div')
    const tweetItems = tweetSection!.querySelectorAll('li')
    expect(tweetItems.length).toBe(3)
  })

  it('renders the Instagram section with 4 images', () => {
    render(<Footer />)

    expect(screen.getByText('Instagram')).toBeInTheDocument()
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(4)
  })

  it('renders Instagram images with alt text', () => {
    render(<Footer />)

    const images = screen.getAllByRole('img')
    images.forEach((img) => {
      expect(img).toHaveAttribute('alt')
      expect(img.getAttribute('alt')).not.toBe('')
    })
  })

  it('renders footer navigation menu links', () => {
    render(<Footer />)

    const navLinks = ['Home', 'About', 'Our works', 'Services', 'Blog', 'Contacts']
    navLinks.forEach((label) => {
      expect(screen.getByRole('link', { name: label })).toHaveAttribute('href', '#')
    })
  })

  it('renders the Component Dock attribution link', () => {
    render(<Footer />)

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noreferrer')
  })

  it('applies Poppins font-family to footer', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(footer.className).toContain("font-['Poppins',sans-serif]")
  })

  it('applies Source Serif Pro to paragraphs', () => {
    render(<Footer />)

    const paragraphs = screen.getAllByText(/Laboriosam itaque/)
    expect(paragraphs[0]!.className).toContain("font-['Source_Serif_Pro',serif]")
  })
})
