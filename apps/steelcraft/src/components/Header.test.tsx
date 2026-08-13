import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Header } from './Header'
import { brand, navItems, topBar } from '../data'
import { socialLinks } from './social-icons'

describe('Header', () => {
  it('renders the top bar contact info and the Get Free Quote link', () => {
    render(<Header />)
    expect(screen.getByText(topBar.phone)).toBeInTheDocument()
    expect(screen.getByText(topBar.email)).toBeInTheDocument()
    expect(screen.getByText(topBar.hours)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: topBar.quote })).toBeInTheDocument()
  })

  it('renders the social links in the top bar', () => {
    render(<Header />)
    for (const link of socialLinks) {
      expect(screen.getAllByRole('link', { name: link.label }).length).toBeGreaterThan(0)
    }
  })

  it('renders the logo and all desktop nav links', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: new RegExp(brand.name) })).toHaveAttribute(
      'href',
      '#home',
    )
    for (const item of navItems) {
      expect(screen.getAllByRole('link', { name: item.label }).length).toBeGreaterThan(0)
    }
  })

  it('floats over the hero initially and becomes a fixed black bar on scroll', () => {
    const { container } = render(<Header />)
    const stickyNav = container.querySelector('[data-testid="sticky-nav"]') as HTMLElement
    expect(stickyNav).toHaveClass('relative')

    Object.defineProperty(window, 'scrollY', { value: 200, configurable: true })
    fireEvent.scroll(window)
    expect(stickyNav).toHaveClass('fixed')
    expect(stickyNav).toHaveClass('bg-black')
  })

  it('cleans up the scroll listener on unmount', () => {
    const { unmount } = render(<Header />)
    const spy = vi.spyOn(window, 'removeEventListener')
    unmount()
    expect(spy).toHaveBeenCalledWith('scroll', expect.any(Function))
    spy.mockRestore()
  })

  it('opens the mobile menu and closes it via the close button', () => {
    render(<Header />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('shows the nav links inside the mobile menu panel', () => {
    render(<Header />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))

    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    for (const item of navItems) {
      expect(mobileNav.querySelector(`a[href="${item.href}"]`)).toHaveTextContent(item.label)
    }
    expect(mobileNav).toHaveTextContent(topBar.quote)
  })

  it('closes the mobile menu when a link is clicked', () => {
    render(<Header />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const homeLink = screen
      .getByRole('navigation', { name: 'Mobile' })
      .querySelector('a[href="#home"]') as HTMLElement

    fireEvent.click(homeLink)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when the quote link is clicked', () => {
    render(<Header />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    const quoteLink = Array.from(mobileNav.querySelectorAll('a[href="#contact"]')).find(
      (link) => link.textContent === topBar.quote,
    ) as HTMLElement

    fireEvent.click(quoteLink)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when the backdrop is clicked', () => {
    render(<Header />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))

    const backdrop = document.querySelector('.bg-black\\/50') as HTMLElement
    fireEvent.click(backdrop)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
