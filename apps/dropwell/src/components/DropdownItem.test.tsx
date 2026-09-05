import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { DropdownItem } from './DropdownItem'

describe('DropdownItem', () => {
  const submenuItems = ['Edit profile', 'Change password', 'Preferences']

  it('renders the item label', () => {
    render(
      <ul>
        <DropdownItem label="Profile" />
      </ul>,
    )
    expect(screen.getByRole('menuitem', { name: 'Profile' })).toBeInTheDocument()
  })

  it('renders with chevron when hasSubmenu is true', () => {
    render(
      <ul>
        <DropdownItem label="Profile" hasSubmenu />
      </ul>,
    )
    const item = screen.getByRole('menuitem', { name: /Profile/ })
    expect(item.querySelector('svg')).toBeInTheDocument()
  })

  it('does not render chevron when hasSubmenu is false', () => {
    render(
      <ul>
        <DropdownItem label="Sign out" />
      </ul>,
    )
    const item = screen.getByRole('menuitem', { name: 'Sign out' })
    expect(item.querySelector('svg')).not.toBeInTheDocument()
  })

  it('renders submenu items when expanded', () => {
    render(
      <ul>
        <DropdownItem label="Profile" hasSubmenu submenuItems={submenuItems} />
      </ul>,
    )
    // Submenu items should be rendered since expanded defaults to true for testing
    expect(screen.getByRole('menuitem', { name: 'Edit profile' })).toBeInTheDocument()
    expect(screen.getByRole('menuitem', { name: 'Change password' })).toBeInTheDocument()
    expect(screen.getByRole('menuitem', { name: 'Preferences' })).toBeInTheDocument()
  })

  it('calls onClick when clicked', async () => {
    const onClick = vi.fn()
    const user = userEvent.setup()
    render(
      <ul>
        <DropdownItem label="Settings" onClick={onClick} />
      </ul>,
    )
    await user.click(screen.getByRole('menuitem', { name: 'Settings' }))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('calls onSubmenuToggle when parent with submenu is clicked', async () => {
    const onSubmenuToggle = vi.fn()
    const user = userEvent.setup()
    render(
      <ul>
        <DropdownItem
          label="Profile"
          hasSubmenu
          submenuItems={submenuItems}
          onSubmenuToggle={onSubmenuToggle}
        />
      </ul>,
    )
    await user.click(screen.getByRole('menuitem', { name: /Profile/ }))
    expect(onSubmenuToggle).toHaveBeenCalledTimes(1)
  })

  it('does not render submenu when not expanded', () => {
    render(
      <ul>
        <DropdownItem label="Profile" hasSubmenu submenuItems={submenuItems} expanded={false} />
      </ul>,
    )
    expect(screen.queryByRole('menuitem', { name: 'Edit profile' })).not.toBeInTheDocument()
  })

  it('renders divider when isDivider is true', () => {
    const { container } = render(
      <ul>
        <DropdownItem isDivider />
      </ul>,
    )
    const divider = container.querySelector('li hr')
    expect(divider).toBeInTheDocument()
  })
})
