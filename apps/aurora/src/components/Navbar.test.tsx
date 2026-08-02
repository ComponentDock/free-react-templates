import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo and desktop links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Aurora' })).toHaveAttribute('href', '#home')
    for (const label of ['Home', 'Arrivals', 'Gallery', 'Features', 'Contact']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('hides the mobile menu initially and toggles it open/closed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

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
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const galleryLinks = screen.getAllByRole('link', { name: 'Gallery' })
    const mobileLink = galleryLinks[galleryLinks.length - 1]!
    await user.click(mobileLink)
    expect(document.getElementById('mobile-menu')).toHaveClass('hidden')
  })
})
