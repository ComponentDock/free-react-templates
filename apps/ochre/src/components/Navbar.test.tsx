import { afterEach, describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import { brandName, menuOpenLabel, navLinks, searchLabel, toggleDarkLabel } from '../data'

describe('Navbar', () => {
  afterEach(() => {
    document.documentElement.classList.remove('dark')
    window.localStorage.clear()
  })

  it('renders the site name, nav links, search button and social icons', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: brandName })).toBeInTheDocument()
    for (const link of navLinks) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: searchLabel })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'X' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Pinterest' })).toBeInTheDocument()
  })

  it('marks Home as the current page', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page')
  })

  it('toggles dark mode and persists the preference', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: toggleDarkLabel })
    await user.click(toggle)
    expect(document.documentElement).toHaveClass('dark')
    expect(window.localStorage.getItem('ochre-theme')).toBe('dark')

    await user.click(toggle)
    expect(document.documentElement).not.toHaveClass('dark')
    expect(window.localStorage.getItem('ochre-theme')).toBe('light')
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: menuOpenLabel }))
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: menuOpenLabel }))
    const mobile = screen.getByRole('navigation', { name: 'Mobile' })
    await user.click(within(mobile).getByRole('link', { name: 'Archive' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
