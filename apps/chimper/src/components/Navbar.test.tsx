import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the site name, section links, services dropdown, and dark-mode toggle', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Chimper' })).toHaveAttribute('href', '#home')

    for (const label of ['Home', 'Work', 'About', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }

    const servicesButton = screen.getByRole('button', { name: 'Services' })
    expect(servicesButton).toHaveAttribute('aria-expanded', 'false')

    await user.click(servicesButton)
    expect(servicesButton).toHaveAttribute('aria-expanded', 'true')
    for (const service of [
      'Web Applications',
      'WordPress Dev',
      'Mobile Applications',
      'eCommerce',
    ]) {
      expect(screen.getByRole('link', { name: service })).toBeInTheDocument()
    }

    expect(screen.getByRole('button', { name: 'Switch to dark mode' })).toBeInTheDocument()
  })

  it('toggles the dark class on the document root when the toggle is pressed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    expect(document.documentElement.classList.contains('dark')).toBe(false)

    await user.click(screen.getByRole('button', { name: 'Switch to dark mode' }))
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(screen.getByRole('button', { name: 'Switch to light mode' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Switch to light mode' }))
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })
})
