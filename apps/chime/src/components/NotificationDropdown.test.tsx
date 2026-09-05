import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, beforeEach } from 'vitest'
import { NotificationDropdown } from './NotificationDropdown'

describe('NotificationDropdown', () => {
  beforeEach(() => {
    document.title = ''
  })

  it('renders the trigger button with bell icon and label', () => {
    render(<NotificationDropdown />)
    const trigger = screen.getByRole('button', { name: /notifications/i })
    expect(trigger).toBeInTheDocument()
    expect(trigger).toHaveAttribute('aria-haspopup', 'menu')
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
  })

  it('opens the menu when the trigger is clicked', async () => {
    const user = userEvent.setup()
    render(<NotificationDropdown />)
    const trigger = screen.getByRole('button', { name: /notifications/i })

    await user.click(trigger)

    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText('David Smith')).toBeInTheDocument()
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('Gary Clinton')).toBeInTheDocument()
  })

  it('closes the menu when the trigger is clicked again', async () => {
    const user = userEvent.setup()
    render(<NotificationDropdown />)
    const trigger = screen.getByRole('button', { name: /notifications/i })

    await user.click(trigger)
    expect(screen.getByText('David Smith')).toBeInTheDocument()

    await user.click(trigger)
    expect(screen.queryByText('David Smith')).not.toBeInTheDocument()
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
  })

  it('shows 3 notification items in order', async () => {
    const user = userEvent.setup()
    render(<NotificationDropdown />)
    await user.click(screen.getByRole('button', { name: /notifications/i }))

    const items = screen.getAllByRole('menuitem')
    // 3 notification items + 1 View All link
    expect(items).toHaveLength(4)
    expect(items[0]).toHaveTextContent('David Smith')
    expect(items[1]).toHaveTextContent('John Doe')
    expect(items[2]).toHaveTextContent('Gary Clinton')
    expect(items[3]).toHaveTextContent('View All')
  })

  it('shows the correct actions for each notification', async () => {
    const user = userEvent.setup()
    render(<NotificationDropdown />)
    await user.click(screen.getByRole('button', { name: /notifications/i }))

    expect(screen.getByText('commented on your album')).toBeInTheDocument()
    expect(screen.getByText('reacted to your video')).toBeInTheDocument()
    expect(screen.getByText('commented on your picture')).toBeInTheDocument()
  })

  it('shows "10 min ago" timestamps', async () => {
    const user = userEvent.setup()
    render(<NotificationDropdown />)
    await user.click(screen.getByRole('button', { name: /notifications/i }))

    const timestamps = screen.getAllByText('10 min ago')
    expect(timestamps).toHaveLength(3)
  })

  it('renders View All link', async () => {
    const user = userEvent.setup()
    render(<NotificationDropdown />)
    await user.click(screen.getByRole('button', { name: /notifications/i }))

    expect(screen.getByText('View All')).toBeInTheDocument()
  })

  it('closes menu when View All is clicked', async () => {
    const user = userEvent.setup()
    render(<NotificationDropdown />)
    const trigger = screen.getByRole('button', { name: /notifications/i })
    await user.click(trigger)

    await user.click(screen.getByText('View All'))
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText('David Smith')).not.toBeInTheDocument()
  })

  it('closes menu when a notification item is clicked', async () => {
    const user = userEvent.setup()
    render(<NotificationDropdown />)
    const trigger = screen.getByRole('button', { name: /notifications/i })
    await user.click(trigger)

    await user.click(screen.getByText('David Smith'))
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
  })

  it('has aria-controls linking trigger to menu', async () => {
    const user = userEvent.setup()
    render(<NotificationDropdown />)
    const trigger = screen.getByRole('button', { name: /notifications/i })
    await user.click(trigger)

    const controlsId = trigger.getAttribute('aria-controls')
    expect(controlsId).toBeTruthy()
    expect(document.getElementById(controlsId!)).toBeInTheDocument()
  })

  it('closes the menu on Escape key', async () => {
    const user = userEvent.setup()
    render(<NotificationDropdown />)
    const trigger = screen.getByRole('button', { name: /notifications/i })
    await user.click(trigger)

    await user.keyboard('{Escape}')
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText('David Smith')).not.toBeInTheDocument()
  })

  it('does not close the menu on non-Escape keydown', async () => {
    const user = userEvent.setup()
    render(<NotificationDropdown />)
    const trigger = screen.getByRole('button', { name: /notifications/i })
    await user.click(trigger)

    await user.keyboard('a')
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText('David Smith')).toBeInTheDocument()
  })

  it('closes the menu on outside click', async () => {
    const user = userEvent.setup()
    render(<NotificationDropdown />)
    const trigger = screen.getByRole('button', { name: /notifications/i })
    await user.click(trigger)

    expect(screen.getByText('David Smith')).toBeInTheDocument()

    // Click outside the dropdown
    await user.click(document.body)
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
  })

  it('shows notification avatars with presence dots', async () => {
    const user = userEvent.setup()
    render(<NotificationDropdown />)
    await user.click(screen.getByRole('button', { name: /notifications/i }))

    const avatars = screen.getAllByRole('img')
    expect(avatars).toHaveLength(3)
    expect(avatars[0]).toHaveAttribute('src', 'https://picsum.photos/seed/chime-1/90/90')
    expect(avatars[1]).toHaveAttribute('src', 'https://picsum.photos/seed/chime-2/90/90')
    expect(avatars[2]).toHaveAttribute('src', 'https://picsum.photos/seed/chime-3/90/90')
  })

  it('has a menu element with role menu', async () => {
    const user = userEvent.setup()
    render(<NotificationDropdown />)
    await user.click(screen.getByRole('button', { name: /notifications/i }))

    const menu = screen.getByRole('menu')
    expect(menu).toBeInTheDocument()
  })
})
