import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { PrivacyDropdown } from './PrivacyDropdown'

describe('PrivacyDropdown', () => {
  it('renders the trigger button', () => {
    render(<PrivacyDropdown />)
    expect(screen.getByRole('button', { name: /Privacy Settings/ })).toBeInTheDocument()
  })

  it('trigger has aria-haspopup true', () => {
    render(<PrivacyDropdown />)
    expect(screen.getByRole('button', { name: /Privacy Settings/ })).toHaveAttribute(
      'aria-haspopup',
      'true',
    )
  })

  it('trigger has aria-expanded false initially', () => {
    render(<PrivacyDropdown />)
    expect(screen.getByRole('button', { name: /Privacy Settings/ })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('menu is not visible initially', () => {
    render(<PrivacyDropdown />)
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('opens menu on trigger click', async () => {
    const user = userEvent.setup()
    render(<PrivacyDropdown />)
    await user.click(screen.getByRole('button', { name: /Privacy Settings/ }))
    expect(screen.getByRole('menu')).toBeInTheDocument()
  })

  it('trigger has aria-expanded true when menu is open', async () => {
    const user = userEvent.setup()
    render(<PrivacyDropdown />)
    await user.click(screen.getByRole('button', { name: /Privacy Settings/ }))
    expect(screen.getByRole('button', { name: /Privacy Settings/ })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
  })

  it('shows all menu items when open', async () => {
    const user = userEvent.setup()
    render(<PrivacyDropdown />)
    await user.click(screen.getByRole('button', { name: /Privacy Settings/ }))
    expect(screen.getByRole('menuitem', { name: 'Account' })).toBeInTheDocument()
    expect(screen.getByRole('menuitem', { name: 'Privacy & Security' })).toBeInTheDocument()
    expect(screen.getByRole('menuitem', { name: 'Password' })).toBeInTheDocument()
    expect(screen.getByRole('menuitem', { name: 'Notification' })).toBeInTheDocument()
  })

  it('closes menu on trigger click again', async () => {
    const user = userEvent.setup()
    render(<PrivacyDropdown />)
    const trigger = screen.getByRole('button', { name: /Privacy Settings/ })
    await user.click(trigger)
    expect(screen.getByRole('menu')).toBeInTheDocument()
    await user.click(trigger)
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('closes menu on Escape key', async () => {
    const user = userEvent.setup()
    render(<PrivacyDropdown />)
    await user.click(screen.getByRole('button', { name: /Privacy Settings/ }))
    expect(screen.getByRole('menu')).toBeInTheDocument()
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('closes menu when clicking outside', async () => {
    const user = userEvent.setup()
    render(
      <div>
        <PrivacyDropdown />
        <button>Outside</button>
      </div>,
    )
    await user.click(screen.getByRole('button', { name: /Privacy Settings/ }))
    expect(screen.getByRole('menu')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Outside' }))
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('closes menu when a menu item is clicked', async () => {
    const user = userEvent.setup()
    render(<PrivacyDropdown />)
    await user.click(screen.getByRole('button', { name: /Privacy Settings/ }))
    expect(screen.getByRole('menu')).toBeInTheDocument()
    await user.click(screen.getByRole('menuitem', { name: 'Account' }))
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('does not close on non-Escape key', async () => {
    const user = userEvent.setup()
    render(<PrivacyDropdown />)
    await user.click(screen.getByRole('button', { name: /Privacy Settings/ }))
    expect(screen.getByRole('menu')).toBeInTheDocument()
    await user.keyboard('{ArrowDown}')
    expect(screen.getByRole('menu')).toBeInTheDocument()
  })
})
