import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'
import { navLinks } from '../data'

describe('Navbar', () => {
  it('renders the brand, all seven links and the membership CTA', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Kinesis Crossfit/i })).toBeInTheDocument()
    for (const link of navLinks) {
      expect(screen.getByRole('link', { name: link.label })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Become A Member' })).toBeInTheDocument()
  })

  it('opens and closes the mobile menu through the toggle', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('button', { name: 'Close menu' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link inside it is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))

    const about = screen.getAllByRole('link', { name: 'About' })[1]!
    // Neutralize jsdom hash-navigation so the React onClick still fires.
    about.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(about)

    expect(screen.queryByRole('button', { name: 'Close menu' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when the mobile CTA is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))

    const cta = screen.getAllByRole('link', { name: 'Become A Member' })[1]!
    cta.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(cta)

    expect(screen.queryByRole('button', { name: 'Close menu' })).not.toBeInTheDocument()
  })
})
