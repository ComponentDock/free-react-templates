import { describe, expect, it, vi, afterEach } from 'vitest'
import { render, screen, within, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'

describe('Header', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('renders the logo wordmark and appointment CTA', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: /Pearly/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Make Appointment/i })).toBeInTheDocument()
  })

  it('renders the primary nav links', () => {
    render(<Header />)
    const nav = screen.getByRole('navigation', { name: 'Primary navigation' })
    for (const label of ['Home', 'About', 'Treatment', 'Contact']) {
      expect(within(nav).getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(within(nav).getByRole('button', { name: 'Blog' })).toBeInTheDocument()
  })

  it('toggles the Blog dropdown', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const blogButton = screen.getByRole('button', { name: 'Blog' })
    expect(blogButton).toHaveAttribute('aria-expanded', 'false')

    await user.click(blogButton)
    expect(blogButton).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('link', { name: 'Blog Details' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Elements' })).toBeInTheDocument()

    await user.click(blogButton)
    expect(blogButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the dropdown when a menu item is picked', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: 'Blog' }))
    await user.click(screen.getByRole('link', { name: 'Blog Details' }))
    expect(screen.getByRole('button', { name: 'Blog' })).toHaveAttribute('aria-expanded', 'false')
  })

  it('opens a solid mobile menu with all links', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const toggle = screen.getByRole('button', { name: /Open menu/i })
    await user.click(toggle)

    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    expect(mobileNav).toBeInTheDocument()
    for (const label of ['Home', 'About', 'Treatment', 'Blog', 'Contact']) {
      expect(within(mobileNav).getAllByRole('link', { name: label }).length).toBeGreaterThan(0)
    }
    expect(within(mobileNav).getByRole('link', { name: /Make Appointment/i })).toBeInTheDocument()

    await user.click(toggle)
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link is picked', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: /Open menu/i }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    await user.click(
      within(mobileNav).getAllByRole('link', { name: 'About' })[0] ?? mobileNav.querySelector('a')!,
    )
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when the appointment CTA is picked', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: /Open menu/i }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    await user.click(within(mobileNav).getByRole('link', { name: /Make Appointment/i }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('becomes solid/sticky after scrolling', () => {
    render(<Header />)
    const header = screen.getByRole('banner')
    expect(header.className).not.toContain('bg-white')

    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 120, configurable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(header.className).toContain('bg-white')

    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 0, configurable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(header.className).not.toContain('bg-white')
  })
})
