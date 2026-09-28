import { render, screen } from '@testing-library/react'
import { Events } from './Events'

describe('Events', () => {
  it('renders section heading', () => {
    render(<Events />)
    expect(screen.getByText('Events & News')).toBeInTheDocument()
  })

  it('renders all event cards', () => {
    render(<Events />)
    expect(screen.getByText('Wine Tasting Evening')).toBeInTheDocument()
    expect(screen.getByText('New Year Celebration')).toBeInTheDocument()
    expect(screen.getByText("Valentine's Day Special")).toBeInTheDocument()
  })

  it('renders event dates', () => {
    render(<Events />)
    expect(screen.getByText('Dec 15, 2026')).toBeInTheDocument()
    expect(screen.getByText('Jan 5, 2027')).toBeInTheDocument()
    expect(screen.getByText('Feb 14, 2027')).toBeInTheDocument()
  })

  it('renders event descriptions', () => {
    render(<Events />)
    expect(screen.getByText(/wine pairing dinner/)).toBeInTheDocument()
    expect(screen.getByText(/Ring in the new year/)).toBeInTheDocument()
  })
})
