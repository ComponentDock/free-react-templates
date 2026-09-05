import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { DropdownButton } from './DropdownButton'

describe('DropdownButton', () => {
  const items = ['Action', 'Another action', 'Something else here', '---', 'Separated link']

  it('renders the button with label', () => {
    render(
      <DropdownButton
        label="Dropdown"
        items={items}
        isOpen={false}
        onToggle={vi.fn()}
        onClose={vi.fn()}
        direction="dropdown"
      />,
    )
    expect(screen.getByRole('button', { name: 'Dropdown' })).toBeInTheDocument()
  })

  it('calls onToggle when button is clicked', async () => {
    const onToggle = vi.fn()
    const user = userEvent.setup()
    render(
      <DropdownButton
        label="Dropdown"
        items={items}
        isOpen={false}
        onToggle={onToggle}
        onClose={vi.fn()}
        direction="dropdown"
      />,
    )
    await user.click(screen.getByRole('button', { name: 'Dropdown' }))
    expect(onToggle).toHaveBeenCalledTimes(1)
  })

  it('shows menu when isOpen is true', () => {
    render(
      <DropdownButton
        label="Dropdown"
        items={items}
        isOpen={true}
        onToggle={vi.fn()}
        onClose={vi.fn()}
        direction="dropdown"
      />,
    )
    expect(screen.getByRole('menu')).toBeInTheDocument()
    expect(screen.getByRole('menuitem', { name: 'Action' })).toBeInTheDocument()
    expect(screen.getByRole('menuitem', { name: 'Another action' })).toBeInTheDocument()
  })

  it('does not show menu when isOpen is false', () => {
    render(
      <DropdownButton
        label="Dropdown"
        items={items}
        isOpen={false}
        onToggle={vi.fn()}
        onClose={vi.fn()}
        direction="dropdown"
      />,
    )
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('calls onClose when a menu item is clicked', async () => {
    const onClose = vi.fn()
    const user = userEvent.setup()
    render(
      <DropdownButton
        label="Dropdown"
        items={items}
        isOpen={true}
        onToggle={vi.fn()}
        onClose={onClose}
        direction="dropdown"
      />,
    )
    await user.click(screen.getByRole('menuitem', { name: 'Action' }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('renders split variant with two buttons', () => {
    render(
      <DropdownButton
        label="Split Dropdown"
        items={items}
        isOpen={false}
        onToggle={vi.fn()}
        onClose={vi.fn()}
        direction="dropdown"
        split
      />,
    )
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBe(2)
    expect(screen.getByRole('button', { name: 'Toggle Split Dropdown' })).toBeInTheDocument()
  })

  it('renders divider separator in menu', () => {
    render(
      <DropdownButton
        label="Dropdown"
        items={items}
        isOpen={true}
        onToggle={vi.fn()}
        onClose={vi.fn()}
        direction="dropdown"
      />,
    )
    expect(screen.getByRole('menuitem', { name: 'Separated link' })).toBeInTheDocument()
  })

  it('applies dropup positioning class', () => {
    render(
      <DropdownButton
        label="Dropup"
        items={items}
        isOpen={true}
        onToggle={vi.fn()}
        onClose={vi.fn()}
        direction="dropup"
      />,
    )
    const menu = screen.getByRole('menu')
    expect(menu.className).toContain('bottom-full')
  })

  it('applies dropright positioning class', () => {
    render(
      <DropdownButton
        label="Dropright"
        items={items}
        isOpen={true}
        onToggle={vi.fn()}
        onClose={vi.fn()}
        direction="dropright"
      />,
    )
    const menu = screen.getByRole('menu')
    expect(menu.className).toContain('left-full')
  })

  it('applies dropleft positioning class', () => {
    render(
      <DropdownButton
        label="Dropleft"
        items={items}
        isOpen={true}
        onToggle={vi.fn()}
        onClose={vi.fn()}
        direction="dropleft"
      />,
    )
    const menu = screen.getByRole('menu')
    expect(menu.className).toContain('right-full')
  })

  it('sets aria-expanded on toggle button', () => {
    render(
      <DropdownButton
        label="Dropdown"
        items={items}
        isOpen={true}
        onToggle={vi.fn()}
        onClose={vi.fn()}
        direction="dropdown"
      />,
    )
    expect(screen.getByRole('button', { name: 'Dropdown' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
  })

  it('sets aria-haspopup on toggle button', () => {
    render(
      <DropdownButton
        label="Dropdown"
        items={items}
        isOpen={false}
        onToggle={vi.fn()}
        onClose={vi.fn()}
        direction="dropdown"
      />,
    )
    expect(screen.getByRole('button', { name: 'Dropdown' })).toHaveAttribute(
      'aria-haspopup',
      'true',
    )
  })

  it('sets aria-label on split caret button', () => {
    render(
      <DropdownButton
        label="Split Dropup"
        items={items}
        isOpen={false}
        onToggle={vi.fn()}
        onClose={vi.fn()}
        direction="dropup"
        split
      />,
    )
    expect(screen.getByRole('button', { name: 'Toggle Split Dropup' })).toHaveAttribute(
      'aria-label',
      'Toggle Split Dropup',
    )
  })

  it('calls onClose when a split menu item is clicked', async () => {
    const onClose = vi.fn()
    const user = userEvent.setup()
    render(
      <DropdownButton
        label="Split Dropdown"
        items={items}
        isOpen={true}
        onToggle={vi.fn()}
        onClose={onClose}
        direction="dropdown"
        split
      />,
    )
    await user.click(screen.getByRole('menuitem', { name: 'Action' }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('shows split menu with divider', () => {
    render(
      <DropdownButton
        label="Split Dropdown"
        items={items}
        isOpen={true}
        onToggle={vi.fn()}
        onClose={vi.fn()}
        direction="dropdown"
        split
      />,
    )
    expect(screen.getByRole('menuitem', { name: 'Separated link' })).toBeInTheDocument()
  })

  it('focuses first menu item when opened', () => {
    render(
      <DropdownButton
        label="Dropdown"
        items={items}
        isOpen={true}
        onToggle={vi.fn()}
        onClose={vi.fn()}
        direction="dropdown"
      />,
    )
    const firstItem = screen.getByRole('menuitem', { name: 'Action' })
    expect(firstItem).toHaveFocus()
  })

  it('does not focus when closed', () => {
    render(
      <DropdownButton
        label="Dropdown"
        items={items}
        isOpen={false}
        onToggle={vi.fn()}
        onClose={vi.fn()}
        direction="dropdown"
      />,
    )
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })
})
