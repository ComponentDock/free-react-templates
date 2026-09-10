import { describe, expect, it, vi } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo and desktop links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Proton' })).toHaveAttribute('href', '#home')
    for (const label of ['Home', 'About', 'Services', 'Gallery', 'Blog', 'Contact']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('starts transparent (no scrolled class)', () => {
    render(<Navbar />)
    const header = screen.getByRole('banner')
    expect(header.className).toContain('bg-transparent')
  })

  it('adds solid background on scroll', async () => {
    render(<Navbar />)
    const header = screen.getByRole('banner')
    await act(async () => {
      vi.spyOn(window, 'scrollY', 'get').mockReturnValue(100)
      window.dispatchEvent(new Event('scroll'))
    })
    expect(header.className).toContain('bg-proton-500')
    vi.restoreAllMocks()
  })

  it('hides the mobile menu initially and toggles it open/closed', async () => {
    const { default: userEvent } = await import('@testing-library/user-event')
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
    const { default: userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const galleryLinks = screen.getAllByRole('link', { name: 'Gallery' })
    const mobileLink = galleryLinks[galleryLinks.length - 1]!
    await user.click(mobileLink)
    expect(document.getElementById('mobile-menu')).toHaveClass('hidden')
  })
})
