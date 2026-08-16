import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'
import { brand, navLinks } from '../data'

describe('Header', () => {
  it('renders the wordmark and desktop nav links', () => {
    render(<Header />)
    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    expect(screen.getByRole('link', { name: brand })).toBeInTheDocument()
    for (const link of navLinks) {
      if ((link.children?.length ?? 0) > 0) continue
      expect(within(nav).getByRole('link', { name: link.label })).toBeInTheDocument()
    }
    // Blog is a disclosure button, not a plain link.
    expect(within(nav).getByRole('button', { name: 'Blog' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('opens and closes the Blog dropdown', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const nav = screen.getByRole('navigation', { name: 'Main navigation' })

    const blog = within(nav).getByRole('button', { name: 'Blog' })
    await user.click(blog)

    const dropdown = screen.getByRole('list', { name: 'Blog dropdown' })
    expect(dropdown.className).toContain('visible')
    expect(within(dropdown).getByRole('link', { name: 'Blog Details' })).toBeInTheDocument()
    expect(within(dropdown).getByRole('link', { name: 'Elements' })).toBeInTheDocument()
    expect(blog).toHaveAttribute('aria-expanded', 'true')

    await user.click(blog)
    expect(blog).toHaveAttribute('aria-expanded', 'false')
    expect(dropdown.className).toContain('invisible')
  })

  it('switches to the sticky dark bar once the page is scrolled', () => {
    render(<Header />)
    expect(document.querySelector('header')!.className).toContain('bg-ink')
    expect(document.querySelector('header')!.className).toContain('absolute')

    Object.defineProperty(window, 'scrollY', { value: 500, configurable: true })
    fireEvent.scroll(window)
    expect(document.querySelector('header')!.className).toContain('bg-sticky')
    expect(document.querySelector('header')!.className).toContain('fixed')

    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true })
    fireEvent.scroll(window)
    expect(document.querySelector('header')!.className).toContain('bg-ink')
    expect(document.querySelector('header')!.className).toContain('absolute')
  })

  it('opens and closes the mobile slide-down menu', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    expect(within(mobileNav).getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(within(mobileNav).getByRole('link', { name: 'Contact' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('expands and collapses the Blog entry inside the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })

    const blog = within(mobileNav).getByRole('button', { name: 'Blog' })
    await user.click(blog)
    expect(within(mobileNav).getByRole('link', { name: 'Blog Details' })).toBeInTheDocument()
    expect(blog).toHaveAttribute('aria-expanded', 'true')

    await user.click(blog)
    expect(within(mobileNav).queryByRole('link', { name: 'Blog Details' })).not.toBeInTheDocument()
    expect(blog).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu when a navigation link is chosen', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const homeLink = screen
      .getByRole('navigation', { name: 'Mobile navigation' })
      .querySelector('a[href="#home"]') as HTMLAnchorElement
    // Neutralize jsdom hash-navigation so the React handler still fires.
    homeLink.addEventListener('click', (event) => event.preventDefault(), { once: true })

    await user.click(homeLink)
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })
})
