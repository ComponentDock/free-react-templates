import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Layout } from './Layout'

describe('Layout toggle', () => {
  it('hides the sidebar off-canvas by default on mobile and toggles it', async () => {
    const user = userEvent.setup()
    render(<Layout />)
    const toggle = screen.getByRole('button', { name: /toggle sidebar/i })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    const sidebar = document.getElementById('memoir-sidebar')!
    expect(sidebar.className).toContain('-translate-x-full')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(sidebar.className).not.toContain('-translate-x-full')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(sidebar.className).toContain('-translate-x-full')
  })

  it('closes the sidebar when the Escape key is pressed', async () => {
    const user = userEvent.setup()
    render(<Layout />)
    await user.click(screen.getByRole('button', { name: /toggle sidebar/i }))
    expect(screen.getByRole('button', { name: /toggle sidebar/i })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    await user.keyboard('{Escape}')
    expect(screen.getByRole('button', { name: /toggle sidebar/i })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('ignores other keys while the sidebar is open', async () => {
    const user = userEvent.setup()
    render(<Layout />)
    await user.click(screen.getByRole('button', { name: /toggle sidebar/i }))
    await user.keyboard('a')
    expect(screen.getByRole('button', { name: /toggle sidebar/i })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
  })
})
