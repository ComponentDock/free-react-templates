import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'

describe('Header', () => {
  it('shows the site name, nav links, utility links, and the phone pill', () => {
    render(<Header />)

    expect(screen.getByRole('link', { name: /Serverly/ })).toBeInTheDocument()
    const mainNav = within(screen.getByRole('navigation', { name: 'Main' }))
    for (const label of ['Home', 'About us', 'Services', 'News', 'Contact']) {
      expect(mainNav.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Webmail' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Chat' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Login' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /652-345 3222 11/ })).toBeInTheDocument()
  })

  it('turns dark navy once the page is scrolled', () => {
    render(<Header />)
    const header = screen.getByRole('banner')
    expect(header).not.toHaveClass('bg-navy-900')

    Object.defineProperty(window, 'scrollY', { value: 120, configurable: true, writable: true })
    fireEvent.scroll(window)
    expect(header).toHaveClass('bg-navy-900')

    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true, writable: true })
    fireEvent.scroll(window)
    expect(header).not.toHaveClass('bg-navy-900')
  })

  it('opens and closes the full-screen mobile menu', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const toggle = screen.getByRole('button', { name: /open mobile menu/i })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const menu = screen.getByRole('navigation', { name: 'Mobile' })
    expect(menu).toBeInTheDocument()
    expect(within(menu).getByRole('link', { name: 'Services' })).toHaveAttribute(
      'href',
      '#services',
    )
    expect(within(menu).getByRole('link', { name: /652-345 3222 11/ })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a nav link is chosen', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: /open mobile menu/i }))
    const menu = screen.getByRole('navigation', { name: 'Mobile' })
    const homeLink = within(menu).getByRole('link', { name: 'Home' })
    homeLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(homeLink)
    expect(screen.getByRole('button', { name: /open mobile menu/i })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })
})
