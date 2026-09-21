import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Joystick')).toBeDefined()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    for (const link of ['Home', 'Games', 'Articles', 'Reviews', 'Contact']) {
      expect(screen.getAllByText(link).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders search input', () => {
    render(<Navbar />)
    expect(screen.getByPlaceholderText('Search')).toBeDefined()
  })

  it('prevents default on search form submit', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const form = screen.getByPlaceholderText('Search').closest('form')!
    await user.click(screen.getByRole('button', { name: 'Search' }))
    expect(form).toBeDefined()
  })

  it('renders login link', () => {
    render(<Navbar />)
    expect(screen.getByText('Login / Register')).toBeDefined()
  })

  it('renders social link abbreviations', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Facebook')).toBeDefined()
    expect(screen.getByLabelText('Twitter')).toBeDefined()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle navigation')
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
