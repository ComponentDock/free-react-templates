import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

const desktopLinks: ReadonlyArray<readonly [label: string, href: string]> = [
  ['About', '#about'],
  ['Services', '#services'],
  ['Testimonials', '#testimonials'],
  ['Contact', '#contact'],
]

describe('Navbar', () => {
  it('shows the site name, section links, and CTA on desktop', () => {
    render(<Navbar />)
    expect(screen.getByText('Aurora')).toBeInTheDocument()

    const primary = screen.getByRole('navigation', { name: 'Primary' })
    for (const [label, href] of desktopLinks) {
      const link = within(primary).getByRole('link', { name: label })
      expect(link).toHaveAttribute('href', href)
    }

    expect(screen.getByRole('link', { name: 'Get in touch' })).toHaveAttribute('href', '#contact')
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle navigation' })

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const mobile = screen.getByRole('navigation', { name: 'Mobile' })
    expect(mobile).toBeVisible()
    expect(within(mobile).getByRole('link', { name: 'About' })).toHaveAttribute('href', '#about')

    // clicking a link closes the menu again
    await user.click(within(mobile).getByRole('link', { name: 'Services' }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    // and the toggle flips it back open
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeVisible()
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('toggles dark mode on and off on the document root', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    expect(document.documentElement.classList.contains('dark')).toBe(false)

    await user.click(screen.getByRole('button', { name: 'Dark mode' }))
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(screen.getByRole('button', { name: 'Light mode' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Light mode' }))
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(screen.getByRole('button', { name: 'Dark mode' })).toBeInTheDocument()
  })

  it('removes the dark class from the document root on unmount', async () => {
    const user = userEvent.setup()
    const { unmount } = render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Dark mode' }))
    expect(document.documentElement.classList.contains('dark')).toBe(true)

    unmount()
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })
})
