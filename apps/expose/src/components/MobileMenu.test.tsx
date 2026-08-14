import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MobileMenu } from './MobileMenu'
import { NAV_LINKS, SOCIAL_LINKS } from '../data'

describe('MobileMenu', () => {
  it('renders the 70px top bar with logo and a collapsed hamburger toggle', () => {
    render(<MobileMenu />)

    expect(screen.getByRole('link', { name: 'Expose' })).toHaveAttribute('href', '#')
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('opens the white slide-in panel with nav links and social icons', async () => {
    const user = userEvent.setup()
    render(<MobileMenu />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)

    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(toggle).toHaveAccessibleName('Close menu')
    const panel = screen.getByRole('dialog', { name: 'Mobile navigation' })
    for (const link of NAV_LINKS) {
      expect(within(panel).getByRole('link', { name: link.label })).toBeInTheDocument()
    }
    for (const { label } of SOCIAL_LINKS) {
      expect(within(panel).getByRole('link', { name: label })).toBeInTheDocument()
    }
    const home = within(panel).getByRole('link', { name: 'Home' })
    expect(home).toHaveClass('text-brand')
  })

  it('closes the panel again via the toggle', async () => {
    const user = userEvent.setup()
    render(<MobileMenu />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)
    expect(screen.getByRole('dialog', { name: 'Mobile navigation' })).toBeInTheDocument()

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the panel on Escape', async () => {
    const user = userEvent.setup()
    render(<MobileMenu />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('dialog', { name: 'Mobile navigation' })).toBeInTheDocument()

    await user.keyboard('{Escape}')
    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('ignores other keys while the panel is open', async () => {
    const user = userEvent.setup()
    render(<MobileMenu />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.keyboard('a')

    expect(screen.getByRole('dialog', { name: 'Mobile navigation' })).toBeInTheDocument()
  })

  it('closes the panel via its close button', async () => {
    const user = userEvent.setup()
    render(<MobileMenu />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const panel = screen.getByRole('dialog', { name: 'Mobile navigation' })
    await user.click(within(panel).getByRole('button', { name: 'Close menu' }))

    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })
})
