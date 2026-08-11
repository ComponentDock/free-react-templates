import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Header } from './Header'
import { closeLabel, logoText, menuCloseLabel, menuTriggerLabel, navLabel } from '../data'

describe('Header', () => {
  it('renders the white logo wordmark and the hamburger toggle', () => {
    render(<Header />)
    const logo = screen.getByRole('link', { name: logoText })
    expect(logo).toHaveAttribute('href', '#')
    expect(logo).toHaveClass('text-white')

    const toggle = screen.getByRole('button', { name: menuTriggerLabel })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(toggle).toHaveAttribute('aria-controls', 'clamor-off-canvas')
  })

  it('opens the off-canvas menu on toggle and closes it again', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: menuTriggerLabel }))
    expect(screen.getByRole('navigation', { name: navLabel })).toBeInTheDocument()
    const toggle = screen.getByRole('button', { name: menuCloseLabel })
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    // Close via the off-canvas panel's own close button (exercises onClose).
    await user.click(screen.getByRole('button', { name: closeLabel }))
    expect(screen.queryByRole('navigation', { name: navLabel })).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: menuTriggerLabel })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })
})
