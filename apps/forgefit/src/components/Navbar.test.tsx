import { act, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, beforeEach } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  beforeEach(() => {
    document.documentElement.classList.remove('dark')
    window.localStorage.clear()
  })

  it('shows the site name and main anchor links', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Forgefit home' })).toBeInTheDocument()
    for (const label of ['Programs', 'Schedule', 'Trainers', 'Pricing']) {
      const links = screen.getAllByRole('link', { name: label })
      expect(links.length).toBeGreaterThan(0)
      expect(links[0]).toHaveAttribute('href', `#${label.toLowerCase()}`)
    }
    expect(screen.getAllByRole('link', { name: 'Join Now' }).length).toBeGreaterThan(0)
    expect(screen.getByRole('button', { name: 'Toggle dark mode' })).toBeInTheDocument()
  })

  it('toggles the dark class on the document root', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    expect(document.documentElement.classList.contains('dark')).toBe(false)

    await user.click(screen.getByRole('button', { name: 'Toggle dark mode' }))

    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(window.localStorage.getItem('forgefit-dark')).toBe('1')

    await user.click(screen.getByRole('button', { name: 'Toggle dark mode' }))

    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(window.localStorage.getItem('forgefit-dark')).toBe('0')
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    const mobileMenu = document.getElementById('mobile-menu')!
    await user.click(within(mobileMenu).getByRole('link', { name: 'Programs' }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu from the Join Now CTA', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    const mobileMenu = document.getElementById('mobile-menu')!
    await user.click(within(mobileMenu).getByRole('link', { name: 'Join Now' }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('switches to a solid background once the page is scrolled', () => {
    render(<Navbar />)

    const header = document.querySelector('header')!
    expect(header).toHaveAttribute('data-variant', 'transparent')

    Object.defineProperty(window, 'scrollY', { value: 200, configurable: true })
    act(() => {
      window.dispatchEvent(new Event('scroll'))
    })

    expect(header).toHaveAttribute('data-variant', 'solid')
  })
})
