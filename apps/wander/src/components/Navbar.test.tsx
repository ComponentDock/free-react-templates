import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the brand and a closed hamburger toggle over the hero', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Wander' })).toBeInTheDocument()
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(toggle.querySelectorAll('span')).toHaveLength(3)
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument()
  })

  it('opens a fullscreen overlay listing the six nav links when the toggle is activated', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const nav = screen.getByRole('navigation', { name: 'Main' })
    expect(nav).toHaveClass('fixed', 'inset-0', 'bg-white')
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(nav.querySelectorAll('a')).toHaveLength(6)
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Hotels' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Gallery' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'News' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('marks the active Home link in teal', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('link', { name: 'Home' })).toHaveClass('text-brand')
  })

  it('closes the overlay when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const hotels = screen.getByRole('link', { name: 'Hotels' })
    hotels.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(hotels)
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('turns the toggle bars black and rotates them into an X while open', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    const bars = toggle.querySelectorAll('span')
    expect(bars[0]).toHaveClass('bg-white')
    await user.click(toggle)
    expect(bars[0]).toHaveClass('bg-black')
    expect(bars[0]).toHaveClass('rotate-45')
    expect(bars[2]).toHaveClass('-rotate-45')
    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(bars[0]).toHaveClass('bg-white')
  })
})
