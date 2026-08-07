import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the wordmark and section links', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: /^Foundry/ })).toBeInTheDocument()
    const nav = screen.getByRole('navigation', { name: 'Primary' })
    for (const label of ['Home', 'Projects', 'Services', 'Blog', 'About', 'Contact']) {
      expect(within(nav).getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('toggles dark mode on the document root', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    expect(document.documentElement.classList.contains('dark')).toBe(false)
    await user.click(screen.getByRole('button', { name: /Dark mode/ }))
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(screen.getByRole('button', { name: /Light mode/ })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /Light mode/ }))
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const openButton = screen.getByRole('button', { name: 'Open menu' })
    await user.click(openButton)
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile menu' })
    expect(within(mobileNav).getByRole('link', { name: 'Projects' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile menu' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile menu' })
    await user.click(within(mobileNav).getByRole('link', { name: 'Projects' }))

    expect(screen.queryByRole('navigation', { name: 'Mobile menu' })).not.toBeInTheDocument()
  })

  it('cleans up the dark class on unmount', () => {
    const { unmount } = render(<Navbar />)
    document.documentElement.classList.add('dark')
    unmount()
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })
})
