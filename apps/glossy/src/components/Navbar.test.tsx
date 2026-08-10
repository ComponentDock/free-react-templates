import { afterEach, describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import { darkModeLabel, navItems } from '../data'

describe('Navbar', () => {
  afterEach(() => {
    document.documentElement.classList.remove('dark')
  })

  it('renders all nav links with Home active', () => {
    render(<Navbar />)
    for (const item of navItems) {
      expect(screen.getAllByRole('link', { name: item.label }).length).toBeGreaterThan(0)
    }
    expect(screen.getByRole('link', { name: 'Home' })).toHaveClass('text-brand')
  })

  it('shows the Blog dropdown links', () => {
    render(<Navbar />)
    expect(screen.getAllByRole('link', { name: 'Blog' }).length).toBeGreaterThan(0)
    expect(screen.getByRole('link', { name: 'Blog Details' })).toBeInTheDocument()
  })

  it('toggles the dark class on the document root', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: darkModeLabel })
    expect(toggle).toHaveAttribute('aria-pressed', 'false')
    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(toggle).toHaveAttribute('aria-pressed', 'true')
    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })
})
