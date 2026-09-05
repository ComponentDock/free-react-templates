import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the profile button', () => {
    render(<App />)
    expect(screen.getByTestId('profile-button')).toBeInTheDocument()
  })

  it('displays user name and role on profile button', () => {
    render(<App />)
    expect(screen.getByText('Alex Morgan')).toBeInTheDocument()
    expect(screen.getByText('Senior Developer')).toBeInTheDocument()
  })

  it('has avatar image with alt text', () => {
    render(<App />)
    expect(screen.getByAltText('User avatar')).toBeInTheDocument()
  })

  it('profile button has aria-haspopup', () => {
    render(<App />)
    expect(screen.getByTestId('profile-button')).toHaveAttribute('aria-haspopup', 'true')
  })

  it('profile button starts with aria-expanded false', () => {
    render(<App />)
    expect(screen.getByTestId('profile-button')).toHaveAttribute('aria-expanded', 'false')
  })

  it('clicking profile button opens dropdown', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByTestId('profile-button'))
    expect(screen.getByTestId('profile-dropdown')).toBeInTheDocument()
    expect(screen.getByTestId('profile-button')).toHaveAttribute('aria-expanded', 'true')
  })

  it('dropdown shows user info header', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByTestId('profile-button'))
    expect(screen.getByText('alex.morgan@email.com')).toBeInTheDocument()
  })

  it('dropdown shows menu items with icons', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByTestId('profile-button'))
    expect(screen.getByTestId('menu-item-settings')).toBeInTheDocument()
    expect(screen.getByTestId('menu-item-profile')).toBeInTheDocument()
    expect(screen.getByTestId('menu-item-dashboard')).toBeInTheDocument()
    expect(screen.getByTestId('menu-item-logout')).toBeInTheDocument()
  })

  it('clicking profile button again closes dropdown', async () => {
    const user = userEvent.setup()
    render(<App />)
    const btn = screen.getByTestId('profile-button')
    await user.click(btn)
    expect(screen.getByTestId('profile-dropdown')).toBeInTheDocument()
    await user.click(btn)
    expect(screen.queryByTestId('profile-dropdown')).not.toBeInTheDocument()
    expect(btn).toHaveAttribute('aria-expanded', 'false')
  })

  it('clicking outside closes dropdown', async () => {
    const user = userEvent.setup()
    render(
      <div>
        <div data-testid="outside">Outside area</div>
        <App />
      </div>,
    )
    await user.click(screen.getByTestId('profile-button'))
    expect(screen.getByTestId('profile-dropdown')).toBeInTheDocument()
    await user.click(screen.getByTestId('outside'))
    expect(screen.queryByTestId('profile-dropdown')).not.toBeInTheDocument()
  })

  it('pressing non-Escape key does not close dropdown', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByTestId('profile-button'))
    expect(screen.getByTestId('profile-dropdown')).toBeInTheDocument()
    // Dispatch a keydown that is NOT Escape on the document
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'a' }))
    expect(screen.getByTestId('profile-dropdown')).toBeInTheDocument()
  })

  it('pressing Escape closes dropdown', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByTestId('profile-button'))
    expect(screen.getByTestId('profile-dropdown')).toBeInTheDocument()
    await user.keyboard('{Escape}')
    expect(screen.queryByTestId('profile-dropdown')).not.toBeInTheDocument()
  })

  it('clicking a menu item closes dropdown', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByTestId('profile-button'))
    expect(screen.getByTestId('profile-dropdown')).toBeInTheDocument()
    await user.click(screen.getByTestId('menu-item-settings'))
    expect(screen.queryByTestId('profile-dropdown')).not.toBeInTheDocument()
  })

  it('menu items have role="menuitem"', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByTestId('profile-button'))
    const items = screen.getAllByRole('menuitem')
    expect(items.length).toBe(4)
    items.forEach((item) => {
      expect(item).toHaveAttribute('role', 'menuitem')
    })
  })

  it('dropdown has role="menu"', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByTestId('profile-button'))
    expect(screen.getByRole('menu')).toBeInTheDocument()
  })

  it('renders footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /component dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('footer link opens in new tab', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /component dock/i })).toHaveAttribute(
      'target',
      '_blank',
    )
  })
})
