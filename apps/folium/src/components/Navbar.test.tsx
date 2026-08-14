import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'
import { navLinks } from '../data'

describe('Navbar', () => {
  it('renders the site name and all section links', () => {
    render(<Navbar />)
    expect(screen.getByText('Folium')).toBeInTheDocument()
    // Desktop nav links (hidden below lg in jsdom — query with hidden).
    for (const link of navLinks) {
      expect(
        screen.getAllByRole('link', { name: link.label, hidden: true }).length,
      ).toBeGreaterThan(0)
    }
  })

  it('is transparent over the hero and turns white with a shadow after scrolling', () => {
    render(<Navbar />)
    const header = screen.getByRole('banner')
    expect(header).toHaveClass('bg-transparent')
    expect(header).not.toHaveClass('bg-white')

    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 200, configurable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(header).toHaveClass('bg-white', 'shadow-[0_0_10px_rgba(0,0,0,0.1)]')

    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 0, configurable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(header).toHaveClass('bg-transparent')
  })

  it('opens and closes the mobile menu with the toggler', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeInTheDocument()
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    await user.click(mobileNav.querySelectorAll('a')[1]!)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('renders the mobile menu with light styling after scrolling', () => {
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 200, configurable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    act(() => {
      toggle.click()
    })
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    expect(mobileNav).toHaveClass('bg-white', 'border-gray-100')
    expect(mobileNav.querySelector('a')).toHaveClass('text-black')
  })
})
