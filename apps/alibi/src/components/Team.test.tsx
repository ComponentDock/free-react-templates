import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the heading and all team members', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { name: /Meet Our Attorneys/i })).toBeInTheDocument()
    expect(screen.getAllByText('Sarah Johnson').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Michael Chen').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Emily Rodriguez').length).toBeGreaterThanOrEqual(1)
  })

  it('renders email links for each attorney', () => {
    render(<Team />)
    expect(screen.getByRole('link', { name: /Email Sarah Johnson/i })).toHaveAttribute(
      'href',
      'mailto:sarah@counsel.com',
    )
    expect(screen.getByRole('link', { name: /Email Michael Chen/i })).toHaveAttribute(
      'href',
      'mailto:michael@counsel.com',
    )
  })
})
