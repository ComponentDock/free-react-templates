import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  beforeEach(() => {
    window.localStorage.clear()
    document.documentElement.classList.remove('dark')
  })

  it('shows the wordmark and section links', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: /Coursely home/ })).toBeInTheDocument()
    expect(screen.getByText('Coursely')).toBeInTheDocument()

    for (const label of ['Courses', 'Categories', 'Instructors', 'Pricing', 'About']) {
      // Desktop + mobile drawer copies
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('shows the Get Started CTA and the dark-mode toggle', () => {
    render(<Navbar />)

    expect(screen.getAllByRole('link', { name: 'Get Started' }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('button', { name: 'Toggle dark mode' })).toBeInTheDocument()
  })

  it('toggles dark mode, persists it and cleans up on unmount', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle dark mode' })
    await user.click(toggle)

    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(window.localStorage.getItem('coursely-dark')).toBe('1')

    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(window.localStorage.getItem('coursely-dark')).toBe('0')
  })

  it('restores the persisted dark preference on load', () => {
    window.localStorage.setItem('coursely-dark', '1')
    render(<Navbar />)

    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const menuButton = screen.getByRole('button', { name: 'Open menu' })
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')

    await user.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getAllByRole('link', { name: 'Pricing' }).length).toBe(2)

    await user.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the menu when a drawer link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const menuButton = screen.getByRole('button', { name: 'Open menu' })
    await user.click(menuButton)

    await user.click(screen.getAllByRole('link', { name: 'Instructors' })[1]!)
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the menu when the drawer CTA is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const menuButton = screen.getByRole('button', { name: 'Open menu' })
    await user.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')

    await user.click(screen.getAllByRole('link', { name: 'Get Started' })[1]!)
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('switches from transparent to solid on scroll', () => {
    render(<Navbar />)

    const header = screen.getByRole('banner')
    expect(header).toHaveAttribute('data-variant', 'transparent')

    Object.defineProperty(window, 'scrollY', { value: 240, configurable: true })
    fireEvent.scroll(window)
    expect(header).toHaveAttribute('data-variant', 'solid')

    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true })
    fireEvent.scroll(window)
    expect(header).toHaveAttribute('data-variant', 'transparent')
  })

  it('removes the scroll listener on unmount', () => {
    const removeSpy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<Navbar />)
    unmount()

    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
  })
})
