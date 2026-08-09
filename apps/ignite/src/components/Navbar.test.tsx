import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  beforeEach(() => {
    window.localStorage.clear()
    document.documentElement.classList.remove('dark')
  })

  it('renders the site name, section links, and I’m New button', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: /Ignite Youth home/ })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument()
    for (const label of ['Events', 'Groups', 'Watch', 'About', 'Parents']) {
      // Desktop + mobile navs both render the links (jsdom applies no CSS).
      expect(screen.getAllByRole('link', { name: label })).toHaveLength(2)
    }
    expect(screen.getAllByRole('link', { name: "I'm New" })).toHaveLength(2)
  })

  it('toggles the .dark class on the document root and persists the preference', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    expect(document.documentElement).not.toHaveClass('dark')

    await user.click(screen.getByRole('button', { name: 'Toggle dark mode' }))

    expect(document.documentElement).toHaveClass('dark')
    expect(window.localStorage.getItem('theme')).toBe('dark')

    await user.click(screen.getByRole('button', { name: 'Toggle dark mode' }))

    expect(document.documentElement).not.toHaveClass('dark')
    expect(window.localStorage.getItem('theme')).toBe('light')
  })

  it('cleans up the dark class when unmounted', async () => {
    const user = userEvent.setup()
    const { unmount } = render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Toggle dark mode' }))
    expect(document.documentElement).toHaveClass('dark')

    unmount()
    expect(document.documentElement).not.toHaveClass('dark')
  })

  it('switches to a solid blurred header once the page is scrolled', () => {
    render(<Navbar />)

    const header = screen.getByRole('banner')
    expect(header.className).toContain('bg-transparent')

    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 200, configurable: true })
      window.dispatchEvent(new Event('scroll'))
    })

    expect(header.className).toContain('bg-white/80')
    expect(header.className).toContain('backdrop-blur')
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle mobile menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    await user.keyboard('{ArrowDown}')
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    await user.keyboard('{Escape}')
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu when a link is activated', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Toggle mobile menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })

    await user.click(screen.getAllByRole('link', { name: 'Events' })[1]!)
    expect(screen.getByRole('button', { name: 'Toggle mobile menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    expect(mobileNav).toBeInTheDocument()
  })

  it('closes the mobile menu when the I’m New button is activated', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Toggle mobile menu' }))
    const menu = document.getElementById('mobile-menu')
    expect(menu).not.toBeNull()

    await user.click(screen.getAllByRole('link', { name: "I'm New" })[1]!)
    expect(screen.getByRole('button', { name: 'Toggle mobile menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })
})
