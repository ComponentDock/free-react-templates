import { describe, expect, it } from 'vitest'
import { act, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import { BRAND, NAV_LINKS } from '../data'

describe('Navbar', () => {
  it('renders the brand and all eight nav links with Home active', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: new RegExp(`^${BRAND}\\.$`) })).toHaveAttribute(
      'href',
      '#home-section',
    )
    for (const link of NAV_LINKS) {
      const el = screen.getByRole('link', { name: link.label, hidden: true })
      expect(el).toHaveAttribute('href', link.href)
    }
    expect(screen.getByRole('link', { name: 'Home', hidden: true })).toHaveClass('text-brand')
    expect(screen.getByRole('link', { name: 'Programs', hidden: true })).not.toHaveClass(
      'text-brand',
    )
  })

  it('is transparent over the hero and turns solid black after scrolling', () => {
    render(<Navbar />)

    const header = document.querySelector('header')!
    expect(header).not.toHaveClass('bg-black')

    Object.defineProperty(window, 'scrollY', { value: 100, writable: true, configurable: true })
    act(() => {
      window.dispatchEvent(new Event('scroll'))
    })
    expect(header).toHaveClass('bg-black')

    Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true })
    act(() => {
      window.dispatchEvent(new Event('scroll'))
    })
    expect(header).not.toHaveClass('bg-black')
  })

  it('opens and closes the mobile menu with the same eight links', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    for (const link of NAV_LINKS) {
      expect(within(mobileNav).getByRole('link', { name: link.label })).toBeInTheDocument()
    }

    const contact = within(mobileNav).getByRole('link', { name: 'Contact' })
    contact.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(contact)
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })
})
