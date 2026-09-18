import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo and navigation links', () => {
    render(<Navbar />)
    expect(screen.getAllByText('Lodge').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('link', { name: /home/i })).toBeDefined()
    expect(screen.getByRole('link', { name: /about/i })).toBeDefined()
    expect(screen.getByRole('link', { name: /rooms/i })).toBeDefined()
    expect(screen.getByRole('link', { name: /facilities/i })).toBeDefined()
    expect(screen.getByRole('link', { name: /news/i })).toBeDefined()
    expect(screen.getByRole('link', { name: /contact/i })).toBeDefined()
  })

  it('displays the address', () => {
    render(<Navbar />)
    expect(screen.getByText(/1525 Boring Lane/)).toBeDefined()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeDefined()
    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.getByRole('button', { name: /open menu/i })).toBeDefined()
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeDefined()
    // Click a mobile nav link (the one inside the mobile nav)
    const mobileLinks = screen.getAllByRole('link', { name: /home/i })
    // The last one is the mobile nav link
    await user.click(mobileLinks[mobileLinks.length - 1]!)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeDefined()
  })

  it('shows dropdown on facilities hover', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const facilities = screen.getByRole('link', { name: /facilities/i })
    await user.hover(facilities)
    expect(screen.getByText('Junior Suite')).toBeDefined()
    expect(screen.getByText('Double Room')).toBeDefined()
  })

  it('hides dropdown on mouse leave', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const facilities = screen.getByRole('link', { name: /facilities/i })
    await user.hover(facilities)
    expect(screen.getByText('Junior Suite')).toBeDefined()
    await user.unhover(facilities)
    expect(screen.queryByText('Junior Suite')).toBeNull()
  })
})
