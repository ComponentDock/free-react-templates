import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Team } from './Team'

describe('Team', () => {
  it('shows the heading and at least four member cards', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { name: /Expert Team Members/i })).toBeInTheDocument()
    expect(screen.getAllByRole('img')).toHaveLength(4)
  })

  it('shows names and roles for every member', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { name: 'Sharon Needles' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'John Withawind' })).toBeInTheDocument()
    expect(screen.getByText('Residential Cleaning Expert')).toBeInTheDocument()
    expect(screen.getByText('Commercial Cleaning Lead')).toBeInTheDocument()
  })

  it('reveals three social links per member', () => {
    render(<Team />)
    expect(screen.getAllByRole('link', { name: /Facebook/i })).toHaveLength(4)
    expect(screen.getAllByRole('link', { name: /Twitter/i })).toHaveLength(4)
    expect(screen.getAllByRole('link', { name: /Globe/i })).toHaveLength(4)
  })
})
