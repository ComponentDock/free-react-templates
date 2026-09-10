import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand and navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Brasserie' })).toBeInTheDocument()
    const primaryNav = screen.getByRole('navigation', { name: 'Primary' })
    for (const label of ['Home', 'About', 'Menu', 'Awards', 'Testimonials', 'Reservation']) {
      expect(within(primaryNav).getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('toggles mobile menu open and closed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toHaveClass('block')

    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toHaveClass('hidden')
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: /open menu/i }))
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toHaveClass('block')

    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    await user.click(within(mobileNav).getByRole('link', { name: 'About' }))
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toHaveClass('hidden')
  })
})
