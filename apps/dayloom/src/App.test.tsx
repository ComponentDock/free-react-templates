import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('Dayloom App', () => {
  it('renders brand title "Dayloom"', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: /dayloom/i })).toBeInTheDocument()
  })

  it('renders view switcher options (Month, Week, Day)', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /^month$/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /^week$/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /^day$/i })).toBeInTheDocument()
  })

  it('renders calendar grid and event sidebar', () => {
    render(<App />)
    expect(screen.getByRole('region', { name: /calendar grid/i })).toBeInTheDocument()
    expect(
      screen.getByRole('complementary', { name: /event schedule sidebar/i }),
    ).toBeInTheDocument()
  })

  it('allows adding a new event via the sidebar form', async () => {
    const user = userEvent.setup()
    render(<App />)

    const titleInput = screen.getByRole('textbox', { name: /event title/i })
    const submitBtn = screen.getByRole('button', { name: /add event/i })

    await user.type(titleInput, 'Team Sprint Planning')
    await user.click(submitBtn)

    // Text appears in both calendar grid badge and sidebar event list
    const matches = screen.getAllByText('Team Sprint Planning')
    expect(matches.length).toBeGreaterThanOrEqual(2)
  })

  it('allows deleting an event from the sidebar', async () => {
    const user = userEvent.setup()
    render(<App />)

    // Add a second event on today
    const titleInput = screen.getByRole('textbox', { name: /event title/i })
    await user.type(titleInput, 'Afternoon Standup')
    await user.click(screen.getByRole('button', { name: /add event/i }))

    // Now delete the first event — both events are on today, second should survive
    const deleteBtns = screen.getAllByRole('button', { name: /delete event/i })
    expect(deleteBtns.length).toBe(2)
    await user.click(deleteBtns[0]!)

    // "Team Sync & Planning" should be gone, but "Afternoon Standup" should remain
    expect(screen.queryByText('Team Sync & Planning')).not.toBeInTheDocument()
    const remaining = screen.getAllByText('Afternoon Standup')
    expect(remaining.length).toBeGreaterThanOrEqual(1)
  })

  it('does not affect events on other dates when deleting', async () => {
    const user = userEvent.setup()
    render(<App />)

    // Click day 5 in the calendar grid to select it
    const monthName = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    const day5Btn = screen.getByRole('button', { name: new RegExp(`^5 ${monthName}`) })
    await user.click(day5Btn)

    // Add event on day 5
    const titleInput = screen.getByRole('textbox', { name: /event title/i })
    await user.type(titleInput, 'Day Five Event')
    await user.click(screen.getByRole('button', { name: /add event/i }))

    // Switch back to today and delete today's event
    const todayBtn = screen.getByRole('button', {
      name: new RegExp(`^${new Date().getDate()} ${monthName}.*today`),
    })
    await user.click(todayBtn)

    const deleteBtns = screen.getAllByRole('button', { name: /delete event/i })
    await user.click(deleteBtns[0]!)

    // Day Five Event should still exist (wasn't on today's date)
    expect(screen.getAllByText('Day Five Event').length).toBeGreaterThanOrEqual(1)
  })

  it('filters events when searching', async () => {
    const user = userEvent.setup()
    render(<App />)

    const searchInput = screen.getByPlaceholderText(/search events/i)
    await user.type(searchInput, 'nonexistent')

    // No events match the search
    expect(screen.queryByText('Team Sync & Planning')).not.toBeInTheDocument()
    expect(screen.getByText(/no events scheduled/i)).toBeInTheDocument()
  })

  it('switches view when clicking view buttons', async () => {
    const user = userEvent.setup()
    render(<App />)

    const weekBtn = screen.getByRole('button', { name: /^week$/i })
    await user.click(weekBtn)
    // Week button should now be active (bg-white)
    expect(weekBtn.className).toContain('bg-white')
  })

  it('renders the footer with Component Dock branding', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('displays pre-populated event for today', () => {
    render(<App />)
    const matches = screen.getAllByText('Team Sync & Planning')
    expect(matches.length).toBeGreaterThanOrEqual(2)
    expect(screen.getByText('10:00')).toBeInTheDocument()
  })
})
