import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Dropdown } from './Dropdown'

describe('Dropdown', () => {
  it('renders the trigger button with "All sources" label', () => {
    render(<Dropdown />)
    expect(screen.getByRole('button', { name: /All sources/i })).toBeInTheDocument()
  })

  it('menu is hidden by default', () => {
    render(<Dropdown />)
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('opens menu on trigger click', async () => {
    const user = userEvent.setup()
    render(<Dropdown />)
    await user.click(screen.getByRole('button', { name: /All sources/i }))
    expect(screen.getByRole('menu')).toBeInTheDocument()
  })

  it('shows all four items in order', async () => {
    const user = userEvent.setup()
    render(<Dropdown />)
    await user.click(screen.getByRole('button', { name: /All sources/i }))
    const items = screen.getAllByRole('menuitem')
    expect(items).toHaveLength(4)
    expect(items[0]).toHaveTextContent('All Rources')
    expect(items[1]).toHaveTextContent('Dropbox')
    expect(items[2]).toHaveTextContent('Google Drive')
    expect(items[3]).toHaveTextContent('Eventbrite')
  })

  it('preserves the "All Rources" typo exactly', async () => {
    const user = userEvent.setup()
    render(<Dropdown />)
    await user.click(screen.getByRole('button', { name: /All sources/i }))
    expect(screen.getByRole('menuitem', { name: /All Rources/ })).toBeInTheDocument()
    expect(screen.queryByRole('menuitem', { name: /All Sources/ })).not.toBeInTheDocument()
  })

  it('first item has no subtitle', async () => {
    const user = userEvent.setup()
    render(<Dropdown />)
    await user.click(screen.getByRole('button', { name: /All sources/i }))
    const firstItem = screen.getAllByRole('menuitem')[0] as HTMLElement
    expect(firstItem).not.toHaveTextContent('Lorem ipsum')
  })

  it('items 2-4 have subtitles', async () => {
    const user = userEvent.setup()
    render(<Dropdown />)
    await user.click(screen.getByRole('button', { name: /All sources/i }))
    const items = screen.getAllByRole('menuitem')
    expect(items[1]).toHaveTextContent('Lorem ipsum dolor sit amet harum.')
    expect(items[2]).toHaveTextContent('Lorem ipsum dolor sit amet harum.')
    expect(items[3]).toHaveTextContent('Lorem ipsum dolor sit amet harum.')
  })

  it('closes menu on second trigger click', async () => {
    const user = userEvent.setup()
    render(<Dropdown />)
    const trigger = screen.getByRole('button', { name: /All sources/i })
    await user.click(trigger)
    expect(screen.getByRole('menu')).toBeInTheDocument()
    await user.click(trigger)
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('closes on outside click', async () => {
    const user = userEvent.setup()
    render(
      <div>
        <Dropdown />
        <div data-testid="outside">Outside</div>
      </div>,
    )
    await user.click(screen.getByRole('button', { name: /All sources/i }))
    expect(screen.getByRole('menu')).toBeInTheDocument()
    await user.click(screen.getByTestId('outside'))
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('closes on Escape key', async () => {
    const user = userEvent.setup()
    render(<Dropdown />)
    await user.click(screen.getByRole('button', { name: /All sources/i }))
    expect(screen.getByRole('menu')).toBeInTheDocument()
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('does not close on non-Escape key', async () => {
    const user = userEvent.setup()
    render(<Dropdown />)
    await user.click(screen.getByRole('button', { name: /All sources/i }))
    expect(screen.getByRole('menu')).toBeInTheDocument()
    await user.keyboard('{a}')
    expect(screen.getByRole('menu')).toBeInTheDocument()
  })

  it('sets aria-expanded to false when closed', () => {
    render(<Dropdown />)
    const trigger = screen.getByRole('button', { name: /All sources/i })
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
  })

  it('sets aria-expanded to true when open', async () => {
    const user = userEvent.setup()
    render(<Dropdown />)
    const trigger = screen.getByRole('button', { name: /All sources/i })
    await user.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
  })

  it('has aria-haspopup="menu" on the trigger', () => {
    render(<Dropdown />)
    const trigger = screen.getByRole('button', { name: /All sources/i })
    expect(trigger).toHaveAttribute('aria-haspopup', 'menu')
  })

  it('menu has role="menu"', async () => {
    const user = userEvent.setup()
    render(<Dropdown />)
    await user.click(screen.getByRole('button', { name: /All sources/i }))
    expect(screen.getByRole('menu')).toBeInTheDocument()
  })

  it('items have role="menuitem"', async () => {
    const user = userEvent.setup()
    render(<Dropdown />)
    await user.click(screen.getByRole('button', { name: /All sources/i }))
    const items = screen.getAllByRole('menuitem')
    items.forEach((item) => {
      expect(item).toHaveAttribute('role', 'menuitem')
    })
  })

  it('clicking a menu item does not navigate', async () => {
    const user = userEvent.setup()
    render(<Dropdown />)
    await user.click(screen.getByRole('button', { name: /All sources/i }))
    const items = screen.getAllByRole('menuitem')
    const item = items[0] as HTMLElement
    await user.click(item)
    expect(screen.getByRole('menu')).toBeInTheDocument()
  })

  it('trigger and menu are paired via aria-controls', async () => {
    const user = userEvent.setup()
    render(<Dropdown />)
    const trigger = screen.getByRole('button', { name: /All sources/i })
    const menuId = trigger.getAttribute('aria-controls')
    expect(menuId).toBeTruthy()
    await user.click(trigger)
    const menu = document.getElementById(menuId!)
    expect(menu).toBeInTheDocument()
  })
})
