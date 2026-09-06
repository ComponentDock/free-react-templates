import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NotificationsDropdown } from './NotificationsDropdown'

describe('NotificationsDropdown', () => {
  it('renders the bell icon button', () => {
    render(<NotificationsDropdown />)
    expect(screen.getByRole('button', { name: /notifications/i })).toBeInTheDocument()
  })

  it('shows badge with count 5', () => {
    render(<NotificationsDropdown />)
    expect(screen.getByText('5')).toBeInTheDocument()
  })

  it('is closed by default', () => {
    render(<NotificationsDropdown />)
    expect(screen.queryByText('Notifications')).not.toBeInTheDocument()
  })

  it('opens on click', async () => {
    const user = userEvent.setup()
    render(<NotificationsDropdown />)
    await user.click(screen.getByRole('button', { name: /notifications/i }))
    expect(screen.getByText('Notifications')).toBeInTheDocument()
  })

  it('closes on second click', async () => {
    const user = userEvent.setup()
    render(<NotificationsDropdown />)
    const btn = screen.getByRole('button', { name: /notifications/i })
    await user.click(btn)
    expect(screen.getByText('Notifications')).toBeInTheDocument()
    await user.click(btn)
    expect(screen.queryByText('Notifications')).not.toBeInTheDocument()
  })

  it('shows Mark all as read link', async () => {
    const user = userEvent.setup()
    render(<NotificationsDropdown />)
    await user.click(screen.getByRole('button', { name: /notifications/i }))
    expect(screen.getByText('Mark all as read')).toBeInTheDocument()
  })

  it('shows View All link', async () => {
    const user = userEvent.setup()
    render(<NotificationsDropdown />)
    await user.click(screen.getByRole('button', { name: /notifications/i }))
    expect(screen.getByText('View All')).toBeInTheDocument()
  })

  it('renders five notification items', async () => {
    const user = userEvent.setup()
    render(<NotificationsDropdown />)
    await user.click(screen.getByRole('button', { name: /notifications/i }))
    const items = screen.getAllByRole('listitem')
    expect(items).toHaveLength(5)
  })

  it('closes when clicking outside the dropdown', async () => {
    const user = userEvent.setup()
    render(<NotificationsDropdown />)
    await user.click(screen.getByRole('button', { name: /notifications/i }))
    expect(screen.getByText('Notifications')).toBeInTheDocument()
    // Click outside the dropdown (on the document body)
    await user.click(document.body)
    expect(screen.queryByText('Notifications')).not.toBeInTheDocument()
  })
})
