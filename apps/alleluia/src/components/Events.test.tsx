import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Events } from './Events'

describe('Events', () => {
  it('renders section heading', () => {
    render(<Events />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Upcoming Events')
  })

  it('renders event cards with titles', () => {
    render(<Events />)
    expect(screen.getByText('Sunday Worship Service')).toBeInTheDocument()
    expect(screen.getByText('Bible Study Night')).toBeInTheDocument()
    expect(screen.getByText('Community Outreach')).toBeInTheDocument()
  })

  it('renders date badges', () => {
    render(<Events />)
    expect(screen.getByText('15')).toBeInTheDocument()
    expect(screen.getAllByText('Sep')).toHaveLength(3)
  })

  it('renders event descriptions', () => {
    render(<Events />)
    expect(screen.getByText(/weekly worship service/)).toBeInTheDocument()
  })

  it('renders time and location info', () => {
    render(<Events />)
    expect(screen.getByText('10:00 AM')).toBeInTheDocument()
    expect(screen.getByText('Main Sanctuary')).toBeInTheDocument()
  })
})
