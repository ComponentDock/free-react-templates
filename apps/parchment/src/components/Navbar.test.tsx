import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import { navLabel, navSections } from '../data'

describe('Navbar', () => {
  it('renders the desktop nav with all top-level sections and the current link', () => {
    render(<Navbar menuOpen={false} />)
    const nav = screen.getByRole('navigation', { name: navLabel })
    expect(nav).toBeInTheDocument()

    for (const section of navSections) {
      expect(screen.getAllByText(section.label).length).toBeGreaterThan(0)
    }

    const home = screen.getByRole('link', { name: 'Home' })
    expect(home).toHaveAttribute('aria-current', 'page')
    expect(screen.getByRole('link', { name: 'Styles' })).not.toHaveAttribute('aria-current')
  })

  it('opens and closes a dropdown via its toggle button', async () => {
    const user = userEvent.setup()
    render(<Navbar menuOpen={false} />)

    const toggle = screen.getByRole('button', { name: /Categories/ })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(toggle).toHaveAttribute('aria-haspopup', 'true')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('link', { name: 'Lifestyle' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Work' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Video Post' })).toBeInTheDocument()

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('renders the mobile full-screen panel only while menuOpen', () => {
    const { rerender } = render(<Navbar menuOpen={false} />)
    // Desktop nav only.
    expect(screen.getAllByRole('navigation', { name: navLabel })).toHaveLength(1)

    rerender(<Navbar menuOpen />)
    // Desktop nav + mobile panel.
    expect(screen.getAllByRole('navigation', { name: navLabel })).toHaveLength(2)
    // The mobile panel adds a second copy of the dropdown children.
    expect(screen.getAllByRole('link', { name: 'Lifestyle' })).toHaveLength(2)

    rerender(<Navbar menuOpen={false} />)
    expect(screen.getAllByRole('navigation', { name: navLabel })).toHaveLength(1)
  })
})
