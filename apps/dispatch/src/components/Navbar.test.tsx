import { beforeEach, describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  beforeEach(() => {
    window.localStorage.clear()
    document.documentElement.classList.remove('dark')
  })

  it('renders the logo, nav links, weather and search input', () => {
    render(<Navbar />)
    const banner = screen.getByRole('banner')
    expect(within(banner).getByRole('link', { name: 'dispatch' })).toBeInTheDocument()
    expect(within(banner).getByRole('link', { name: 'Home' })).toHaveAttribute(
      'aria-current',
      'page',
    )
    expect(within(banner).getByText('Fashion')).toBeInTheDocument()
    expect(within(banner).getByText('Gadgets')).toBeInTheDocument()
    expect(within(banner).getByText('Lifestyle')).toBeInTheDocument()
    expect(within(banner).getByText('Video')).toBeInTheDocument()
    expect(within(banner).getByText('Contact')).toBeInTheDocument()
    expect(within(banner).getByText('+10°')).toBeInTheDocument()
    expect(within(banner).getByRole('searchbox', { name: 'Search' })).toHaveAttribute(
      'placeholder',
      'Type to Search...',
    )
  })

  it('gains a dark translucent background once the page is scrolled', () => {
    render(<Navbar />)
    const banner = screen.getByRole('banner')
    expect(banner.classList.contains('bg-black/75')).toBe(false)

    Object.defineProperty(window, 'scrollY', { value: 200, configurable: true })
    fireEvent.scroll(window)
    expect(banner.classList.contains('bg-black/75')).toBe(true)

    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true })
    fireEvent.scroll(window)
    expect(banner.classList.contains('bg-black/75')).toBe(false)
  })

  it('toggles dark mode and persists the preference', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle dark mode' })

    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(window.localStorage.getItem('dispatch-dark')).toBe('true')

    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(window.localStorage.getItem('dispatch-dark')).toBe('false')
  })

  it('restores the saved dark-mode preference on mount', () => {
    window.localStorage.setItem('dispatch-dark', 'true')
    render(<Navbar />)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(screen.getByRole('button', { name: 'Toggle dark mode' })).toBeInTheDocument()
  })

  it('opens and closes the mobile slide-in menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const open = screen.getByRole('button', { name: 'Open menu' })
    expect(open).toHaveAttribute('aria-expanded', 'false')

    await user.click(open)
    expect(open).toHaveAttribute('aria-expanded', 'true')

    const dialog = screen.getByRole('dialog', { name: 'Menu' })
    expect(within(dialog).getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(within(dialog).getByRole('link', { name: 'Contact' })).toBeInTheDocument()
    expect(within(dialog).getByRole('searchbox', { name: 'Search in menu' })).toHaveAttribute(
      'placeholder',
      'Type to Search...',
    )

    await user.click(within(dialog).getByRole('button', { name: 'Close menu' }))
    expect(open).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link is activated', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.click(
      within(screen.getByRole('dialog', { name: 'Menu' })).getByRole('link', {
        name: 'Video',
      }),
    )
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes the mobile menu when the backdrop is clicked', async () => {
    const user = userEvent.setup()
    const { container } = render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    const backdrop = container.querySelector('.fixed.inset-0')
    expect(backdrop).not.toBeNull()
    await user.click(backdrop as HTMLElement)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('cleans up the scroll listener on unmount', () => {
    const { unmount } = render(<Navbar />)
    unmount()
    expect(() => fireEvent.scroll(window)).not.toThrow()
  })
})
