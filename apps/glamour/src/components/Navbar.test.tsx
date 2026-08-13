import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import { describe, expect, it } from 'vitest'

describe('Navbar', () => {
  it('renders the fixed header with brand, subtitle, and menu toggle', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Glamour/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    expect(screen.queryByRole('navigation', { name: 'Menu' })).not.toBeInTheDocument()
  })

  it('opens the fullscreen overlay with numbered links and closes via the close button', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))

    const nav = screen.getByRole('navigation', { name: 'Menu' })
    expect(nav).toBeInTheDocument()
    for (const link of [
      { number: '01', label: 'Home' },
      { number: '02', label: 'About' },
      { number: '03', label: 'Models' },
      { number: '04', label: 'Blog' },
      { number: '05', label: 'Contact' },
    ]) {
      // Accessible name collapses the number + label to e.g. "01Home".
      expect(
        screen.getByRole('link', { name: new RegExp(link.number + link.label) }),
      ).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: /Home/ })).toHaveClass('text-brand')

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Menu' })).not.toBeInTheDocument()
  })

  it('closes the overlay when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const link = screen.getByRole('link', { name: /03Models/ })
    link.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(link)
    expect(screen.queryByRole('navigation', { name: 'Menu' })).not.toBeInTheDocument()
  })
})
