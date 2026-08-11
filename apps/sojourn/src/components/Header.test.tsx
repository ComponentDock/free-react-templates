import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Header } from './Header'
import { navItems } from '../data'

describe('Header', () => {
  it('shows the site name, the hamburger trigger, and the dark bottom navigation', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: 'Sojourn' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Open navigation menu' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
    for (const item of navItems) {
      expect(screen.getByRole('link', { name: item.label })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page')
  })

  it('opens the slide-in panel with the nav links and closes it via the close button', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: 'Open navigation menu' }))
    const panel = screen.getByRole('dialog', { name: 'Slide-in navigation' })
    expect(panel).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Close navigation menu' })).toBeInTheDocument()
    for (const item of navItems) {
      expect(within(panel).getByRole('link', { name: item.label })).toBeInTheDocument()
    }
    await user.click(screen.getByRole('button', { name: 'Close navigation menu' }))
    expect(screen.queryByRole('dialog', { name: 'Slide-in navigation' })).not.toBeInTheDocument()
  })

  it('closes the slide-in panel when the overlay is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: 'Open navigation menu' }))
    await user.click(screen.getByRole('button', { name: 'Close navigation overlay' }))
    expect(screen.queryByRole('dialog', { name: 'Slide-in navigation' })).not.toBeInTheDocument()
  })

  it('unlocks body scroll when the panel closes', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: 'Open navigation menu' }))
    expect(document.body.style.overflow).toBe('hidden')
    await user.click(screen.getByRole('button', { name: 'Close navigation menu' }))
    expect(document.body.style.overflow).toBe('')
  })

  it('removes the scroll lock when unmounted while open', async () => {
    const user = userEvent.setup()
    const { unmount } = render(<Header />)
    await user.click(screen.getByRole('button', { name: 'Open navigation menu' }))
    unmount()
    expect(document.body.style.overflow).toBe('')
  })

  it('leaves body scroll unlocked while the menu stays closed', () => {
    render(<Header />)
    expect(document.body.style.overflow).not.toBe('hidden')
  })
})
