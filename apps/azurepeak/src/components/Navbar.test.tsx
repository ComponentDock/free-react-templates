import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo and desktop links', () => {
    render(<Navbar dark={false} toggleDark={vi.fn()} />)
    expect(screen.getByRole('link', { name: 'AzurePeak' })).toHaveAttribute('href', '#')
    for (const label of ['Rooms', 'Amenities', 'Dining', 'Gallery', 'Testimonials', 'FAQ']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders Book Now buttons', () => {
    render(<Navbar dark={false} toggleDark={vi.fn()} />)
    const bookButtons = screen.getAllByRole('link', { name: 'Book Now' })
    expect(bookButtons.length).toBeGreaterThanOrEqual(1)
  })

  it('hides the mobile menu initially and toggles it open/closed', async () => {
    const user = userEvent.setup()
    render(<Navbar dark={false} toggleDark={vi.fn()} />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(document.getElementById('mobile-menu')).toHaveClass('hidden')

    await user.click(toggle)
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(document.getElementById('mobile-menu')).not.toHaveClass('hidden')

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(document.getElementById('mobile-menu')).toHaveClass('hidden')
  })

  it('closes the mobile menu when a mobile link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar dark={false} toggleDark={vi.fn()} />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const galleryLinks = screen.getAllByRole('link', { name: 'Gallery' })
    const mobileLink = galleryLinks[galleryLinks.length - 1]!
    await user.click(mobileLink)
    expect(document.getElementById('mobile-menu')).toHaveClass('hidden')
  })

  it('calls toggleDark when dark mode button is clicked', async () => {
    const user = userEvent.setup()
    const toggleDark = vi.fn()
    render(<Navbar dark={false} toggleDark={toggleDark} />)
    const darkToggles = screen.getAllByRole('button', { name: 'Switch to dark mode' })
    expect(darkToggles.length).toBeGreaterThanOrEqual(1)
    await user.click(darkToggles[0]!)
    expect(toggleDark).toHaveBeenCalledTimes(1)
  })

  it('shows sun icon when dark mode is active', () => {
    render(<Navbar dark={true} toggleDark={vi.fn()} />)
    const lightToggles = screen.getAllByRole('button', { name: 'Switch to light mode' })
    expect(lightToggles.length).toBeGreaterThanOrEqual(1)
  })
})
