import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { MobileNav } from './MobileNav'
import { brandName, menuCloseLabel, menuOpenLabel, mobileNavLabel } from '../data'

describe('MobileNav', () => {
  it('starts closed with a hamburger toggle and an off-canvas drawer', () => {
    render(<MobileNav />)

    const toggle = screen.getByRole('button', { name: menuOpenLabel })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    const drawer = screen.getByRole('region', { name: mobileNavLabel })
    expect(drawer).toHaveClass('-translate-x-full')
    expect(within(drawer).getByRole('heading', { level: 1, name: brandName })).toBeInTheDocument()
    expect(within(drawer).getByRole('link', { name: 'Travel' })).toBeInTheDocument()
  })

  it('slides the drawer in and out when the toggle is activated', async () => {
    const user = userEvent.setup()
    render(<MobileNav />)

    const toggle = screen.getByRole('button', { name: menuOpenLabel })
    const drawer = screen.getByRole('region', { name: mobileNavLabel })

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(toggle).toHaveAttribute('aria-label', menuCloseLabel)
    expect(drawer).toHaveClass('translate-x-0')
    expect(drawer).not.toHaveClass('-translate-x-full')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(toggle).toHaveAttribute('aria-label', menuOpenLabel)
    expect(drawer).toHaveClass('-translate-x-full')
  })
})
