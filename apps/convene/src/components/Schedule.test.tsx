import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Schedule } from './Schedule'

describe('Schedule', () => {
  it('renders the heading', () => {
    render(<Schedule />)
    expect(screen.getByText('Our Schedule')).toBeInTheDocument()
  })

  it('renders Day 1 tab as active by default', () => {
    render(<Schedule />)
    expect(screen.getByText('Day 1')).toBeInTheDocument()
    expect(screen.getByText('Dealing with Difficult People')).toBeInTheDocument()
  })

  it('switches to Day 2 on tab click', async () => {
    const user = userEvent.setup()
    render(<Schedule />)
    await user.click(screen.getByText('Day 2'))
    expect(screen.getByText('Building Your Brand Online')).toBeInTheDocument()
  })

  it('switches to Day 3 on tab click', async () => {
    const user = userEvent.setup()
    render(<Schedule />)
    await user.click(screen.getByText('Day 3'))
    expect(screen.getByText('Future of Digital Events')).toBeInTheDocument()
  })

  it('renders tab date labels', () => {
    render(<Schedule />)
    expect(screen.getByText('May 04, 2025')).toBeInTheDocument()
    expect(screen.getByText('May 05, 2025')).toBeInTheDocument()
    expect(screen.getByText('May 06, 2025')).toBeInTheDocument()
  })

  it('handles empty tab gracefully', async () => {
    const user = userEvent.setup()
    render(<Schedule />)
    await user.click(screen.getByText('Day 2'))
    await user.click(screen.getByText('Day 3'))
    expect(screen.queryByText('Dealing with Difficult People')).not.toBeInTheDocument()
  })
})
