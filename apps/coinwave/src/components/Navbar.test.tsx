import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('CoinWave')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Convert')).toBeInTheDocument()
    expect(screen.getByText('Feature')).toBeInTheDocument()
    expect(screen.getByText('Price')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Pages')).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeInTheDocument()

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    await user.click(toggle)
    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeInTheDocument()

    // Click a link in the mobile menu — this closes it
    const mobileLinks = screen.getByRole('navigation', { name: 'Mobile navigation' })
    const homeLink = mobileLinks.querySelector('a')
    expect(homeLink).toBeTruthy()
    await user.click(homeLink!)

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('starts without scrolled class and applies on scroll', () => {
    render(<Navbar />)
    const header = screen.getByRole('banner')
    expect(header.className).toContain('bg-transparent')

    // Simulate scrolling to trigger the scroll handler
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true, configurable: true })
    act(() => {
      window.dispatchEvent(new Event('scroll'))
    })
    expect(header.className).toContain('bg-[#222222]/90')
  })
})
