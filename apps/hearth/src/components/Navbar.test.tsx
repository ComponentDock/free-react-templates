import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand and the six nav links with Home as the current link', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Hearth' })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument()
    for (const label of ['Home', 'About', 'Specialties', 'Reservation', 'Stories', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page')
  })

  it('turns fixed with a white background after the page scrolls past the hero', () => {
    const { container } = render(<Navbar />)
    const header = container.querySelector('header')!

    expect(header.className).not.toContain('fixed')

    Object.defineProperty(window, 'scrollY', { value: 200, configurable: true })
    fireEvent.scroll(window)

    expect(header.className).toContain('fixed')
    expect(header.className).toContain('bg-white')
  })

  it('returns to the transparent state when scrolled back to the top', () => {
    const { container } = render(<Navbar />)
    const header = container.querySelector('header')!

    Object.defineProperty(window, 'scrollY', { value: 200, configurable: true })
    fireEvent.scroll(window)
    expect(header.className).toContain('fixed')

    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true })
    fireEvent.scroll(window)
    expect(header.className).not.toContain('fixed')
  })

  it('toggles the mobile menu with the Menu button', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })
})
