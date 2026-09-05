import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { NestedDropdown } from './NestedDropdown'

describe('NestedDropdown', () => {
  it('renders the toggle button', () => {
    render(<NestedDropdown />)
    expect(screen.getByRole('button', { name: 'Dropdown' })).toBeInTheDocument()
  })

  it('toggle has aria-haspopup', () => {
    render(<NestedDropdown />)
    expect(screen.getByRole('button', { name: 'Dropdown' })).toHaveAttribute(
      'aria-haspopup',
      'true',
    )
  })

  it('toggle has aria-expanded false initially', () => {
    render(<NestedDropdown />)
    expect(screen.getByRole('button', { name: 'Dropdown' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('menu is not visible initially', () => {
    render(<NestedDropdown />)
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('opens menu on toggle click', async () => {
    const user = userEvent.setup()
    render(<NestedDropdown />)
    await user.click(screen.getByRole('button', { name: 'Dropdown' }))
    expect(screen.getByRole('menu')).toBeInTheDocument()
  })

  it('toggle has aria-expanded true when menu is open', async () => {
    const user = userEvent.setup()
    render(<NestedDropdown />)
    await user.click(screen.getByRole('button', { name: 'Dropdown' }))
    expect(screen.getByRole('button', { name: 'Dropdown' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
  })

  it('shows top-level menu items', async () => {
    const user = userEvent.setup()
    render(<NestedDropdown />)
    await user.click(screen.getByRole('button', { name: 'Dropdown' }))
    expect(screen.getByRole('menuitem', { name: /Profile/ })).toBeInTheDocument()
    expect(screen.getByRole('menuitem', { name: /Settings/ })).toBeInTheDocument()
    expect(screen.getByRole('menuitem', { name: /Sign out/ })).toBeInTheDocument()
  })

  it('shows submenu items when parent is clicked', async () => {
    const user = userEvent.setup()
    render(<NestedDropdown />)
    await user.click(screen.getByRole('button', { name: 'Dropdown' }))
    // Profile has a submenu — click to expand
    await user.click(screen.getByRole('menuitem', { name: /Profile/ }))
    expect(screen.getByRole('menuitem', { name: 'Edit profile' })).toBeInTheDocument()
    expect(screen.getByRole('menuitem', { name: 'Change password' })).toBeInTheDocument()
  })

  it('does not close menu on non-Escape key', async () => {
    const user = userEvent.setup()
    render(<NestedDropdown />)
    await user.click(screen.getByRole('button', { name: 'Dropdown' }))
    expect(screen.getByRole('menu')).toBeInTheDocument()
    await user.keyboard('{ArrowDown}')
    expect(screen.getByRole('menu')).toBeInTheDocument()
  })

  it('closes menu on Escape', async () => {
    const user = userEvent.setup()
    render(<NestedDropdown />)
    await user.click(screen.getByRole('button', { name: 'Dropdown' }))
    expect(screen.getByRole('menu')).toBeInTheDocument()
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('closes menu when clicking outside', async () => {
    const user = userEvent.setup()
    render(
      <div>
        <NestedDropdown />
        <button>Outside</button>
      </div>,
    )
    await user.click(screen.getByRole('button', { name: 'Dropdown' }))
    expect(screen.getByRole('menu')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Outside' }))
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('closes menu when toggle is clicked again', async () => {
    const user = userEvent.setup()
    render(<NestedDropdown />)
    const toggle = screen.getByRole('button', { name: 'Dropdown' })
    await user.click(toggle)
    expect(screen.getByRole('menu')).toBeInTheDocument()
    await user.click(toggle)
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('closes all menus on click outside after submenu opened', async () => {
    const user = userEvent.setup()
    render(
      <div>
        <NestedDropdown />
        <button>Outside</button>
      </div>,
    )
    await user.click(screen.getByRole('button', { name: 'Dropdown' }))
    await user.click(screen.getByRole('menuitem', { name: /Profile/ }))
    expect(screen.getByRole('menuitem', { name: 'Edit profile' })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Outside' }))
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('collapses submenu when parent is clicked again', async () => {
    const user = userEvent.setup()
    render(<NestedDropdown />)
    await user.click(screen.getByRole('button', { name: 'Dropdown' }))
    // Expand Profile submenu
    await user.click(screen.getByRole('menuitem', { name: /Profile/ }))
    expect(screen.getByRole('menuitem', { name: 'Edit profile' })).toBeInTheDocument()
    // Collapse Profile submenu
    await user.click(screen.getByRole('menuitem', { name: /Profile/ }))
    expect(screen.queryByRole('menuitem', { name: 'Edit profile' })).not.toBeInTheDocument()
  })

  it('shows divider between menu groups', async () => {
    const user = userEvent.setup()
    const { container } = render(<NestedDropdown />)
    await user.click(screen.getByRole('button', { name: 'Dropdown' }))
    const dividers = container.querySelectorAll('[role="menu"] hr')
    expect(dividers.length).toBeGreaterThanOrEqual(1)
  })
})
