import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders the heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Dropdown')
  })

  it('renders the footer with Pings brand', () => {
    render(<App />)
    expect(screen.getByText('Pings')).toBeInTheDocument()
  })

  it('renders a link to componentdock.com in the footer', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('shows the bell icon badge with count 5', () => {
    render(<App />)
    expect(screen.getByText('5')).toBeInTheDocument()
  })

  it('opens the dropdown on bell icon click', async () => {
    const user = userEvent.setup()
    render(<App />)
    const bell = screen.getByRole('button', { name: /notifications/i })
    await user.click(bell)
    expect(screen.getByText('Notifications')).toBeInTheDocument()
    expect(screen.getByText('Mark all as read')).toBeInTheDocument()
  })

  it('closes the dropdown on second bell icon click', async () => {
    const user = userEvent.setup()
    render(<App />)
    const bell = screen.getByRole('button', { name: /notifications/i })
    await user.click(bell)
    expect(screen.getByText('Notifications')).toBeInTheDocument()
    await user.click(bell)
    expect(screen.queryByText('Notifications')).not.toBeInTheDocument()
  })

  it('displays five notification items when open', async () => {
    const user = userEvent.setup()
    render(<App />)
    const bell = screen.getByRole('button', { name: /notifications/i })
    await user.click(bell)
    expect(screen.getByText('Claudia Gideon')).toBeInTheDocument()
    expect(screen.getAllByText('Alex Stafford').length).toBe(2)
    expect(screen.getAllByText('Devin Richards').length).toBe(2)
  })

  it('shows View All link at the bottom', async () => {
    const user = userEvent.setup()
    render(<App />)
    const bell = screen.getByRole('button', { name: /notifications/i })
    await user.click(bell)
    expect(screen.getByText('View All')).toBeInTheDocument()
  })

  it('highlights unread items with distinct styling', async () => {
    const user = userEvent.setup()
    render(<App />)
    const bell = screen.getByRole('button', { name: /notifications/i })
    await user.click(bell)
    const items = screen.getAllByRole('listitem')
    expect(items.length).toBe(5)
    // First two items are unread (have bg-[#fffaef] class)
    const unreadItems = items.filter((item) => item.className.includes('bg-[#fffaef]'))
    expect(unreadItems.length).toBe(2)
    // Last three items are read
    const readItems = items.filter((item) => !item.className.includes('bg-[#fffaef]'))
    expect(readItems.length).toBe(3)
  })
})
