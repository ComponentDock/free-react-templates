import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the brand logo and navigation links', () => {
    render(<Navbar />)

    expect(screen.getAllByText('Oraxol').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('link', { name: 'Work' })).toHaveAttribute('href', '#portfolio')
    expect(screen.getByRole('link', { name: 'Blog' })).toHaveAttribute('href', '#blog')
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '#team')
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact')
  })

  it('includes a dark mode toggle button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /dark mode/i })).toBeInTheDocument()
  })

  it('toggles dark mode on click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    expect(document.documentElement.classList.contains('dark')).toBe(false)

    await user.click(screen.getByRole('button', { name: /dark mode/i }))
    expect(document.documentElement.classList.contains('dark')).toBe(true)

    await user.click(screen.getByRole('button', { name: /light mode/i }))
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('cleans up dark class on unmount', async () => {
    const user = userEvent.setup()
    const { unmount } = render(<Navbar />)

    await user.click(screen.getByRole('button', { name: /dark mode/i }))
    expect(document.documentElement.classList.contains('dark')).toBe(true)

    unmount()
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })
})
