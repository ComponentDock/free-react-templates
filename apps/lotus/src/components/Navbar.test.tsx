import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { within } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand wordmark linking to the page top', () => {
    render(<Navbar />)
    const brand = screen.getByRole('link', { name: 'Lotus' })
    expect(brand).toHaveAttribute('href', '#home')
  })

  it('opens the off-canvas nav with all links and Home marked active', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const nav = screen.getByRole('navigation', { name: 'Primary' })
    for (const label of [
      'Home',
      'Classes',
      'Trainer',
      'Timetable',
      'About us',
      'Blog',
      'Contact',
    ]) {
      expect(within(nav).getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(within(nav).getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page')
    expect(document.body.style.overflow).toBe('hidden')
  })

  it('closes when the toggle is clicked again and restores scroll', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Primary' })).not.toBeInTheDocument()
    expect(document.body.style.overflow).toBe('')
  })

  it('closes when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.click(screen.getByRole('link', { name: 'Classes' }))
    expect(screen.queryByRole('navigation', { name: 'Primary' })).not.toBeInTheDocument()
  })

  it('closes on Escape', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    fireEvent.keyDown(window, { key: 'Escape' })
    expect(screen.queryByRole('navigation', { name: 'Primary' })).not.toBeInTheDocument()
  })

  it('ignores other keys while the menu is open', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    fireEvent.keyDown(window, { key: 'Enter' })
    expect(screen.getByRole('navigation', { name: 'Primary' })).toBeInTheDocument()
  })

  it('closes when the backdrop is clicked', async () => {
    const user = userEvent.setup()
    const { container } = render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const backdrop = container.querySelector('div[aria-hidden="true"]')
    expect(backdrop).not.toBeNull()
    fireEvent.click(backdrop as HTMLElement)
    expect(screen.queryByRole('navigation', { name: 'Primary' })).not.toBeInTheDocument()
  })
})
