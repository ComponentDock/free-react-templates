import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name and home link', () => {
    render(<Navbar />)

    expect(screen.getByText('Lenslide')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/')
  })

  it('toggles dark mode on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: /dark mode/i })
    expect(toggle).toBeInTheDocument()

    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(screen.getByRole('button', { name: /light mode/i })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /light mode/i }))
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })
})
