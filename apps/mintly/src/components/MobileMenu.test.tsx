import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { MobileMenu } from './MobileMenu'
import { navLinks } from '../data'

describe('MobileMenu', () => {
  it('lists every navigation link', () => {
    render(<MobileMenu onClose={vi.fn()} />)

    for (const link of navLinks) {
      expect(screen.getByRole('link', { name: link.label })).toHaveAttribute('href', link.href)
    }
  })

  it('closes the menu when a link is clicked', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<MobileMenu onClose={onClose} />)

    await user.click(screen.getByRole('link', { name: 'Departments' }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('closes the menu via the close button', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<MobileMenu onClose={onClose} />)

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })
})
