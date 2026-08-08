import { afterEach, describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  afterEach(() => {
    document.documentElement.classList.remove('dark')
  })

  it('renders the wordmark, links, CTA and dark-mode toggle', () => {
    render(<Navbar />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Podium home' })).toBeInTheDocument()
    expect(screen.getByText('Podium')).toBeInTheDocument()

    for (const label of ['Speakers', 'Schedule', 'Tickets', 'Sponsors', 'Venue']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThan(0)
    }

    expect(screen.getAllByRole('link', { name: 'Get Tickets' }).length).toBeGreaterThan(0)
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
    const links = screen.getAllByRole('link', { name: 'Speakers' })
    await user.click(links[links.length - 1]!)
    expect(document.getElementById('mobile-menu')).toHaveClass('hidden')
  })

  it('closes the mobile menu when the mobile CTA is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const ctas = screen.getAllByRole('link', { name: 'Get Tickets' })
    await user.click(ctas[ctas.length - 1]!)
    expect(document.getElementById('mobile-menu')).toHaveClass('hidden')
  })

  it('toggles the dark class on the document root', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    expect(document.documentElement).not.toHaveClass('dark')
    await user.click(screen.getByRole('button', { name: /toggle dark mode/i }))
    expect(document.documentElement).toHaveClass('dark')
    await user.click(screen.getByRole('button', { name: /switch to light mode/i }))
    expect(document.documentElement).not.toHaveClass('dark')
  })

  it('removes the dark class on unmount', () => {
    const { unmount } = render(<Navbar />)
    unmount()
    expect(document.documentElement).not.toHaveClass('dark')
  })

  it('cleans up the dark-mode effect when the toggle state changes', async () => {
    const user = userEvent.setup()
    const { unmount } = render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /toggle dark mode/i }))
    unmount()
    expect(document.documentElement).not.toHaveClass('dark')
    vi.restoreAllMocks()
  })
})
