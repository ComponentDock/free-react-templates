import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'

describe('Header', () => {
  it('renders the brand, white nav links, Log In and Live Chat pill', () => {
    render(<Header />)

    expect(screen.getByRole('link', { name: 'Sitewise home' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument()

    for (const label of ['Home', 'Package', 'Blog', 'Support', 'About', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: /Log In/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Live Chat/ })).toBeInTheDocument()
  })

  it('collapses the links behind a hamburger toggle and opens/closes the menu', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    await user.click(toggle)
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    expect(mobileNav).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(screen.getAllByRole('link', { name: 'Home' })).toHaveLength(2)

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when Escape is pressed (other keys keep it open)', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeInTheDocument()

    await user.keyboard('{ArrowDown}')
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeInTheDocument()

    await user.keyboard('{Escape}')
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link inside it is chosen', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileLinks = screen.getAllByRole('link', { name: 'Package' })
    const target = mobileLinks[1]!
    // Neutralize jsdom hash navigation (races with the React onClick handler).
    target.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(target)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when Log In or Live Chat is chosen', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const login = screen.getAllByRole('link', { name: /Log In/ })[1]!
    login.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(login)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const chat = screen.getAllByRole('link', { name: /Live Chat/ })[1]!
    chat.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(chat)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
