import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'

describe('Header', () => {
  it('shows the site name, tagline, and hamburger control', () => {
    render(<Header onOpenMenu={() => {}} />)

    expect(screen.getByRole('link', { name: /Pulp\s*Magazine/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('fires the open handler when the hamburger is activated', async () => {
    const user = userEvent.setup()
    const onOpenMenu = vi.fn()
    render(<Header onOpenMenu={onOpenMenu} />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(onOpenMenu).toHaveBeenCalledTimes(1)
  })
})
