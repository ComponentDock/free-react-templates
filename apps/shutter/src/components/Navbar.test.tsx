import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand, desktop links, CTA, and controls', () => {
    render(<Navbar />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Shutter home' })).toBeInTheDocument()
    expect(screen.getByText('Shutter')).toBeInTheDocument()
    for (const label of [
      'Portfolio',
      'About',
      'Services',
      'Testimonials',
      'Pricing',
      'Blog',
      'Gallery',
      'Contact',
    ]) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThan(0)
    }
    expect(screen.getAllByRole('link', { name: 'Book a Session' }).length).toBeGreaterThan(0)
    expect(screen.getByRole('button', { name: /toggle dark mode/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
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
    const links = screen.getAllByRole('link', { name: 'Portfolio' })
    await user.click(links[links.length - 1]!)
    expect(document.getElementById('mobile-menu')).toHaveClass('hidden')
  })

  it('closes the mobile menu when the mobile CTA is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const ctas = screen.getAllByRole('link', { name: 'Book a Session' })
    await user.click(ctas[ctas.length - 1]!)
    expect(document.getElementById('mobile-menu')).toHaveClass('hidden')
  })

  it('toggles dark mode on the document root', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /toggle dark mode/i })
    expect(document.documentElement).not.toHaveClass('dark')
    await user.click(toggle)
    expect(document.documentElement).toHaveClass('dark')
    expect(screen.getByRole('button', { name: 'Switch to light mode' })).toBeInTheDocument()
    await user.click(toggle)
    expect(document.documentElement).not.toHaveClass('dark')
  })
})
