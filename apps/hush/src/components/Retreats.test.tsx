import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Retreats } from './Retreats'

describe('Retreats', () => {
  it('renders the heading and three retreat cards', () => {
    render(<Retreats />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Step Away. Go Deeper.' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Spring Silence Retreat' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Introduction to Contemplative Prayer' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Day of Rest' })).toBeInTheDocument()
  })

  it('marks the featured retreat with a badge and its price', () => {
    render(<Retreats />)
    expect(screen.getByText('Featured')).toBeInTheDocument()
    expect(screen.getByText('4 spots left')).toBeInTheDocument()
    expect(screen.getByText('$795')).toBeInTheDocument()
    expect(screen.getByText('$495')).toBeInTheDocument()
    expect(screen.getByText('$95')).toBeInTheDocument()
  })

  it('shows dates, duration, leader and booking links on each card', () => {
    render(<Retreats />)
    expect(screen.getByText('April 14–19, 2025')).toBeInTheDocument()
    expect(screen.getByText('Sr. Margaret Anne, OSB')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Book This Retreat' })).toHaveLength(3)
  })
})
