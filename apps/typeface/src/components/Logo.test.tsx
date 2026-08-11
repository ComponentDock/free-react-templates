import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Logo } from './Logo'
import { menuCloseLabel, menuOpenLabel, siteName } from '../data'

describe('Logo', () => {
  it('renders the site name as a level-1 heading link', () => {
    render(<Logo menuOpen={false} onToggle={() => {}} />)
    expect(screen.getByRole('heading', { level: 1, name: siteName })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: siteName })).toHaveAttribute('href', '#')
  })

  it('toggles the hamburger and reports state to the parent', async () => {
    const user = userEvent.setup()
    const onToggle = vi.fn()
    const { rerender } = render(<Logo menuOpen={false} onToggle={onToggle} />)
    const toggle = screen.getByRole('button', { name: menuOpenLabel })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(toggle).toHaveAttribute('aria-controls', 'site-nav')

    await user.click(toggle)
    expect(onToggle).toHaveBeenCalledTimes(1)

    rerender(<Logo menuOpen={true} onToggle={onToggle} />)
    expect(screen.getByRole('button', { name: menuCloseLabel })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
  })
})
