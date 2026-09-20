import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { ProgramSchedule } from './ProgramSchedule'

describe('ProgramSchedule', () => {
  it('renders the section title', () => {
    render(<ProgramSchedule />)
    expect(screen.getByText('Program Details')).toBeInTheDocument()
  })

  it('renders all 4 date tabs', () => {
    render(<ProgramSchedule />)
    for (const tab of ['12 Jan', '13 Jan', '14 Jan', '15 Jan']) {
      expect(screen.getByRole('tab', { name: tab })).toBeInTheDocument()
    }
  })

  it('shows first tab programs by default', () => {
    render(<ProgramSchedule />)
    expect(screen.getByText('Fully Innovative Conference')).toBeInTheDocument()
    expect(screen.getByText('AI in Business')).toBeInTheDocument()
    expect(screen.getByText('Startup Pitch')).toBeInTheDocument()
  })

  it('switches programs when a tab is clicked', async () => {
    const user = userEvent.setup()
    render(<ProgramSchedule />)
    await user.click(screen.getByRole('tab', { name: '13 Jan' }))
    expect(screen.getByText('Cloud Architecture')).toBeInTheDocument()
    expect(screen.getByText('Blockchain Workshop')).toBeInTheDocument()
    expect(screen.getByText('Design Thinking')).toBeInTheDocument()
  })

  it('renders speaker images', () => {
    render(<ProgramSchedule />)
    const images = screen.getAllByAltText(/Patricia Stone|James Oliver|Carla Banks/)
    expect(images.length).toBeGreaterThan(0)
  })

  it('has a landmark section', () => {
    render(<ProgramSchedule />)
    expect(document.querySelector('section')).toBeInTheDocument()
  })
})
