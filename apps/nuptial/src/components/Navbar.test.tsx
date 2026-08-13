import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import { DARK_KEY, Navbar } from './Navbar'

describe('Navbar', () => {
  beforeEach(() => {
    window.localStorage.clear()
    document.documentElement.classList.remove('dark')
    window.scrollY = 0
  })

  it('shows the brand, section links, and the dark-mode toggle', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /nuptial home/i })).toBeInTheDocument()
    expect(screen.getByText('Nuptial')).toBeInTheDocument()
    for (const label of [
      'Home',
      'Groom & Bride',
      'Love Story',
      'Greetings',
      'People',
      'When & Where',
      'RSVP',
      'Gallery',
    ]) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThan(0)
    }
    expect(screen.getByRole('button', { name: 'Toggle dark mode' })).toBeInTheDocument()
  })

  it('turns the header solid white after scrolling', () => {
    const { container } = render(<Navbar />)
    const header = container.querySelector('header')!
    expect(header).toHaveClass('bg-transparent')
    window.scrollY = 120
    fireEvent.scroll(window)
    expect(header).toHaveClass('bg-white/95')
    window.scrollY = 0
    fireEvent.scroll(window)
    expect(header).not.toHaveClass('bg-white/95')
  })

  it('toggles dark mode on the document root and persists the choice', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    expect(document.documentElement).not.toHaveClass('dark')
    await user.click(screen.getByRole('button', { name: 'Toggle dark mode' }))
    expect(document.documentElement).toHaveClass('dark')
    expect(window.localStorage.getItem(DARK_KEY)).toBe('1')
    await user.click(screen.getByRole('button', { name: 'Toggle dark mode' }))
    expect(document.documentElement).not.toHaveClass('dark')
    expect(window.localStorage.getItem(DARK_KEY)).toBe('0')
  })

  it('opens the mobile menu and closes it with Escape', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle mobile menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    await user.keyboard('{Escape}')
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('keeps the mobile menu open when another key is pressed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle mobile menu' })
    await user.click(toggle)
    await user.keyboard('{ArrowDown}')
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
  })

  it('closes the mobile menu when a section link is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle mobile menu' })
    await user.click(toggle)
    const galleryLinks = screen.getAllByRole('link', { name: 'Gallery' })
    await user.click(galleryLinks[galleryLinks.length - 1]!)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
