import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the amber wordmark and seven uppercase links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Amberline' })).toHaveAttribute('href', '#home')
    const main = screen.getByRole('navigation', { name: 'Main' })
    const links = within(main).getAllByRole('link')
    expect(links).toHaveLength(7)
    expect(links[0]).toHaveAttribute('aria-current', 'page')
    expect(links[1]).not.toHaveAttribute('aria-current')
    expect(links.map((link) => link.textContent)).toEqual([
      'Home',
      'About',
      'Services',
      'Projects',
      'Pricing',
      'Blog',
      'Contact',
    ])
  })

  it('opens and closes the mobile panel, closing it when a link is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('button', { name: 'Close menu' })).not.toBeInTheDocument()

    await user.click(toggle)
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    const panel = document.getElementById('mobile-menu')
    expect(panel).not.toBeNull()
    expect(within(panel as HTMLElement).getAllByRole('link')).toHaveLength(7)

    await user.click(within(panel as HTMLElement).getByRole('link', { name: 'Services' }))
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    expect(document.getElementById('mobile-menu')).toBeNull()
  })

  it('toggles the panel shut again through the close control', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(document.getElementById('mobile-menu')).toBeNull()
  })
})
