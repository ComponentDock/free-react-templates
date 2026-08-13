import { act, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'
import { brand, navLinks } from '../data'

describe('Navbar', () => {
  it('renders the serif brand and the dot-separated link row', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: brand.name })).toBeInTheDocument()
    const nav = screen.getByRole('navigation', { name: 'Primary' })
    for (const link of navLinks) {
      expect(within(nav).getByRole('link', { name: link.label })).toHaveAttribute('href', link.href)
    }
  })

  it('marks the home link active with the pink accent', () => {
    render(<Navbar />)
    const home = screen.getByRole('link', { name: 'Home' })
    expect(home).toHaveClass('text-brand')
  })

  it('switches to the white scrolled state when the page scrolls', () => {
    render(<Navbar />)
    const header = screen.getByTestId('navbar')
    expect(header.className).toContain('bg-transparent')
    Object.defineProperty(window, 'scrollY', { value: 120, configurable: true })
    act(() => {
      window.dispatchEvent(new Event('scroll'))
    })
    expect(header.className).toContain('bg-white')
    expect(header.className).toContain('shadow-md')
    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true })
  })

  it('toggles the mobile slide-in panel from the hamburger', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const mobile = screen.getByRole('navigation', { name: 'Mobile' })
    for (const link of navLinks) {
      expect(within(mobile).getByRole('link', { name: link.label })).toBeInTheDocument()
    }
    // Clicking a mobile link closes the panel.
    const mobileLink = within(mobile).getByRole('link', { name: navLinks[0]!.label })
    mobileLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(mobileLink)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    await user.click(toggle)
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeInTheDocument()
    await user.click(toggle)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
