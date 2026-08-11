import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Rail } from './Rail'
import { logoLabel, menuCloseLabel, menuOpenLabel, scrollTopLabel, socialLinks } from '../data'

describe('Rail', () => {
  it('renders the logo, toggle, social stack, and scroll-to-top control', () => {
    render(<Rail open={false} onToggle={() => {}} />)

    expect(screen.getByRole('link', { name: logoLabel })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: menuOpenLabel })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    for (const social of socialLinks) {
      expect(screen.getByRole('link', { name: social.label })).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: scrollTopLabel })).toBeInTheDocument()
  })

  it('reflects the open state on the toggle', () => {
    render(<Rail open onToggle={() => {}} />)

    const toggle = screen.getByRole('button', { name: menuCloseLabel })
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
  })

  it('calls onToggle when the menu toggle is clicked', async () => {
    const onToggle = vi.fn()
    render(<Rail open={false} onToggle={onToggle} />)

    await userEvent.click(screen.getByRole('button', { name: menuOpenLabel }))

    expect(onToggle).toHaveBeenCalledTimes(1)
  })

  it('scrolls to the top when the caret is clicked', async () => {
    render(<Rail open={false} onToggle={() => {}} />)

    await userEvent.click(screen.getByRole('button', { name: scrollTopLabel }))

    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })
})
