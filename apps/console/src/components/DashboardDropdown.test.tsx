import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { DashboardDropdown } from './DashboardDropdown'

describe('DashboardDropdown', () => {
  it('renders the trigger button with Dashboard label', () => {
    render(<DashboardDropdown />)
    expect(screen.getByRole('button', { name: /Dashboard/i })).toBeInTheDocument()
  })

  it('menu is hidden by default', () => {
    render(<DashboardDropdown />)
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('opens menu on trigger click', async () => {
    const user = userEvent.setup()
    render(<DashboardDropdown />)
    await user.click(screen.getByRole('button', { name: /Dashboard/i }))
    expect(screen.getByRole('menu')).toBeInTheDocument()
  })

  it('shows all five dashboard items in order', async () => {
    const user = userEvent.setup()
    render(<DashboardDropdown />)
    await user.click(screen.getByRole('button', { name: /Dashboard/i }))
    const items = screen.getAllByRole('menuitem')
    expect(items).toHaveLength(5)
    expect(items[0]).toHaveTextContent('Dashboard 1')
    expect(items[1]).toHaveTextContent('Dashboard 2')
    expect(items[2]).toHaveTextContent('Dashboard 3')
    expect(items[3]).toHaveTextContent('Dashboard 4')
    expect(items[4]).toHaveTextContent('Dashboard 5')
  })

  it('items 4 and 5 have New badges', async () => {
    const user = userEvent.setup()
    render(<DashboardDropdown />)
    await user.click(screen.getByRole('button', { name: /Dashboard/i }))
    const items = screen.getAllByRole('menuitem')
    expect(items[3]).toHaveTextContent('Dashboard 4New')
    expect(items[4]).toHaveTextContent('Dashboard 5New')
  })

  it('items 1, 2, 3 have no badge', async () => {
    const user = userEvent.setup()
    render(<DashboardDropdown />)
    await user.click(screen.getByRole('button', { name: /Dashboard/i }))
    const items = screen.getAllByRole('menuitem')
    expect(items[0]).not.toHaveTextContent('New')
    expect(items[1]).not.toHaveTextContent('New')
    expect(items[2]).not.toHaveTextContent('New')
  })

  it('closes menu on outside click', async () => {
    const user = userEvent.setup()
    render(<DashboardDropdown />)
    await user.click(screen.getByRole('button', { name: /Dashboard/i }))
    expect(screen.getByRole('menu')).toBeInTheDocument()
    await user.click(document.body)
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('closes menu on Escape key', async () => {
    const user = userEvent.setup()
    render(<DashboardDropdown />)
    await user.click(screen.getByRole('button', { name: /Dashboard/i }))
    expect(screen.getByRole('menu')).toBeInTheDocument()
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('non-Escape keydown does not close the menu', async () => {
    const user = userEvent.setup()
    render(<DashboardDropdown />)
    await user.click(screen.getByRole('button', { name: /Dashboard/i }))
    expect(screen.getByRole('menu')).toBeInTheDocument()
    await user.keyboard('{ArrowDown}')
    expect(screen.getByRole('menu')).toBeInTheDocument()
  })

  it('closes menu on re-click trigger', async () => {
    const user = userEvent.setup()
    render(<DashboardDropdown />)
    const trigger = screen.getByRole('button', { name: /Dashboard/i })
    await user.click(trigger)
    expect(screen.getByRole('menu')).toBeInTheDocument()
    await user.click(trigger)
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('sets aria-haspopup and aria-expanded on trigger', async () => {
    const user = userEvent.setup()
    render(<DashboardDropdown />)
    const trigger = screen.getByRole('button', { name: /Dashboard/i })
    expect(trigger).toHaveAttribute('aria-haspopup', 'menu')
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    await user.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
  })

  it('associates menu with trigger via aria-controls', async () => {
    const user = userEvent.setup()
    render(<DashboardDropdown />)
    const trigger = screen.getByRole('button', { name: /Dashboard/i })
    await user.click(trigger)
    const menuId = trigger.getAttribute('aria-controls') ?? ''
    expect(menuId).toBeTruthy()
    expect(document.getElementById(menuId)).toBeInTheDocument()
  })

  it('menu items have role menuitem', async () => {
    const user = userEvent.setup()
    render(<DashboardDropdown />)
    await user.click(screen.getByRole('button', { name: /Dashboard/i }))
    const items = screen.getAllByRole('menuitem')
    items.forEach((item) => {
      expect(item).toHaveAttribute('role', 'menuitem')
    })
  })

  it('clicking a menu item closes the menu', async () => {
    const user = userEvent.setup()
    render(<DashboardDropdown />)
    await user.click(screen.getByRole('button', { name: /Dashboard/i }))
    expect(screen.getByRole('menu')).toBeInTheDocument()
    const firstItem = screen.getAllByRole('menuitem')[0] as HTMLElement
    await user.click(firstItem)
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('clicking a menu item prevents default navigation', async () => {
    const user = userEvent.setup()
    render(<DashboardDropdown />)
    await user.click(screen.getByRole('button', { name: /Dashboard/i }))
    const items = screen.getAllByRole('menuitem')
    const item = items[0] as HTMLElement
    const href = item.getAttribute('href')
    expect(href).toBe('#')
  })
})
