import { act, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'

describe('Header', () => {
  it('shows the brand with a wordmark', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: 'Pristine home' })).toBeInTheDocument()
    expect(screen.getByText('Pristine')).toBeInTheDocument()
  })

  it('shows the nav links and a Request Free Quote button', () => {
    render(<Header />)
    const nav = screen.getByRole('navigation', { name: 'Main' })
    for (const label of ['Home', 'Services', 'Project', 'About', 'Blog', 'Contact']) {
      expect(within(nav).getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(within(nav).getByRole('link', { name: 'Request Free Quote' })).toHaveClass(
      'btn-blue-pill',
    )
  })

  it('links Contact and Request Free Quote to the contact section', () => {
    render(<Header />)
    const nav = screen.getByRole('navigation', { name: 'Main' })
    expect(within(nav).getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact')
    expect(within(nav).getByRole('link', { name: 'Request Free Quote' })).toHaveAttribute(
      'href',
      '#contact',
    )
  })

  it('opens and closes the mobile menu via the hamburger', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const toggle = screen.getByRole('button', { name: 'Toggle mobile menu' })
    const menu = document.getElementById('mobile-menu')
    expect(menu).toHaveClass('hidden')
    await user.click(toggle)
    expect(menu).not.toHaveClass('hidden')
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    await user.click(toggle)
    expect(menu).toHaveClass('hidden')
  })

  it('closes the mobile menu when a link is chosen', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: 'Toggle mobile menu' }))
    const menu = document.getElementById('mobile-menu')
    expect(menu).not.toBeNull()
    const homeLink = within(menu as HTMLElement).getByRole('link', { name: 'Home' })
    homeLink.addEventListener('click', (event) => event.preventDefault())
    await user.click(homeLink)
    expect(document.getElementById('mobile-menu')).toHaveClass('hidden')
  })

  it('closes the mobile menu when the CTA link is chosen', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: 'Toggle mobile menu' }))
    const menu = document.getElementById('mobile-menu')
    const cta = within(menu as HTMLElement).getByRole('link', { name: 'Request Free Quote' })
    cta.addEventListener('click', (event) => event.preventDefault())
    await user.click(cta)
    expect(document.getElementById('mobile-menu')).toHaveClass('hidden')
  })

  it('adds a shadow after the page is scrolled', () => {
    const originalScrollY = window.scrollY
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true })
    render(<Header />)
    const header = document.querySelector('header')
    expect(header?.className).not.toContain('shadow-')
    act(() => {
      window.scrollY = 120
      window.dispatchEvent(new Event('scroll'))
    })
    expect(header?.className).toContain('shadow-[0_10px_15px_rgba(25,25,25,0.1)]')
    act(() => {
      window.scrollY = 0
      window.dispatchEvent(new Event('scroll'))
    })
    expect(header?.className).not.toContain('shadow-')
    Object.defineProperty(window, 'scrollY', {
      value: originalScrollY,
      writable: true,
      configurable: true,
    })
  })
})
