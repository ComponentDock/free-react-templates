import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { DropdownColumn } from './DropdownColumn'

describe('DropdownColumn', () => {
  const items = ['Action', 'Another action', 'Something else here', '---', 'Separated link']

  it('renders the column title', () => {
    render(<DropdownColumn title="Dropdown Variation" items={items} direction="dropdown" />)
    expect(screen.getByText('Dropdown Variation')).toBeInTheDocument()
  })

  it('renders regular and split dropdown buttons', () => {
    render(<DropdownColumn title="Dropdown Variation" items={items} direction="dropdown" />)
    const buttons = screen.getAllByRole('button')
    const dropdownBtns = buttons.filter((b) => b.textContent?.includes('Dropdown'))
    expect(dropdownBtns.length).toBeGreaterThanOrEqual(2)
    expect(screen.getByRole('button', { name: 'Toggle Split Dropdown' })).toBeInTheDocument()
  })

  it('opens regular dropdown menu on click', async () => {
    const user = userEvent.setup()
    render(<DropdownColumn title="Dropdown Variation" items={items} direction="dropdown" />)
    const button = screen.getByRole('button', { name: 'Dropdown', expanded: false })
    await user.click(button)
    expect(screen.getByRole('menu')).toBeInTheDocument()
    expect(screen.getByRole('menuitem', { name: 'Action' })).toBeInTheDocument()
  })

  it('closes menu when clicking outside', async () => {
    const user = userEvent.setup()
    render(
      <div>
        <DropdownColumn title="Dropdown Variation" items={items} direction="dropdown" />
        <button>Outside</button>
      </div>,
    )
    await user.click(screen.getByRole('button', { name: 'Dropdown', expanded: false }))
    expect(screen.getByRole('menu')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Outside' }))
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('does not close menu on non-Escape key', async () => {
    const user = userEvent.setup()
    render(<DropdownColumn title="Dropdown Variation" items={items} direction="dropdown" />)
    await user.click(screen.getByRole('button', { name: 'Dropdown', expanded: false }))
    expect(screen.getByRole('menu')).toBeInTheDocument()
    await user.keyboard('{ArrowDown}')
    expect(screen.getByRole('menu')).toBeInTheDocument()
  })

  it('closes menu on Escape key', async () => {
    const user = userEvent.setup()
    render(<DropdownColumn title="Dropdown Variation" items={items} direction="dropdown" />)
    await user.click(screen.getByRole('button', { name: 'Dropdown', expanded: false }))
    expect(screen.getByRole('menu')).toBeInTheDocument()
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('opens split dropdown on caret click', async () => {
    const user = userEvent.setup()
    render(<DropdownColumn title="Dropdown Variation" items={items} direction="dropdown" />)
    const caret = screen.getByRole('button', { name: 'Toggle Split Dropdown' })
    await user.click(caret)
    expect(screen.getByRole('menu')).toBeInTheDocument()
  })

  it('closes other menus when opening one', async () => {
    const user = userEvent.setup()
    render(<DropdownColumn title="Dropdown Variation" items={items} direction="dropdown" />)
    await user.click(screen.getByRole('button', { name: 'Dropdown', expanded: false }))
    expect(screen.getByRole('menu')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Toggle Split Dropdown' }))
    const menus = screen.getAllByRole('menu')
    expect(menus).toHaveLength(1)
  })

  it('renders divider in menu items', async () => {
    const user = userEvent.setup()
    render(<DropdownColumn title="Dropdown Variation" items={items} direction="dropdown" />)
    await user.click(screen.getByRole('button', { name: 'Dropdown', expanded: false }))
    expect(screen.getByRole('menuitem', { name: 'Separated link' })).toBeInTheDocument()
  })
})
