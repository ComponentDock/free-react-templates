import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NavBar } from './NavBar'
import { closeMenuLabel, dropdownPages, navItems, openMenuLabel } from '../data'

describe('NavBar', () => {
  it('shows the navy bar with all ten dropdown menu items', () => {
    render(<NavBar />)
    const nav = screen.getByRole('navigation', { name: 'Main' })
    expect(nav).toHaveClass('bg-nav')
    for (const item of navItems) {
      expect(screen.getAllByRole('link', { name: item }).length).toBeGreaterThan(0)
    }
  })

  it('opens a PAGE 1 / PAGE 2 dropdown per item', () => {
    render(<NavBar />)
    expect(screen.getAllByRole('link', { name: dropdownPages[0] })).toHaveLength(navItems.length)
    expect(screen.getAllByRole('link', { name: dropdownPages[1] })).toHaveLength(navItems.length)
  })

  it('toggles the mobile menu from the hamburger', async () => {
    const user = userEvent.setup()
    render(<NavBar />)
    const toggle = screen.getByRole('button', { name: openMenuLabel })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(screen.getByRole('button', { name: closeMenuLabel })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    // desktop + mobile copies of each item are now in the document
    expect(screen.getAllByRole('link', { name: 'HOME' })).toHaveLength(2)

    await user.click(toggle)
    expect(screen.getByRole('button', { name: openMenuLabel })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    expect(screen.getAllByRole('link', { name: 'HOME' })).toHaveLength(1)
  })

  it('closes the mobile menu when a mobile link is clicked', async () => {
    const user = userEvent.setup()
    render(<NavBar />)
    await user.click(screen.getByRole('button', { name: openMenuLabel }))
    expect(screen.getAllByRole('link', { name: 'HOME' })).toHaveLength(2)

    const mobileHome = screen.getAllByRole('link', { name: 'HOME' }).at(-1)
    expect(mobileHome).toBeDefined()
    if (mobileHome) {
      await user.click(mobileHome)
    }
    expect(screen.getAllByRole('link', { name: 'HOME' })).toHaveLength(1)
  })

  it('closes the mobile menu when a mobile dropdown page link is clicked', async () => {
    const user = userEvent.setup()
    render(<NavBar />)
    await user.click(screen.getByRole('button', { name: openMenuLabel }))
    expect(screen.getAllByRole('link', { name: 'PAGE 1' })).toHaveLength(navItems.length * 2)

    const mobilePage = screen.getAllByRole('link', { name: 'PAGE 1' }).at(-1)
    expect(mobilePage).toBeDefined()
    if (mobilePage) {
      await user.click(mobilePage)
    }
    expect(screen.getAllByRole('link', { name: 'PAGE 1' })).toHaveLength(navItems.length)
  })
})
