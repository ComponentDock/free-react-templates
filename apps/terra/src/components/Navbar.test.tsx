import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

const navLabels = ['Home', 'About', 'Gallery', 'Services', 'Pricing', 'Blog', 'Contact']

describe('Navbar', () => {
  it('renders the site name, nav links, and social icons', () => {
    render(<Navbar />)
    const banner = screen.getByRole('banner')
    expect(banner).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /terra/i })).toHaveTextContent('Terra')

    const nav = screen.getByRole('navigation', { name: 'Primary' })
    for (const label of navLabels) {
      expect(withinNav(nav, label)).toBeInTheDocument()
    }
    for (const label of ['Twitter', 'Facebook', 'Instagram']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
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

    await user.click(withinNav(mobile, 'Services'))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})

function withinNav(nav: HTMLElement, label: string) {
  return Array.from(nav.querySelectorAll('a')).find((a) => a.textContent?.includes(label))!
}
