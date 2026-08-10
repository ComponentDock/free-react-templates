import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'
import { brandName, menuCloseLabel, menuOpenLabel } from '../data'

describe('Header', () => {
  it('renders the site name as a link and the hamburger trigger', () => {
    render(<Header menuOpen={false} onToggleMenu={vi.fn()} />)

    expect(screen.getByRole('link', { name: brandName })).toHaveAttribute('href', '#top')
    const trigger = screen.getByRole('button', { name: menuOpenLabel })
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
  })

  it('reflects the open state on the trigger', () => {
    render(<Header menuOpen={true} onToggleMenu={vi.fn()} />)

    const trigger = screen.getByRole('button', { name: menuCloseLabel })
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
  })

  it('calls onToggleMenu when the trigger is pressed', async () => {
    const user = userEvent.setup()
    const onToggleMenu = vi.fn()
    render(<Header menuOpen={false} onToggleMenu={onToggleMenu} />)

    await user.click(screen.getByRole('button', { name: menuOpenLabel }))
    expect(onToggleMenu).toHaveBeenCalledTimes(1)
  })
})
