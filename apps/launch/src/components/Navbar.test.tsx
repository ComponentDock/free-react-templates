import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the site name, section links, sign-in button, and dark-mode toggle', () => {
    render(<Navbar onSignIn={() => {}} />)

    expect(screen.getByRole('link', { name: 'Launch.' })).toBeInTheDocument()
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    for (const label of ['Home', 'Features', 'Pricing', 'Testimonials', 'About', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: 'Sign in' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Switch to dark mode' })).toBeInTheDocument()
  })

  it('toggles dark mode on and off on the document root', async () => {
    const user = userEvent.setup()
    render(<Navbar onSignIn={() => {}} />)

    const toggle = screen.getByRole('button', { name: 'Switch to dark mode' })
    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(screen.getByRole('button', { name: 'Switch to light mode' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Switch to light mode' }))
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('calls onSignIn when the Sign in button is pressed', async () => {
    const user = userEvent.setup()
    const onSignIn = vi.fn()
    render(<Navbar onSignIn={onSignIn} />)

    await user.click(screen.getByRole('button', { name: 'Sign in' }))
    expect(onSignIn).toHaveBeenCalledTimes(1)
  })
})
