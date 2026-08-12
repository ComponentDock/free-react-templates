import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

const desktopLabels = ['Home', 'About', 'Doctor', 'Treatments', 'Pricing', 'Blog', 'Contact']

describe('Navbar', () => {
  it('shows the desktop nav with links and a blue active link', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation', { name: 'Primary' })
    // The desktop list is display:none below lg — jsdom applies the injected
    // Tailwind CSS, so query with hidden: true to include it.
    for (const label of desktopLabels) {
      expect(within(nav).getByRole('link', { name: label, hidden: true })).toBeInTheDocument()
    }
    expect(within(nav).getByRole('link', { name: 'Home', hidden: true })).toHaveClass(
      'text-primary',
    )
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    // Desktop + mobile copies of every link are present while the menu is open.
    expect(screen.getAllByRole('link', { name: 'Contact', hidden: true })).toHaveLength(2)

    // Clicking the mobile (last) copy closes the menu.
    await user.click(screen.getAllByRole('link', { name: 'Pricing', hidden: true })[1]!)
    expect(screen.queryByRole('button', { name: 'Close menu' })).not.toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Pricing', hidden: true })).toHaveLength(1)

    // Reopen via the toggle and close it again.
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('button', { name: 'Close menu' })).not.toBeInTheDocument()
  })
})
