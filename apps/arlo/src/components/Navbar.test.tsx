import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the site name and section links', () => {
    render(<Navbar />)
    expect(screen.getAllByRole('link', { name: /Arlo/i }).length).toBeGreaterThanOrEqual(1)
    for (const label of ['About', 'Skills', 'Projects', 'Experience', 'Contact']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('toggles dark mode on the document root', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /switch to dark mode/i })
    expect(document.documentElement.classList.contains('dark')).toBe(false)

    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(screen.getByRole('button', { name: /switch to light mode/i })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /switch to light mode/i }))
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('hides the mobile menu initially and toggles it open/closed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: /open menu/i })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(document.getElementById('mobile-menu')).toHaveClass('hidden')

    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(document.getElementById('mobile-menu')).not.toHaveClass('hidden')

    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(document.getElementById('mobile-menu')).toHaveClass('hidden')
  })

  it('closes the mobile menu when a mobile link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const projectLinks = screen.getAllByRole('link', { name: 'Projects' })
    const mobileLink = projectLinks[projectLinks.length - 1]!
    await user.click(mobileLink)
    expect(document.getElementById('mobile-menu')).toHaveClass('hidden')
  })
})
