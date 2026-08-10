import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

const navLabels = ['Home', 'Shop', 'About', 'Blog', 'Contact']

describe('Navbar', () => {
  it('renders the logo, nav links, and cart count', () => {
    render(<Navbar />)
    const banner = screen.getByRole('banner')
    expect(banner).toBeInTheDocument()

    const logo = screen.getByRole('link', { name: /^Couture$/ })
    expect(logo).toBeInTheDocument()

    const nav = screen.getByRole('navigation', { name: 'Primary' })
    for (const label of navLabels) {
      expect(withinNav(nav, label)).toBeInTheDocument()
    }
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('toggles dark mode on the document root', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    expect(document.documentElement).not.toHaveClass('dark')

    await user.click(screen.getByRole('button', { name: 'Dark mode' }))
    expect(document.documentElement).toHaveClass('dark')
    expect(screen.getByRole('button', { name: 'Light mode' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Light mode' }))
    expect(document.documentElement).not.toHaveClass('dark')
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)

    const mobile = screen.getByRole('navigation', { name: 'Mobile' })
    for (const label of navLabels) {
      expect(withinNav(mobile, label)).toBeInTheDocument()
    }
    expect(screen.getAllByRole('button', { name: 'Close menu' })[0]).toHaveAttribute(
      'aria-expanded',
      'true',
    )

    await user.click(screen.getAllByRole('button', { name: 'Close menu' })[1]!)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the menu from a nav link and from the toggle', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobile = screen.getByRole('navigation', { name: 'Mobile' })
    await user.click(withinNav(mobile, 'Shop'))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.click(screen.getAllByRole('button', { name: 'Close menu' })[0]!)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})

function withinNav(nav: HTMLElement, label: string) {
  return Array.from(nav.querySelectorAll('a')).find((a) => a.textContent?.includes(label))!
}
