import { describe, expect, it } from 'vitest'
import { act, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import { NAV_LINKS } from '../data'

describe('Navbar', () => {
  it('renders the brand and all eight nav links with Home active', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: /Flexly/ })).toHaveAttribute('href', '#home-section')
    for (const link of NAV_LINKS) {
      const el = screen.getByRole('link', { name: link.label, hidden: true })
      expect(el).toHaveAttribute('href', link.href)
    }
    expect(screen.getByRole('link', { name: 'Home', hidden: true })).toHaveClass('text-brand')
    expect(screen.getByRole('link', { name: 'Programs', hidden: true })).not.toHaveClass(
      'text-brand',
    )
  })

  it('turns white with a shadow after scrolling', () => {
    render(<Navbar />)

    const header = document.querySelector('header')!
    expect(header).not.toHaveClass('bg-white')

    Object.defineProperty(window, 'scrollY', { value: 100, writable: true, configurable: true })
    act(() => {
      window.dispatchEvent(new Event('scroll'))
    })
    expect(header).toHaveClass('bg-white', 'shadow-[0_0_10px_rgba(0,0,0,0.1)]')

    Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true })
    act(() => {
      window.dispatchEvent(new Event('scroll'))
    })
    expect(header).not.toHaveClass('bg-white')
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    expect(within(mobileNav).getByRole('link', { name: 'Home' })).toBeInTheDocument()

    await user.click(within(mobileNav).getByRole('link', { name: 'Contact' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })
})
