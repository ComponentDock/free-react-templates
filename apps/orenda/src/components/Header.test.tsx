import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Header } from './Header'

describe('Header', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    document.documentElement.classList.remove('dark')
    window.localStorage.removeItem('orenda-theme')
  })

  it('renders the utility bar with contact info, login links and social icons', () => {
    render(<Header />)
    expect(screen.getByText('needhelp@gmail.com')).toBeInTheDocument()
    expect(screen.getByText('+10 267 356 0016')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Login' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Register' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Linkedin' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
  })

  it('renders the logo and all main nav links plus a search input', () => {
    render(<Header />)
    const logo = screen.getByRole('link', { name: /Orenda/ })
    expect(logo).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument()
    for (const label of ['Home', 'About', 'Courses', 'Instructors', 'Blog', 'Contact']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThan(0)
    }
    expect(screen.getByRole('searchbox', { name: 'Search' })).toBeInTheDocument()
  })

  it('opens and closes the mobile slide-out menu with accessible state', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const toggle = screen.getByRole('button', { name: /Open menu/ })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    expect(mobileNav).toBeInTheDocument()
    expect(within(mobileNav).getAllByRole('link', { name: 'Home' }).length).toBeGreaterThan(0)

    await user.click(within(mobileNav).getByRole('link', { name: 'Contact' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu when a Login or Register link is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const toggle = screen.getByRole('button', { name: /Open menu/ })
    await user.click(toggle)
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })

    await user.click(within(mobileNav).getByRole('link', { name: 'Login' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    await user.click(toggle)
    await user.click(
      within(screen.getByRole('navigation', { name: 'Mobile' })).getByRole('link', {
        name: 'Register',
      }),
    )
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('toggles dark mode and persists the preference', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const toggle = screen.getByRole('button', { name: 'Toggle dark mode' })

    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(window.localStorage.getItem('orenda-theme')).toBe('dark')
    expect(screen.getByRole('button', { name: 'Toggle light mode' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Toggle light mode' }))
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(window.localStorage.getItem('orenda-theme')).toBe('light')
  })

  it('reads the saved dark preference on mount', () => {
    window.localStorage.setItem('orenda-theme', 'dark')
    render(<Header />)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('cleans up the dark class when unmounted', async () => {
    const user = userEvent.setup()
    const { unmount } = render(<Header />)
    await user.click(screen.getByRole('button', { name: 'Toggle dark mode' }))
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    unmount()
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('submits the search form with the query', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const input = screen.getByRole('searchbox', { name: 'Search' })
    await user.type(input, 'react')
    fireEvent.submit(input.closest('form')!)
    expect(input).toHaveValue('')
  })
})
