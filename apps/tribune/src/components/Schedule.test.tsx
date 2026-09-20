import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Schedule } from './Schedule'

describe('Schedule', () => {
  it('renders the heading', () => {
    render(<Schedule />)
    expect(screen.getByText('Conference Schedule')).toBeInTheDocument()
  })

  it('renders three day tabs', () => {
    render(<Schedule />)
    expect(screen.getByRole('tab', { name: /first day/i })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /second day/i })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /third day/i })).toBeInTheDocument()
  })

  it('shows first day sessions by default', () => {
    render(<Schedule />)
    expect(screen.getByText('Introduction to Business Leaders')).toBeInTheDocument()
    expect(screen.getByText('Digital Marketing Strategies')).toBeInTheDocument()
  })

  it('switches to second day on tab click', async () => {
    const user = userEvent.setup()
    render(<Schedule />)
    await user.click(screen.getByRole('tab', { name: /second day/i }))
    expect(screen.getByText('Innovation and Growth')).toBeInTheDocument()
    expect(screen.getByText('Leadership in the Modern Era')).toBeInTheDocument()
  })

  it('switches to third day on tab click', async () => {
    const user = userEvent.setup()
    render(<Schedule />)
    await user.click(screen.getByRole('tab', { name: /third day/i }))
    expect(screen.getByText('Future of Work')).toBeInTheDocument()
    expect(screen.getByText('Networking & Closing Ceremony')).toBeInTheDocument()
  })
})
