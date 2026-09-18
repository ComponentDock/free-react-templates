import { render, screen, act } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Header } from './Header'

describe('Header', () => {
  it('renders the logo', () => {
    render(<Header />)
    expect(screen.getByText('my')).toBeInTheDocument()
    expect(screen.getByText('podcast')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Header />)
    for (const link of ['Home', 'About', 'Episodes', 'Blog', 'Contact']) {
      expect(screen.getAllByText(link).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders Submit a Podcast button', () => {
    render(<Header />)
    expect(screen.getAllByText('Submit a Podcast').length).toBeGreaterThanOrEqual(1)
  })

  it('renders social icons', () => {
    render(<Header />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('SoundCloud')).toBeInTheDocument()
    expect(screen.getByLabelText('Vimeo')).toBeInTheDocument()
    expect(screen.getByLabelText('YouTube')).toBeInTheDocument()
  })

  it('toggles mobile menu on hamburger click', async () => {
    const user = (await import('@testing-library/user-event')).userEvent.setup()
    render(<Header />)
    const btn = screen.getByLabelText('Toggle menu')
    expect(btn).toHaveAttribute('aria-expanded', 'false')
    await user.click(btn)
    expect(btn).toHaveAttribute('aria-expanded', 'true')
    await user.click(btn)
    expect(btn).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes mobile menu when nav link is clicked', async () => {
    const user = (await import('@testing-library/user-event')).userEvent.setup()
    render(<Header />)
    const btn = screen.getByLabelText('Toggle menu')
    await user.click(btn)
    expect(btn).toHaveAttribute('aria-expanded', 'true')
    // Click a mobile nav link (the last "Home" in the document)
    const mobileLinks = screen.getAllByText('Home')
    const mobileLink = mobileLinks[mobileLinks.length - 1]!
    await user.click(mobileLink)
    expect(btn).toHaveAttribute('aria-expanded', 'false')
  })

  it('has transparent background initially', () => {
    render(<Header />)
    const header = screen.getByRole('banner')
    expect(header.className).toContain('bg-transparent')
  })

  it('applies dark background on scroll', async () => {
    render(<Header />)
    const header = screen.getByRole('banner')
    expect(header.className).toContain('bg-transparent')

    // Simulate scroll
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true, configurable: true })
    act(() => {
      window.dispatchEvent(new Event('scroll'))
    })
    expect(header.className).toContain('bg-overlay')

    // Reset
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true })
    act(() => {
      window.dispatchEvent(new Event('scroll'))
    })
    expect(header.className).toContain('bg-transparent')
  })
})
