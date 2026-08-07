import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the site name, section links, and the dark-mode toggle', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Catwalk/ })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '#about')
    expect(screen.getByRole('link', { name: 'Models' })).toHaveAttribute('href', '#models')
    expect(screen.getByRole('link', { name: 'Blog' })).toHaveAttribute('href', '#blog')
    expect(screen.getByRole('link', { name: 'Contact Us' })).toHaveAttribute('href', '#contact')
    expect(screen.getByRole('button', { name: 'Dark mode' })).toBeInTheDocument()
  })

  it('toggles dark mode on and off on the document root', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    expect(document.documentElement.classList.contains('dark')).toBe(false)

    await user.click(screen.getByRole('button', { name: 'Dark mode' }))
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(screen.getByRole('button', { name: 'Light mode' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Light mode' }))
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(screen.getByRole('button', { name: 'Dark mode' })).toBeInTheDocument()
  })

  it('removes the dark class from the document root on unmount', async () => {
    const user = userEvent.setup()
    const { unmount } = render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Dark mode' }))
    expect(document.documentElement.classList.contains('dark')).toBe(true)

    unmount()
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })
})
