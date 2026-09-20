import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Schedule } from './Schedule'

describe('Schedule', () => {
  it('renders the section title', () => {
    render(<Schedule />)
    expect(screen.getByText('Event Schedule')).toBeInTheDocument()
  })

  it('renders day tabs', () => {
    render(<Schedule />)
    expect(screen.getByRole('button', { name: 'Day 01' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Day 02' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Day 03' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Day 04' })).toBeInTheDocument()
  })

  it('shows Day 01 events by default', () => {
    render(<Schedule />)
    expect(screen.getByText('Registration')).toBeInTheDocument()
    expect(screen.getByText('Opening Keynote')).toBeInTheDocument()
  })

  it('switches to Day 02 on click', async () => {
    const user = userEvent.setup()
    render(<Schedule />)
    await user.click(screen.getByRole('button', { name: 'Day 02' }))
    expect(screen.getByText('AI & Machine Learning')).toBeInTheDocument()
    expect(screen.getByText('Cloud Architecture')).toBeInTheDocument()
  })

  it('switches to Day 03 on click', async () => {
    const user = userEvent.setup()
    render(<Schedule />)
    await user.click(screen.getByRole('button', { name: 'Day 03' }))
    expect(screen.getByText('TypeScript Deep Dive')).toBeInTheDocument()
    expect(screen.getByText('CSS Architecture')).toBeInTheDocument()
  })

  it('switches to Day 04 on click', async () => {
    const user = userEvent.setup()
    render(<Schedule />)
    await user.click(screen.getByRole('button', { name: 'Day 04' }))
    expect(screen.getByText('Hackathon Presentations')).toBeInTheDocument()
    expect(screen.getByText('Awards Ceremony')).toBeInTheDocument()
  })
})
