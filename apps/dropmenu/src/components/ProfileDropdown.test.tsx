import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { ProfileDropdown } from './ProfileDropdown'

describe('ProfileDropdown', () => {
  it('renders the profile trigger with name and location', () => {
    render(<ProfileDropdown />)
    expect(screen.getByText('Kevin Thomas')).toBeInTheDocument()
    expect(screen.getByText('New York City, USA')).toBeInTheDocument()
  })

  it('renders the profile image', () => {
    render(<ProfileDropdown />)
    const img = screen.getByRole('img', { name: 'Kevin Thomas' })
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })

  it('dropdown is closed initially', () => {
    render(<ProfileDropdown />)
    expect(screen.queryByText('User Dashboard')).not.toBeInTheDocument()
    expect(screen.queryByText('Inbox')).not.toBeInTheDocument()
  })

  it('opens the dropdown when trigger is clicked', async () => {
    const user = userEvent.setup()
    render(<ProfileDropdown />)
    const trigger = screen.getByRole('button', { name: /kevin thomas/i })
    await user.click(trigger)
    expect(screen.getByText('User Dashboard')).toBeInTheDocument()
  })

  it('shows all menu items when open', async () => {
    const user = userEvent.setup()
    render(<ProfileDropdown />)
    await user.click(screen.getByRole('button', { name: /kevin thomas/i }))

    expect(screen.getByText('User Dashboard')).toBeInTheDocument()
    expect(screen.getByText('Inbox')).toBeInTheDocument()
    expect(screen.getByText('Following')).toBeInTheDocument()
    expect(screen.getByText('Setting')).toBeInTheDocument()
    expect(screen.getByText('Log out')).toBeInTheDocument()
  })

  it('shows the inbox count badge', async () => {
    const user = userEvent.setup()
    render(<ProfileDropdown />)
    await user.click(screen.getByRole('button', { name: /kevin thomas/i }))
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('shows the New badge on Setting', async () => {
    const user = userEvent.setup()
    render(<ProfileDropdown />)
    await user.click(screen.getByRole('button', { name: /kevin thomas/i }))
    expect(screen.getByText('New')).toBeInTheDocument()
  })

  it('closes the dropdown when clicking outside', async () => {
    const user = userEvent.setup()
    render(
      <div>
        <ProfileDropdown />
        <button type="button">Outside</button>
      </div>,
    )
    await user.click(screen.getByRole('button', { name: /kevin thomas/i }))
    expect(screen.getByText('User Dashboard')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /outside/i }))
    expect(screen.queryByText('User Dashboard')).not.toBeInTheDocument()
  })

  it('toggles dropdown on repeated clicks', async () => {
    const user = userEvent.setup()
    render(<ProfileDropdown />)
    const trigger = screen.getByRole('button', { name: /kevin thomas/i })

    await user.click(trigger)
    expect(screen.getByText('User Dashboard')).toBeInTheDocument()

    await user.click(trigger)
    expect(screen.queryByText('User Dashboard')).not.toBeInTheDocument()
  })

  it('sets correct aria-expanded on trigger', async () => {
    const user = userEvent.setup()
    render(<ProfileDropdown />)
    const trigger = screen.getByRole('button', { name: /kevin thomas/i })
    expect(trigger).toHaveAttribute('aria-expanded', 'false')

    await user.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
  })

  it('has aria-haspopup on trigger', () => {
    render(<ProfileDropdown />)
    const trigger = screen.getByRole('button', { name: /kevin thomas/i })
    expect(trigger).toHaveAttribute('aria-haspopup', 'true')
  })

  it('accepts custom name and location', () => {
    render(<ProfileDropdown name="Jane Doe" location="London, UK" />)
    expect(screen.getByText('Jane Doe')).toBeInTheDocument()
    expect(screen.getByText('London, UK')).toBeInTheDocument()
  })

  it('each menu item is a link', async () => {
    const user = userEvent.setup()
    render(<ProfileDropdown />)
    await user.click(screen.getByRole('button', { name: /kevin thomas/i }))

    const links = screen.getAllByRole('link')
    expect(links.length).toBe(5)
    for (const link of links) {
      expect(link).toHaveAttribute('href', '#')
    }
  })
})
