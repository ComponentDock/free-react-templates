import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { SplitDropdown } from './SplitDropdown'

describe('SplitDropdown', () => {
  it('renders the hamburger toggle button', () => {
    render(<SplitDropdown />)
    expect(screen.getByRole('button', { name: 'Toggle navigation menu' })).toBeInTheDocument()
  })

  it('toggle has aria-haspopup', () => {
    render(<SplitDropdown />)
    expect(screen.getByRole('button', { name: 'Toggle navigation menu' })).toHaveAttribute(
      'aria-haspopup',
      'true',
    )
  })

  it('toggle has aria-expanded false initially', () => {
    render(<SplitDropdown />)
    expect(screen.getByRole('button', { name: 'Toggle navigation menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('menu is not visible initially', () => {
    render(<SplitDropdown />)
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('opens menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<SplitDropdown />)
    await user.click(screen.getByRole('button', { name: 'Toggle navigation menu' }))
    expect(screen.getByRole('menu')).toBeInTheDocument()
  })

  it('toggle has aria-expanded true when menu is open', async () => {
    const user = userEvent.setup()
    render(<SplitDropdown />)
    await user.click(screen.getByRole('button', { name: 'Toggle navigation menu' }))
    expect(screen.getByRole('button', { name: 'Toggle navigation menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
  })

  it('shows all 5 menu items with correct labels', async () => {
    const user = userEvent.setup()
    render(<SplitDropdown />)
    await user.click(screen.getByRole('button', { name: 'Toggle navigation menu' }))
    expect(screen.getByRole('menuitem', { name: /Home/ })).toBeInTheDocument()
    expect(screen.getByRole('menuitem', { name: /About/ })).toBeInTheDocument()
    expect(screen.getByRole('menuitem', { name: /Services/ })).toBeInTheDocument()
    expect(screen.getByRole('menuitem', { name: /Blog/ })).toBeInTheDocument()
    expect(screen.getByRole('menuitem', { name: /Contact/ })).toBeInTheDocument()
  })

  it('each menu item has an arrow icon', async () => {
    const user = userEvent.setup()
    const { container } = render(<SplitDropdown />)
    await user.click(screen.getByRole('button', { name: 'Toggle navigation menu' }))
    const menuItems = container.querySelectorAll('[role="menuitem"]')
    expect(menuItems.length).toBe(5)
    for (const item of menuItems) {
      const svg = item.querySelector('svg')
      expect(svg).toBeInTheDocument()
    }
  })

  it('closes menu on outside click', async () => {
    const user = userEvent.setup()
    render(
      <div>
        <SplitDropdown />
        <button>Outside</button>
      </div>,
    )
    await user.click(screen.getByRole('button', { name: 'Toggle navigation menu' }))
    expect(screen.getByRole('menu')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Outside' }))
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('closes menu when toggle is clicked again', async () => {
    const user = userEvent.setup()
    render(<SplitDropdown />)
    const toggle = screen.getByRole('button', { name: 'Toggle navigation menu' })
    await user.click(toggle)
    expect(screen.getByRole('menu')).toBeInTheDocument()
    await user.click(toggle)
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('does not close menu on non-Escape key', async () => {
    const user = userEvent.setup()
    render(<SplitDropdown />)
    await user.click(screen.getByRole('button', { name: 'Toggle navigation menu' }))
    expect(screen.getByRole('menu')).toBeInTheDocument()
    await user.keyboard('{ArrowDown}')
    expect(screen.getByRole('menu')).toBeInTheDocument()
  })

  it('closes menu on Escape key', async () => {
    const user = userEvent.setup()
    render(<SplitDropdown />)
    await user.click(screen.getByRole('button', { name: 'Toggle navigation menu' }))
    expect(screen.getByRole('menu')).toBeInTheDocument()
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('closes menu when a menu item is clicked', async () => {
    const user = userEvent.setup()
    render(<SplitDropdown />)
    await user.click(screen.getByRole('button', { name: 'Toggle navigation menu' }))
    expect(screen.getByRole('menu')).toBeInTheDocument()
    await user.click(screen.getByRole('menuitem', { name: /Home/ }))
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('renders the brand name "Splash"', () => {
    render(<SplitDropdown />)
    expect(screen.getByText('Splash')).toBeInTheDocument()
  })

  it('brand name is uppercase', () => {
    render(<SplitDropdown />)
    const brand = screen.getByText('Splash')
    expect(brand).toHaveClass('uppercase')
  })
})
