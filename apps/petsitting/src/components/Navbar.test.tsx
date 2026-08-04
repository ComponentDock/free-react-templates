import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the site name, section links, Get Started button, and the dark-mode toggle', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: /Petsitting/i })).toHaveAttribute('href', '#top')
    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument()
    for (const label of ['Home', 'About', 'Services', 'Gallery', 'Pricing', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Get Started' })).toHaveAttribute('href', '#pricing')
    expect(screen.getByRole('button', { name: 'Dark mode' })).toBeInTheDocument()
  })

  it('toggles dark mode on and off on the document root', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Dark mode' }))
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(screen.getByRole('button', { name: 'Light mode' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Light mode' }))
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })
})
