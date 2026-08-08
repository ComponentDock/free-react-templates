import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the site name and section links', () => {
    render(<Navbar />)
    expect(screen.getByText('Schola')).toBeInTheDocument()
    for (const label of ['Courses', 'Categories', 'Instructors', 'Pricing', 'About']) {
      expect(screen.getAllByText(label).length).toBeGreaterThan(0)
    }
    expect(screen.getByText('Get Started')).toBeInTheDocument()
    expect(screen.getByText('Sign in')).toBeInTheDocument()
  })

  it('toggles the .dark class on the document root', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    await user.click(screen.getByRole('button', { name: /switch to dark mode/i }))
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    await user.click(screen.getByRole('button', { name: /switch to light mode/i }))
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    expect(mobileNav).toBeInTheDocument()
    await user.click(within(mobileNav).getByRole('link', { name: 'Courses' }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu via the sign-in and get-started links', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    await user.click(within(mobileNav).getByRole('link', { name: 'Sign in' }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    await user.click(
      within(screen.getByRole('navigation', { name: 'Mobile navigation' })).getByRole('link', {
        name: 'Get Started',
      }),
    )
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu via the close button', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
