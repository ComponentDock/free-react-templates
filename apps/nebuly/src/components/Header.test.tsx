import { afterEach, describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { Header } from './Header'

afterEach(() => {
  vi.restoreAllMocks()
  window.scrollY = 0
})

/* The mobile menu renders a second "Get started" CTA (spec requires it);
   these helpers target the desktop-only elements. */
function desktopCta(): HTMLElement {
  return screen
    .getAllByRole('link', { name: 'Get started' })
    .find((node) => node.className.includes('lg:inline-block'))!
}

describe('Header', () => {
  it('renders the wordmark, the six nav links, and the green CTA', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: 'Nebuly' })).toBeInTheDocument()
    const desktopNav = screen.getByRole('navigation', { name: 'Main' })
    for (const label of ['Home', 'Company', 'Pricing', 'Leadership', 'Blog', 'Contact']) {
      expect(within(desktopNav).getByRole('link', { name: label })).toBeInTheDocument()
    }
    const cta = desktopCta()
    expect(cta).toHaveClass('border-accent')
  })

  it('marks the Home link active', () => {
    render(<Header />)
    const desktopNav = screen.getByRole('navigation', { name: 'Main' })
    expect(within(desktopNav).getByRole('link', { name: 'Home' })).toHaveAttribute(
      'aria-current',
      'page',
    )
  })

  it('is transparent over the hero and turns solid with dark links once scrolled', () => {
    render(<Header />)
    const header = screen.getByRole('banner')
    expect(header).not.toHaveClass('bg-white')

    window.scrollY = 120
    fireEvent.scroll(window)
    expect(header).toHaveClass('bg-white')
    const cta = desktopCta()
    expect(cta).toHaveClass('bg-brand')
    expect(cta).not.toHaveClass('border-accent')
  })

  it('opens and closes the mobile menu with the toggle and Escape', () => {
    render(<Header />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    expect(within(mobileNav).getByRole('link', { name: 'Contact' })).toBeInTheDocument()

    /* A non-Escape key leaves the menu open. */
    fireEvent.keyDown(document, { key: 'ArrowDown' })
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    fireEvent.keyDown(document, { key: 'Escape' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu when a link is clicked', () => {
    render(<Header />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    fireEvent.click(within(mobileNav).getByRole('link', { name: 'Pricing' }))
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('closes the mobile menu when the mobile CTA is clicked', () => {
    render(<Header />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileCta = screen
      .getAllByRole('link', { name: 'Get started' })
      .find((node) => !node.className.includes('lg:inline-block'))!
    fireEvent.click(mobileCta)
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })
})
