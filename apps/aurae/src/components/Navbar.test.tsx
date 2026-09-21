import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo and all navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Aurae/i })).toBeInTheDocument()
    for (const label of ['Home', 'About', 'Classes', 'Trainers', 'Events', 'Pricing', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders the Join Now CTA button on desktop', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Join Now/i })).toBeInTheDocument()
  })

  it('toggles mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const btn = screen.getByRole('button', { name: /Open menu/i })
    await user.click(btn)
    expect(screen.getByRole('button', { name: /Close menu/i })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: /Mobile/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /Open menu/i }))
    await user.click(screen.getByRole('navigation', { name: /Mobile/i }).querySelector('a')!)
    expect(screen.queryByRole('navigation', { name: /Mobile/i })).not.toBeInTheDocument()
  })

  it('closes mobile menu on window resize to desktop', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /Open menu/i }))
    expect(screen.getByRole('navigation', { name: /Mobile/i })).toBeInTheDocument()

    act(() => {
      Object.defineProperty(window, 'innerWidth', { value: 1200, writable: true })
      window.dispatchEvent(new Event('resize'))
    })

    expect(screen.queryByRole('navigation', { name: /Mobile/i })).not.toBeInTheDocument()
  })

  it('does not close mobile menu on resize below desktop', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /Open menu/i }))

    act(() => {
      Object.defineProperty(window, 'innerWidth', { value: 800, writable: true })
      window.dispatchEvent(new Event('resize'))
    })

    expect(screen.getByRole('navigation', { name: /Mobile/i })).toBeInTheDocument()
  })
})
