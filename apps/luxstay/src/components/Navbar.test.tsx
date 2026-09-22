import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />)
    expect(screen.getByText('LuxStay')).toBeInTheDocument()
  })

  it('renders all navigation items', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Rooms')).toBeInTheDocument()
    expect(screen.getByText('Dining & Bar')).toBeInTheDocument()
    expect(screen.getByText('Amenities')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle menu')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
  })

  it('shows rooms dropdown on hover', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const roomsItem = screen.getByText('Rooms')
    await user.hover(roomsItem)
    expect(screen.getByText('Suite')).toBeInTheDocument()
    expect(screen.getByText('Double Room')).toBeInTheDocument()
  })

  it('hides rooms dropdown on mouse leave', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const roomsItem = screen.getByText('Rooms')
    await user.hover(roomsItem)
    expect(screen.getByText('Suite')).toBeInTheDocument()
    await user.unhover(roomsItem)
    expect(screen.queryByText('Suite')).not.toBeInTheDocument()
  })

  it('closes mobile menu when item is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle menu')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    // Find the mobile nav list (the one that appears on mobile)
    const mobileNav = screen.getByRole('navigation').querySelector<HTMLElement>('ul.md\\:hidden')
    expect(mobileNav).toBeInTheDocument()

    // Click a link in the mobile menu
    const links = within(mobileNav!).getAllByRole('link')
    await user.click(links[0]!)

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
