import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the site name', () => {
    render(<Navbar />)
    expect(screen.getByText('Communique')).toBeInTheDocument()
  })

  it('renders the dark mode toggle button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /dark mode/i })).toBeInTheDocument()
  })

  it('toggles dark mode on click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /dark mode/i })
    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(screen.getByRole('button', { name: /light mode/i })).toBeInTheDocument()
  })

  it('toggles back to light mode', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /dark mode/i })
    await user.click(toggle)
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
