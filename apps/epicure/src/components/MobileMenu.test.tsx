import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { MobileMenu } from './MobileMenu'
import { navLinks } from '../data'

describe('MobileMenu', () => {
  it('renders a burger button with aria-expanded false', () => {
    render(<MobileMenu />)
    const burger = screen.getByRole('button', { name: 'Open menu' })
    expect(burger).toHaveAttribute('aria-expanded', 'false')
  })

  it('opens the off-canvas panel with the wordmark and links', async () => {
    const user = userEvent.setup()
    render(<MobileMenu />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))

    const dialog = screen.getByRole('dialog', { name: 'Mobile navigation' })
    expect(dialog).toBeInTheDocument()
    expect(screen.getByText('Epicure')).toBeInTheDocument()
    for (const link of navLinks) {
      expect(screen.getByRole('link', { name: link.label })).toHaveAttribute('href', link.href)
    }
  })

  it('closes the panel via the close button', async () => {
    const user = userEvent.setup()
    render(<MobileMenu />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes the panel via the backdrop', async () => {
    const user = userEvent.setup()
    render(<MobileMenu />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.click(screen.getByTestId('menu-backdrop'))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes the panel via the Escape key', async () => {
    const user = userEvent.setup()
    render(<MobileMenu />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('ignores other keys while the panel is open', async () => {
    const user = userEvent.setup()
    render(<MobileMenu />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.keyboard('{Enter}')
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('closes the panel after clicking a nav link', async () => {
    const user = userEvent.setup()
    render(<MobileMenu />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.click(screen.getByRole('link', { name: 'Our Menu' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
