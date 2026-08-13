import { act, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'
import { brand, navLinks } from '../data'

describe('Navbar', () => {
  it('renders the brand and the hamburger toggler, with no inline desktop link bar', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: `${brand.name}.` })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('button', { name: 'Toggle menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    // Hamburger-only navigation: the five links only exist inside the menu.
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument()
  })

  it('starts transparent and turns solid white with a shadow once scrolled', () => {
    render(<Navbar />)
    const header = screen.getByTestId('navbar')
    expect(header.className).toContain('bg-transparent')
    expect(screen.getByRole('link', { name: `${brand.name}.` }).className).toContain('text-white')

    Object.defineProperty(window, 'scrollY', { value: 120, configurable: true })
    act(() => {
      window.dispatchEvent(new Event('scroll'))
    })
    expect(header.className).toContain('bg-white')
    expect(header.className).toContain('shadow-[4px_0_20px_-5px_rgba(0,0,0,0.2)]')
    expect(screen.getByRole('link', { name: `${brand.name}.` }).className).toContain('text-brand')
    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true })
  })

  it('opens the full-screen menu from the hamburger and closes it via the close control', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Toggle menu' }))

    const close = screen.getByRole('button', { name: 'Close menu' })
    expect(close).toHaveAttribute('aria-expanded', 'true')
    const menu = screen.getByRole('navigation', { name: 'Mobile' })
    for (const link of navLinks) {
      expect(within(menu).getByRole('link', { name: link.label })).toHaveAttribute(
        'href',
        link.href,
      )
    }

    await user.click(close)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the menu when a link is activated', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Toggle menu' }))
    const menu = screen.getByRole('navigation', { name: 'Mobile' })
    const link = within(menu).getByRole('link', { name: navLinks[0]!.label })
    // Native preventDefault avoids the jsdom hash-navigation race with
    // React's delegated handler (see docs/ai-context.md).
    link.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(link)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
