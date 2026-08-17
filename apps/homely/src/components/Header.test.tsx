import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Header } from './Header'

describe('Header', () => {
  it('renders the brand, nav links, and the Apply For Loan CTA', () => {
    render(<Header />)

    expect(screen.getByRole('link', { name: 'Homely' })).toHaveAttribute('href', '#home')
    const desktopNav = screen.getByRole('navigation', { name: 'Main navigation' })
    for (const label of ['Home', 'About', 'Services', 'Blog', 'Contact']) {
      expect(within(desktopNav).getByRole('link', { name: label })).toHaveAttribute(
        'href',
        `#${label.toLowerCase()}`,
      )
    }
    expect(
      within(desktopNav.parentElement as HTMLElement).getByRole('link', {
        name: 'Apply For Loan',
      }),
    ).toHaveAttribute('href', '#apply')
  })

  it('starts transparent and turns solid after scrolling', () => {
    render(<Header />)
    const header = screen.getByRole('banner')
    expect(header.className).toContain('bg-transparent')

    Object.defineProperty(window, 'scrollY', {
      value: 120,
      configurable: true,
      writable: true,
    })
    fireEvent.scroll(window)
    expect(header.className).toContain('bg-header')

    Object.defineProperty(window, 'scrollY', {
      value: 0,
      configurable: true,
      writable: true,
    })
    fireEvent.scroll(window)
    expect(header.className).toContain('bg-transparent')
  })

  it('opens and closes the mobile drawer', () => {
    render(<Header />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const drawer = document.getElementById('mobile-menu') as HTMLElement
    const mobileNav = within(drawer).getByRole('navigation', { name: 'Mobile navigation' })
    expect(within(mobileNav).getByRole('link', { name: 'Services' })).toHaveAttribute(
      'href',
      '#services',
    )
    expect(within(drawer).getByRole('link', { name: 'Apply For Loan' })).toHaveAttribute(
      'href',
      '#apply',
    )

    fireEvent.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )

    // A mobile nav link click also closes the drawer (jsdom hash navigation
    // is neutralized with a native listener so the React onClick still runs).
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const servicesLink = within(mobileNav).getByRole('link', { name: 'Services' })
    servicesLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    fireEvent.click(servicesLink)
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )

    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const drawerCta = within(drawer).getByRole('link', { name: 'Apply For Loan' })
    drawerCta.addEventListener('click', (event) => event.preventDefault(), { once: true })
    fireEvent.click(drawerCta)
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })
})
